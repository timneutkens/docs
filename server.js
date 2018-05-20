const next = require('next')
const qs = require('querystring')
const url = require('url')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

function removeEndSlash(fn) {
  return (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const isNext = parsedUrl.path.includes('/_next/')
    if (isNext) return fn(req, res)

    if (parsedUrl.path !== '/' && parsedUrl.path.slice(-1) === '/') {
      const q = qs.stringify(parsedUrl.query)
      res.writeHead(301, {
        Location: parsedUrl.path.slice(0, -1) + (q ? '?' + q : '')
      })
      res.end()
      return
    }

    return fn(req, res, parsedUrl)
  }
}

async function main(req, res, parsedUrl) {
  if (req.url === '/') {
    res.writeHead(301, {
      Location: '/docs'
    })
    res.end()
    return
  }
  if (req.headers.host === 'docs.zeit.sh') {
    // Set the cloudinary custom origin which points to https://docs.zeit.sh
    app.setAssetPrefix('https://assets.zeit.co/raw/upload/docs-assets')
  } else if (/localhost/.test(req.headers.host)) {
    // Set the assetPrefix for localhost
    // It needs to be the http version
    app.setAssetPrefix(`http://${req.headers.host}`)
  } else {
    // Set the assetPrefix for now
    // It needs to be the https version, since now is always HTTPS
    app.setAssetPrefix(`https://${req.headers.host}`)
  }

  handle(req, res, parsedUrl)
}

async function setup(handler) {
  await app.prepare()
  return removeEndSlash(handler)
}

module.exports = setup(main)

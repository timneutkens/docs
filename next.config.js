const isProd = process.env.NODE_ENV === 'production'

const rehypePrism = require('@mapbox/rehype-prism')
// Adds github.com/mdx-js/mdx to Next.js
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
})

module.exports = withMDX({
  target: 'serverless',

  experimental: {
    css: true,

    rewrites: () => [
      { source: '/docs/sitemap.xml', destination: '/sitemap.xml' },
      { source: '/docs/static/(.*)', destination: '/static/$1' },
      { source: '/docs/_next/(.*)', destination: '/_next/$1' }
    ],
    redirects: () => [
      { source: '/api(.*)', destination: '/docs/api', statusCode: 301 },
      {
        source: '/docs/router-status/:code',
        destination: '/docs/v2/network/status-codes#$code',
        statusCode: 301
      },
      {
        source: '/docs/router-status',
        destination: '/docs/v2/network/status-codes',
        statusCode: 301
      },
      {
        source: '/docs/builders',
        destination: '/docs/runtimes',
        statusCode: 301
      },
      {
        source: '/docs/github',
        destination: '/docs/v2/advanced/now-for-github',
        statusCode: 301
      },
      {
        source: '/docs/aliasing',
        destination: '/docs/v2/aliasing-a-deployment',
        statusCode: 301
      },
      {
        source: '/docs/v2/routing/(.*)/?',
        destination: '/docs/v2/network/$1',
        statusCode: 301
      },
      {
        source: '/docs/features/(.*)',
        destination: '/docs/v1/features/$1',
        statusCode: 301
      },
      {
        source: '/docs/static-deployments/(.*)',
        destination: '/docs/v1/static-deployments/$1',
        statusCode: 301
      },
      {
        source: '/docs/deployment-types/(.*)',
        destination: '/docs/v1/deployment-types/$1',
        statusCode: 301
      },
      {
        source: '/docs/(v1/)?guides/updating-now-cli/?$',
        destination: '/guides/updating-now-cli',
        statusCode: 301
      },
      {
        source: '/docs/guides/.*',
        destination: '/guides',
        statusCode: 301
      },
      {
        source: '/docs/getting-started/(.*)',
        destination: '/docs/v1/getting-started/$1',
        statusCode: 301
      },
      {
        source: '/docs/v2/getting-started/(.*)/?',
        destination: '/docs/v2/introduction',
        statusCode: 301
      },
      {
        source: '/docs/v2/(deployments|advanced)/builders/developer-guide(.*)',
        destination:
          'https://github.com/zeit/now/blob/canary/DEVELOPING_A_RUNTIME.md',
        statusCode: 301
      },
      {
        source: '/docs/v2/deployments/(builders|official-builders)/(.*)/?',
        destination: '/docs/runtimes',
        statusCode: 301
      },
      {
        source: '/docs/v2/advanced/builders.*',
        destination: '/docs/runtimes',
        statusCode: 301
      },
      {
        source: '/docs/(integrations|now-cli)/v2(.*)',
        destination: '/docs/$1/$2',
        statusCode: 301
      },
      {
        source: '/docs/v2/deployments/ignoring-source-paths(.*)',
        destination: '/guides/prevent-uploading-sourcepaths-with-nowignore$1',
        statusCode: 301
      },
      {
        source: '/docs/v2/deployments/environment-variables-and-secrets/?',
        destination: '/docs/v2/build-step',
        statusCode: 301
      },
      {
        source: '/docs/v2/(deployments|advanced)/configuration(.*)',
        destination: '/docs/configuration$2',
        statusCode: 301
      },
      {
        source: '/docs/v2/advanced/concepts.*',
        destination: '/docs/v2/platform/deployments',
        statusCode: 301
      },
      {
        source: '/docs/v2/deployments/routes.*',
        destination: '/docs/configuration#routes',
        statusCode: 301
      },
      {
        source: '/docs/v2/deployments/builds/?',
        destination: '/docs/runtimes',
        statusCode: 301
      },
      {
        source: '/docs/v2/development/environment-variables(.*)',
        destination: '/docs/v2/serverless-functions/env-and-secrets',
        statusCode: 301
      },
      {
        source: '/docs/v2/development/(.*)',
        destination: '/docs/v2/serverless-functions/introduction',
        statusCode: 301
      },
      {
        source: '/docs/v2/deployments/.*',
        destination: '/docs/v2/introduction',
        statusCode: 301
      },
      {
        source: '/docs/v2/domains-and-aliases/aliasing-a-deployment/?',
        destination: '/docs/v2/custom-domains#deploying-with-your-domain',
        statusCode: 301
      },
      {
        source: '/docs/v2/domains-and-aliases/aliasing-a-deployment/?',
        destination: '/docs/v2/custom-domains#deploying-with-your-domain',
        statusCode: 301
      },
      {
        source: '/docs/v2/domains-and-aliases/cdn/?',
        destination: '/docs/v2/serverless-functions/edge-caching',
        statusCode: 301
      },
      {
        source: '/examples(.*)',
        destination: 'https://github.com/zeit/now-examples',
        statusCode: 301
      },
      {
        source: '/docs/v1/examples/.*',
        destination: 'https://github.com/zeit/now-examples',
        statusCode: 301
      },
      {
        source: '/docs/other/(.*)',
        destination: '/docs/v1/other/$1',
        statusCode: 301
      },
      {
        source: '/docs/clients/(.*)',
        destination: '/docs/v1/clients/$1',
        statusCode: 301
      },
      {
        source: '/examples/nodejs-express',
        destination: '/examples/express',
        statusCode: 301
      },
      {
        source: '/docs/v2/platform/global-configuration.*',
        destination: '/docs/configuration#global',
        statusCode: 301
      },
      {
        source: '/docs/v2/advanced/platform/(.*)/?',
        destination: '/docs/v2/platform/$1',
        statusCode: 301
      },
      {
        source: '/docs/v2/development/basic/(.*)/?',
        destination:
          '/docs/v2/deployment/serverless-functions#local-development',
        statusCode: 301
      },
      {
        source: '/docs/v2/integrations/(.*)',
        destination: '/docs/v2/more/$1',
        statusCode: 301
      },
      {
        source: '/docs/v2/domains-and-aliases/(.*)',
        destination: '/docs/v2/custom-domains',
        statusCode: 301
      },
      {
        source: '/docs/v2/advanced/(.*)',
        destination: '/docs/v2/more/$1',
        statusCode: 301
      },
      {
        source: '/docs/version-detection',
        destination:
          '/docs/v2/platform/frequently-asked-questions#platform-version-detection',
        statusCode: 301
      }
    ]
  },

  exportTrailingSlash: true,

  // Allow mdx and md files to be pages
  pageExtensions: ['jsx', 'js', 'mdx', 'md'],

  assetPrefix: isProd ? '/docs' : '',

  env: {
    VERSION: require('./package.json').version,
    API_URL: process.env.API_URL,
    IMAGE_ASSETS_URL: 'https://assets.zeit.co/image/upload/front',
    VIDEO_ASSETS_URL: 'https://assets.zeit.co/video/upload/front',
    RAW_ASSETS_URL: 'https://assets.zeit.co/raw/upload/front',
    ASSETS: isProd ? '/docs/static' : '/static'
  },

  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/generate-site-map')
    }
    return config
  }
})

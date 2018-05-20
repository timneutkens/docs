import Document_, { Head, Main, NextScript } from 'next/document'

export default class Document extends Document_ {
  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var _paq = _paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//zeit.co/api/_/";
              _paq.push(['setTrackerUrl', u+'p']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'p.js'; s.parentNode.insertBefore(g,s);
            })();`
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
                arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
                d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
                insertBefore(d,q)}(window,document,'script','_gs');

                _gs('GSN-501242-S');
                _gs('set', 'trackLocal', true);
              `
            }}
          />
        </body>
      </html>
    )
  }
}

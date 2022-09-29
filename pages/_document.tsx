import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
          />
        </Head>
        <body>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              function getUserPreference() {
                if(window.localStorage.getItem('theme')) {
                  return window.localStorage.getItem('theme')
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
              }
              document.body.dataset.theme = getUserPreference();
            `,
            }}
          /> */}
          <Main />
          <NextScript />
          <footer style={{textAlign: 'center'}}><a style={{fontSize: '12px'}} href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">皖ICP备15009720号-1</a></footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
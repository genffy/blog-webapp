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
          {/* UIkit CSS */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/css/uikit.min.css" />
          {/* UIkit JS */}
          <script async src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit.min.js"></script>
          <script async src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit-icons.min.js"></script>
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
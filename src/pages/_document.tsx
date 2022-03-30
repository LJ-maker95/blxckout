import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <body>
          <Main />
          <h1 className="text-center"> Test </h1>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            name="description"
            content="Suplemento alimentar ultraconcentrado que mantém seu organismo disposto e saudável durante e após uma boa festa!"
          />
          <meta
            name="adopt-website-id"
            content="ca6e383d-20ea-4012-ac71-40d8b32f8773"
          />

          <meta
            name="facebook-domain-verification"
            content="bg23hg1yi3nrg4o9fdmt467kzg0qe9"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            src="//tag.goadopt.io/injector.js?website_code=ca6e383d-20ea-4012-ac71-40d8b32f8773"
            className="adopt-injector"
          ></script>
          <script>window.adoptHideAfterConsent = true;</script>
        </body>
      </Html>
    );
  }
}

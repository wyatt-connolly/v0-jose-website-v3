import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'manual';
                
                document.addEventListener('DOMContentLoaded', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

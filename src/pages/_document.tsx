import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Should add the NavBar here but something is borken with antdesign avatar component */}
        <Main />
        {/* Footer */}
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}

import App from "next/app";
import Head from "next/head";
// The Polaris app provider component passes down the props and context needed to use the Polaris library. Your app needs to be wrapped in this component to use Polaris.
import { AppProvider } from "@shopify/polaris";
// bridge react helps integrate the app into different interfaces (web, mobile, POS) by passing the API key and shop origin into the component
import { Provider } from "@shopify/app-bridge-react";
// getting polaris styles
import "@shopify/polaris/dist/styles.css";
// Translations are provided in the locales folder. When using Polaris, you are able to import translations from all languages supported by the core Shopify product and consume them through the i18n prop.
import translations from "@shopify/polaris/locales/en.json";
import ClientRouter from "../components/ClientRouter";
// apollo client enables browsers to easily authenticate by passing your credentials with every graphql request
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  fetchOptions: {
    credentials: "include"
  }
});

class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;

    const config = {
      apiKey: "37b70186eef543419111bee402db8c34",
      shopOrigin,
      forceRedirect: true
    };
    return (
      <>
        <Head>
          <title>Sample App</title>
          <meta charSet='utf-8' />
        </Head>
        <Provider config={config}>
          <ClientRouter />
          <AppProvider i18n={translations}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop
  };
};

export default MyApp;

import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <meta name="theme-color" content="#fff"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;

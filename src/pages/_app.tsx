import React from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

//styles
import { GlobalStyle } from "../styles/globals";
import { theme } from '../styles'
import "react-toastify/dist/ReactToastify.css";
//hooks
import { BookingContextProvider } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BookingContextProvider>
        <GlobalStyle />
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </BookingContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;

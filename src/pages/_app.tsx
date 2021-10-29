import React from 'react'
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

//styles
import { GlobalStyle } from "./styles/globals";
import "react-toastify/dist/ReactToastify.css";

//hooks
import { BookingContextProvider } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}
export default MyApp;
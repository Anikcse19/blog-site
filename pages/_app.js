import { NavContextProvider } from "@/ContextApi/NavContext/NavContext";
import { StateContextProvider } from "@/ContextApi/StateContext/StateContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <StateContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </StateContextProvider>
    </NavContextProvider>
  );
}

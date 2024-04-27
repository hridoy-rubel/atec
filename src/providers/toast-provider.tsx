"use client";

import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";
import { ToastContainer } from "react-toastify";

type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ToastProvider;

import { ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface ILayout {
  title?: string;
  children?: ReactNode;
}

export const Layout = ({ title, children }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title ? title + " • Prismix" : "Prismix"}</title>
      </Head>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

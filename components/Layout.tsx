import { ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "./Navbar";

interface ILayout {
  title?: string;
  children?: ReactNode;
}

export const Layout = ({ title, children }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title ? title + " • Twisty" : "Twisty"}</title>
      </Head>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
};

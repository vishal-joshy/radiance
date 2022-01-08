import React, { ReactElement, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TextBox from "components/TextBox/TextBox";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      <main>
        <TextBox />
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;

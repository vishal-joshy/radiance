import React, { ReactElement, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TextBox from "../TextBox/TextBox";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <Header />
      <main>
        <TextBox />
        {children}
      </main>
      <Footer />
      
    </div>
  );
}

export default Layout;

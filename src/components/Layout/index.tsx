import TextBox from "components/TextBox/TextBox";
import { ReactElement, ReactNode } from "react";
import Header from "./Header";

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
      {/* <Footer /> */}
    </>
  );
}

export default Layout;

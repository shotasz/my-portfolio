import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { Fragment } from "react";

export function Layout(props) {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
}

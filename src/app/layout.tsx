import { PropsWithChildren } from "react";

import "globals.css";
import "react-toastify/dist/ReactToastify.css";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

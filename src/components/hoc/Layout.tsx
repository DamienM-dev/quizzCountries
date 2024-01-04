import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="bg-bg_app">{children}</div>;
};

export default Layout;

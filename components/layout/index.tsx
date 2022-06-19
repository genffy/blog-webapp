import Nav from "./nav";

const Layout = ({ children, seo }: any) => (
  <>
    <Nav seo={seo} />
    {children}
  </>
);

export default Layout;
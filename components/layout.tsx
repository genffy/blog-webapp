import Nav from "./nav";

const Layout = ({ children, categories, _seo }: any) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;
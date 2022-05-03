import Nav from "./nav";

const Layout = ({ children, categories, seo }: any) => (
  <>
    <Nav categories={categories} seo={seo} />
    {children}
  </>
);

export default Layout;
import React, {useContext} from "react";
import { GlobalContext } from "@/pages/_app";
import Menu from "@/components/menu";
import Link from "next/link";

const Nav = ({ seo }: any) => {
  const { siteName }: any = useContext(GlobalContext);
  
  return (
    <>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>{ siteName }</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right"><Menu /></div>
      </nav>
    </>
  );
};

export default Nav;
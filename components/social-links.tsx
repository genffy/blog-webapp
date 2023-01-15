import { GlobalContext } from "@/pages/_app";
import Link from "next/link";
import { useContext } from "react";

const SocialLinks = () => {
  const { socialLinks }: any = useContext(GlobalContext);
  if (!socialLinks) {
    return null
  }
  return <ul className="uk-breadcrumb">
    {
      socialLinks.map((link: any) => {
        return <li key={link.title} className="uk-link-reset">
          <Link href={link.link}>
            {link.title}
          </Link>
        </li>
      })
    }
  </ul>
};

export default SocialLinks;
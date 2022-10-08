import { GlobalContext } from "@/pages/_app";
import Link from "next/link";
import { useContext } from "react";

const Menus = () => {
    const { menus }: any = useContext(GlobalContext);
    if (!menus) {
        return null
    }
    return <>
        <ul className="uk-breadcrumb">
            {menus.map((category: any) => {
                return (
                    <li key={category.link}>
                        <Link href={`${category.link}`}>
                            <a className="uk-link-reset">{category.title}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </>
}

export default Menus;
import React from "react";
import Link from "next/link";

const Menus = () => {
    const MENUS = [
        {
            id: 1,
            path: '/article',
            name: '文章',
        },
        {
            id: 2,
            path: '/category',
            name: '标签',
        },
        {
            id: 3,
            path: '/about',
            name: '关于',
        }
    ]
    return <>
        <style jsx>{`
        .uk-navbar-nav {
            justify-content: center;
        }
        .uk-navbar-nav>li {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .uk-navbar-nav>:nth-child(n+2):not(.uk-first-column)::before {
            content: "/";
            margin: 0 10px 0 calc(10px - 4px);
            font-size: 14px;
            color: #999;
        }
        `}</style>
        <ul className="uk-navbar-nav">
            {MENUS.map((category: any) => {
                return (
                    <li key={category.id}>
                        <Link href={`${category.path}`}>
                            <a className="uk-link-reset">{category.name}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </>
}

export default Menus;
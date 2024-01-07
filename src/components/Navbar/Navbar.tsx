import React from 'react';
import c from "./Navbar.module.scss"
import {Link} from "react-router-dom";

interface TUrl {
    url: string,
    header: string
}

const Navbar: React.FC = () => {

    const urls: TUrl[] = [
        {url: "/", header: "Main page"},
        {url: "/about", header: "About page"},
        {url: "/policy", header: "Policy page"},
    ]

    return (
        <div className={c.navbar}>
            {urls.map(url =>
                <Link key={url.url} to={url.url}>{url.header}</Link>
            )}
        </div>
    );
};

export default Navbar;
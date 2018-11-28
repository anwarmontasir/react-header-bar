import React from 'react';

import './navigation-bar.css';

export default function NavigationBar(props) {
    const links = props.links.map((link, index) => (
        <li key={index}>
            <a href={link.href}>
                {link.text}
            </a>
        </li>
    ));
    return (
        <nav className="navigation-bar">
          <h1>{props.title}</h1>
          <ul className="navigation-bar-nav">
            {links}
          </ul>
        </nav>
    );
}
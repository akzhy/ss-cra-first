import React from 'react';
import '../styles/sidebar.css';

export const sidebarItems = ['Colors', 'Typography', 'Shadows'];

export default function Sidebar() {
    const sidebarListing = sidebarItems.map((item, i) => (
        <SidebarItem title={item} key={item + i} index={i + 1} />
    ));

    return (
        <React.Fragment>
            <div className="sidebar">
                <ul className="sidebar__listing">{sidebarListing}</ul>
            </div>
            <div className="sidebar-placeholder"></div>
        </React.Fragment>
    );
}

export function SidebarItem({ index, title }) {
    const itemNumber = `${index}`.padStart(2, '0');
    return (
        <li className="sidebar__item">
            <a href={`#${title.toLowerCase()}`}>
                <span>{itemNumber}.</span>
                {title}
            </a>
        </li>
    );
}

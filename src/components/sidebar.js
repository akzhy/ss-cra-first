import React from 'react';

export default function Sidebar({ sidebarItems }) {
    const sidebarListing = sidebarItems.map((item, i) => (
        <SidebarItem title={item} key={item + i} index={i + 1} />
    ));

    return (
        <div className="sidebar">
            <div className="sidebar__element">
                <ul className="sidebar__listing">{sidebarListing}</ul>
            </div>
            <div className="sidebar__placeholder"></div>
        </div>
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

import React from 'react';
import Head from './head';
import Sidebar from './sidebar';

export default function Layout({ title, sidebarItems, children }) {
    return (
        <div className="wrapper">
            <Head title={title} />
            <Sidebar sidebarItems={sidebarItems} />
            <main className="main">{children}</main>
        </div>
    );
}

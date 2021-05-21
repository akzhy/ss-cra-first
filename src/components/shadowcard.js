import React from 'react';

export function ShadowCard({ value }) {
    return <div className={`shadows__card ${value}`}></div>;
}

export function ShadowCards({ items }) {
    const list = items.map((item, i) => (
        <ShadowCard value={item} key={`shadow-${i}`} />
    ));

    return <div className="shadows">{list}</div>;
}

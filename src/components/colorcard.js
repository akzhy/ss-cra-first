import React from 'react';

export function ColorCard({ hex, title, subTitle, className }) {
    return (
        <div className="colorcard">
            <div
                className={`colorcard__color ${className ?? ''}`}
                style={{
                    ...(!className && { backgroundColor: hex }),
                }}
            ></div>
            <div className="colorcard__footer">
                <p className="text text--small">{title}</p>
                <p className="text text--small">{subTitle || hex}</p>
            </div>
        </div>
    );
}

export function ColorCards({ items }) {
    const list = items.map((item) => (
        <ColorCard
            hex={item.hex}
            title={item.title}
            subTitle={item.subTitle}
            className={item.className}
            key={item.title + item.hex}
        />
    ));
    return <div className="colorcards">{list}</div>;
}

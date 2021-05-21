import React from 'react';

export function Group({ children }) {
    return <div className="groups">{children}</div>;
}

export function ButtonGroup({ children, title }) {
    return (
        <div className="groups__item groups__item--buttons">
            <h3 className="heading heading--h3">{title}</h3>
            <div className="groups__item__content">{children}</div>
        </div>
    );
}

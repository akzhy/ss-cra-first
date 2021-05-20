import React from 'react';

export function Section({ children, title }) {
    return (
        <section className="section">
            <h2
                className="heading heading--h2 section__title"
                id={`${title.toLowerCase()}`}
            >
                {title}
            </h2>
            <div className="section__content">{children}</div>
        </section>
    );
}

export function SubSection({ children, title }) {
    return (
        <div className="section__subsection">
            <h3 className="heading heading--h3 section__title">{title}</h3>
            <div className="section__subsection__content">{children}</div>
        </div>
    );
}

export function TypographySubSection({ children, className }) {
    return (
        <div className={`section__subsection--typography ${className}`}>
            {children}
        </div>
    );
}

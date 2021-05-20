import React from 'react';
import '../styles/main.css';
import { ColorCards } from './colorcard';
import { Section, SubSection, TypographySubSection } from './sections';
import { brandColors } from '../utils/brandcolors';
import { uiTextColors } from '../utils/uitextcolors';
import { uiElementColors } from '../utils/uielementcolors';
import { ShadowCards } from './shadowcard';
import { shadows } from '../utils/shadows';

export default function Main() {
    const typographyHeadings = Array.from({ length: 6 }).map((_, i) => (
        <div
            key={`typo-h-${i}`}
            dangerouslySetInnerHTML={{
                __html: `<h${i + 1} class="heading heading--h${
                    i + 1
                }">Heading ${i + 1}</h${i + 1}>`,
            }}
        />
    ));

    return (
        <main className="main">
            <header className="main__header">
                <h1 className="heading heading--h1">Foundation Elements</h1>
                <p className="text text--secondary">
                    Here's the very basic for Flamingo Web, either being color
                    variables or text identification.
                </p>
            </header>
            <Section title="Colors">
                <SubSection title="Brand">
                    <ColorCards items={brandColors} />
                </SubSection>
                <SubSection title="UI Text">
                    <ColorCards items={uiTextColors} />
                </SubSection>
                <SubSection title="UI Element">
                    <ColorCards items={uiElementColors} />
                </SubSection>
            </Section>
            <Section title="Typography">
                <div className="section__content__typography">
                    <TypographySubSection>
                        {typographyHeadings}
                    </TypographySubSection>
                    <TypographySubSection className="texts">
                        <p className="text typography__item">Paragraph</p>
                        <p className="text text--bold typography__item">
                            Paragraph Bold
                        </p>
                        <a className="link typography__item" href="#link">
                            Link
                        </a>
                    </TypographySubSection>
                </div>
            </Section>
            <Section title="Shadows">
                <ShadowCards items={shadows} />
            </Section>
        </main>
    );
}

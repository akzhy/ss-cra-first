import React from 'react';
import Layout from '../components/layout';
import { ColorCards } from '../components/colorcard';
import {
    Section,
    SubSection,
    TypographySubSection,
} from '../components/sections';
import { brandColors } from '../utils/brandcolors';
import { uiTextColors } from '../utils/uitextcolors';
import { uiElementColors } from '../utils/uielementcolors';
import { ShadowCards } from '../components/shadowcard';
import { shadows } from '../utils/shadows';

const sidebarItems = ['Colors', 'Typography', 'Shadows'];

export default function IndexPage() {
    return (
        <Layout title="Foundation Elements" sidebarItems={sidebarItems}>
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
                        <h1 className="heading heading--h1">Heading 1</h1>
                        <h2 className="heading heading--h2">Heading 2</h2>
                        <h3 className="heading heading--h3">Heading 3</h3>
                        <h4 className="heading heading--h4">Heading 4</h4>
                        <h5 className="heading heading--h5">Heading 5</h5>
                        <h6 className="heading heading--h6">Heading 6</h6>
                    </TypographySubSection>
                    <TypographySubSection className="texts">
                        <p className="text">Paragraph</p>
                        <p className="text text--bold">Paragraph Bold</p>
                        <a className="link" href="#link">
                            Link
                        </a>
                    </TypographySubSection>
                </div>
            </Section>
            <Section title="Shadows">
                <ShadowCards items={shadows} />
            </Section>
        </Layout>
    );
}

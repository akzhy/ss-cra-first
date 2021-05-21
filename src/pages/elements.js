import React from 'react';
import Button from '../components/elements/button';
import { ButtonGroup, Group } from '../components/groups';
import { Flamingo } from '../components/icons/icons';
import Layout from '../components/layout';
import { Section, SubSection } from '../components/sections';

const sidebarItems = [
    'Buttons',
    'Inputs',
    'Selects',
    'Textareas',
    'Checkboxes',
    'Radio Buttons',
    'Toggles',
    'List Items',
    'Avatars',
];

export default function ElementsPage() {
    return (
        <Layout title="Elements" sidebarItems={sidebarItems}>
            <header className="main__header">
                <h1 className="heading heading--h1">Elements</h1>
                <p className="text text--secondary">
                    Here’s the collection of Atomic elements for Flamingo Web.
                    These elements don’t include margin as they are meant to be
                    easily adaptable to several compositions and layouts.
                </p>
            </header>
            <Section title="Buttons">
                <Group>
                    <ButtonGroup title="Primary">
                        <Button>Label</Button>
                        <Button kind="outline">Label</Button>
                        <Button kind="minimal">Label</Button>
                    </ButtonGroup>
                    <ButtonGroup title="Secondary">
                        <Button level="secondary">Label</Button>
                        <Button level="secondary" kind="outline">
                            Label
                        </Button>
                        <Button level="secondary" kind="minimal">
                            Label
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup title="Icon">
                        <Button kind="icon">
                            <Flamingo />
                        </Button>
                    </ButtonGroup>
                </Group>
                <SubSection title="States">
                    <Group>
                        <ButtonGroup title="Primary">
                            <Button state="hover">Label</Button>
                            <Button state="active">Label</Button>
                            <Button state="loading">Label</Button>
                        </ButtonGroup>
                        <ButtonGroup title="Secondary">
                            <Button state="hover" level="secondary">
                                Label
                            </Button>
                            <Button state="active" level="secondary">
                                Label
                            </Button>
                            <Button state="loading" level="secondary">
                                Label
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup title="Success">
                            <Button state="success">Label</Button>
                        </ButtonGroup>
                        <ButtonGroup title="Error">
                            <Button state="error">Label</Button>
                        </ButtonGroup>
                        <ButtonGroup title="Disabled">
                            <Button state="disabled">Label</Button>
                        </ButtonGroup>
                    </Group>
                </SubSection>
            </Section>
        </Layout>
    );
}

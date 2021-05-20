import { Helmet } from 'react-helmet';

export default function Head({ title }) {
    return (
        <Helmet title={title}>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
}

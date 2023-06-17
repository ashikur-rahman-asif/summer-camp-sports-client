import React from 'react';
import { Helmet } from 'react-helmet';

function PageTitle({ title }) {
    return (
        <Helmet>
            <title>SportsFever | {title}</title>
        </Helmet>
    );
}

export default PageTitle;

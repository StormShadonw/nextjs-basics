import React from 'react';
import {withRouter} from 'next/router';

import MainLayout from '../components/layouts/main-layout';

class DynamicPage extends React.Component {

    render() {
        return (

            <MainLayout>

                <h1>Dynamic Page With Query String</h1>

                <p>{ this.props.router.query.title }</p>

            </MainLayout>

        )
    }

}

export default withRouter(DynamicPage);
import React from 'react';

import NavBar from '../shared/NavBar';


class MainLayout extends React.Component {

    render() {
        return(

            <React.Fragment>
                
                <NavBar />

                {this.props.children}

            </React.Fragment>

        )
    }

}

export default MainLayout;
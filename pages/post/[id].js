import React from 'react';
import { withRouter } from 'next/router';

import MainLayout from '../../components/layouts/main-layout';
import styles from '../../styles/[id].module.css'

class PostDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    static async getInitialProps(props) {
        console.log(`https://jsonplaceholder.typicode.com/posts/${props.query.id}`);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.query.id}`);
        const post = await res.json();
        console.log(post);
        return {post}
    }

    render() {
        const postDetails = this.props.post;
        return (
            <MainLayout>

                <h1 className={styles.title}>{postDetails.title}</h1>

                <p className={styles.body}>{ postDetails.body }</p>

            </MainLayout>
        )
    }

}

export default withRouter(PostDetails);
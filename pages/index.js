import React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layouts/main-layout';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            title: ""
        }
    }

    setTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    static async getInitialProps() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        return {posts}
    }

    render() {
        return (

            <MainLayout>

                <h1>Home Page!</h1>

                <input type="text" value={this.state.title} onChange={this.setTitle}/>

                <Link href={`/dynamicPage?title=${this.state.title}`}>
                    <a>Go to Dynamic Page</a>
                </Link>
                <ol>
                    {this.props.posts.map((post,index) => {
                        return(
                            <li key={`post_${index + 1}`}>
                            <Link href={`/post/[id]?id=${post.id}`} as={`/post/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                        )

                    })}
                </ol>

            </MainLayout>

        )
    }

}

export default App;
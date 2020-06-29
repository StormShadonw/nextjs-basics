import React from 'react';
import Link from 'next/link';

import styles from '../../styles/navbar.module.css';

class NavBar extends React.Component {

    render() {
        return (
            <div className={styles.NavBar}>

                <h1 className={styles.logo}>Hello World!</h1>

                <div className={styles.links}>

                        <Link href="/" >
                            <a className={styles.link} title="Home">Home</a>
                        </Link>

                        <Link href="/pageOne" >
                            <a className={styles.link} title="page One">Page One</a>
                        </Link>

                        <Link href="/pageTwo" >
                            <a className={styles.link} title="page Two">Page Two</a>
                        </Link>

                        <Link href="/pageThree" >
                            <a className={styles.link} title="page Three">Page Three</a>
                        </Link>

                </div>

            </div>
        )
    }

}

export default NavBar;
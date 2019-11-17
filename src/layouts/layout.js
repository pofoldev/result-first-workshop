import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import './layout.css'


const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>My Portfolio</title>
            </Helmet>

            <header>
                <h1>My Portfolio</h1>
                <h2>See my great works</h2>
            </header>
            
            <main>
                {props.children}
            </main>

            <footer>
                <h3>Contact</h3>
                <p>mail@example.com</p>
            </footer>
        </>
    )
}


export default Layout

import React from 'react'
import Layout from './layout'


const Works = (props) => {
    return (
        <Layout>
            <div className="work">
                {props.children}
            </div>
        </Layout>
    )
}


export default Works

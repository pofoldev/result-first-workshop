import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'


const Index = () => {
    return (
        <Layout>
            <ul>
                <li>
                    <div>
                        {/* 전통적인 방식의 링크 */}
                        <a href="/work1">
                            <img src="/images/1.jpg" />
                        </a>
                    </div>
                    <h3>Work 1</h3>
                </li>
                <li>
                    <div>
                        {/* Gatsby 방식의 링크 */}
                        <Link to="/work2">
                            <img src="/images/2.jpg" />
                        </Link>
                    </div>
                    <h3>Work 2</h3>
                </li>
                <li>
                    <div>
                        <Link to="/works/3">
                            <img src="/images/3.jpg" />
                        </Link>
                    </div>
                    <h3>Work 3</h3>
                </li>
            </ul>
        </Layout>
    )
}


export default Index

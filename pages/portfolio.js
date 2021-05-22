import Head from 'next/head'
import Layout from '../components/layout'


export default function Portfolio () {
    return (
        <Layout>
            <Head>
                <title>Portfolio | Jordan Lancaster</title>
                <meta name = "description" content = "A robust portfolio of design projects" />
            </Head>

            <h1>Portfolio</h1>
            <p>portfolio content goes here</p>
        </Layout>
    )
}
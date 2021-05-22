import Layout from '../../components/layout'

export async function getStaticProps(){
    const menuTypes = await getLoc()
    return{
        props: {menuTypes}
    }
}

export default function Locations(){
    return(
        <Layout>
            <h1>Locations</h1>
        </Layout>
    )
}
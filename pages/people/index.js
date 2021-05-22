import Layout from '../../components/layout'

export async function getStaticProps(){
    const menuTypes = await getMenuTypesAndMenuItems()
    return{
        props: {menuTypes}
    }
}

export default function people(){
    return(
        <Layout>
            <h1>people</h1>
        </Layout>
    )
}
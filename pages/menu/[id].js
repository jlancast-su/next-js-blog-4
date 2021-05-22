import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getAllMenuItemSlugs, getMenuItemBySlug } from '../../lib/api'


export async function getStaticPaths(){
    const allSlugs = await getAllMenuItemSlugs()
    const paths = allSlugs.edges.map(edge =>{
        const {slug} = edge.node
        return{
            params: {
                id: slug
            }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const menuItemData = await getMenuItemBySlug(params.id)
    return{
        props:{
            menuItemData
        }
    }
}

export default function MenuItem({menuItemData}){
    const {title, featuredImage, content} = menuItemData;
    const {sourceUrl, mediaDetails, altText} =featuredImage.node;
    const {width, height} = mediaDetails;
    return(
        <Layout>
            <Link href='/menu'>
                <a>back to menu</a>
            </Link>
            <h1> {title}</h1>
            <Image 
                src={sourceUrl}
                width= {width}
                height = {height}
                alt={altText}
            />
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </Layout>
    )
}
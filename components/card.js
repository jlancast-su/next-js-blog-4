import Heading from './heading'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ node }){
    
    const {title, slug, featuredImage} = node;
    const {sourceUrl, mediaDetails, altText} =featuredImage.node;
    const {width, height} = mediaDetails;

    
    return(
        <div className='card'>
            {
                featuredImage && 
                <Image 
                    src={sourceUrl}
                    width= {width}
                    height = {height}
                    alt={altText}
                />
            }
            
            <Heading type='h3'>
                <Link href = {`/menu/${slug}`}> 
                    <a >
                        {title}
                    </a>
                </Link>
            </Heading>
        </div>
    )
}
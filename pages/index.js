import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        <h1>Jordan Lancaster</h1>
        <p>Young black man of excellence, can't find that everyday. </p>
        <Button label= "The that started it all"
                  path= "/menu"
                  type="primary"
          />
         <Button label= "Press it I dare you"
                path="/portfolio"
                type="primary"
        />
        <Button label= "The unexpected"
                path= "/about"
                type="secondary"
        />
        
        
      </section>
    </Layout>
  )
}
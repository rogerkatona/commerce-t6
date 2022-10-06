import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Service from "../components/service";
import Quote from "../components/quote";
import Promo from "../components/promo";

export default function Technology() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero-technology min-h-screen50vh max-h-screen50vh bg-cover bg-left bg-no-repeat">
                <Hero id={2}/>
            </header>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.100 py-12">
                Patents
            </div>
            <Service type="technology" subtype="patent"/>
            <Quote id={3}/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.100 py-12">
                Technology
            </div>
            <Service type="technology" subtype="technology"/>
            <Promo id={1}/>
        </Layout>
    )
}
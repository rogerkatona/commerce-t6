import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Service from "../components/service";
import Quote from "../components/quote";
import Promo from "../components/promo";

export default function Services() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero-services min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={1}/>
            </header>
            <div className="text-center font-bebasNeue text-6xl text-gray.700 bg-gray.100 py-12">
                Services
            </div>
            <Service type="service" subtype="services"/>
            <Quote id={0}/>
            <div className="text-center font-bebasNeue text-6xl text-gray.700 bg-gray.100 py-12">
                Customization
            </div>
            <Service type="service" subtype="customization"/>
            <Promo id={0}/>

        </Layout>
    )
}
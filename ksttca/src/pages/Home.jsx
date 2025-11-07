import Layout from "../layout/Layout";

import AboutUs from "../component/AboutUs"
import Membership from "../component/Membership";
import Program from "../component/Program";
import Gallery from "../component/Gallery";
import Faq from "../component/Faq";
import Hero from "../component/Hero";

function Home() {
    return(
        <Layout >
            <section id="home">
                <Hero />
                <AboutUs />
                <Membership />
                <Program />
                <Gallery />
                <Faq />
            </section>
        </Layout>
    )
}

export default Home;

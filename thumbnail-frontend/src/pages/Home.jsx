import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
// import Faq from "../components/Faq";
import CTA from "../components/CTA";
import About from '../pages/About';
import Community from '../pages/Community';
import Generate from "../pages/Generate";
export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Pricing />
            {/* <Faq /> */}
            <CTA />
            <About/>
            <Community/>
            <Generate/>
            
        </>
    )
}
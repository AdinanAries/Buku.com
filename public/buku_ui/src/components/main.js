import Hero from './heroSection';
import NewsSection from './newsSection';
import RegisterBusiness from './registerBusiness';

function Main(){
    return(
        <main style={{display: "none"}}>
            <Hero />
            <RegisterBusiness />
            <NewsSection />
        </main>
    )
}

export default Main
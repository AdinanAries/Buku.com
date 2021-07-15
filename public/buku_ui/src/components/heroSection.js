import barberIcon from '../images/barber-pole.png';
import medsIcon from '../images/medical-doctor.png';
import nailsIcon from '../images/nails.png';
import spaIcon from '../images/spa.png';
import cosmeticBrushIcon from '../images/cosmetic-brush.png';
import hairDryerIcon from '../images/hair-dryer.png';

function Hero(){
    return (
        <section className="hero-section">
            <div className="hero-section-inner">

            <h1 className="section-title" style={{marginBottom: "10px", marginTop: "30px"}}>Popular Services</h1>
                <div id="popular-services-section">
                    <a href="">
                        <div className="each-popular-service">
                            <p className="img-p">
                                <img src={medsIcon} /></p>
                            <p className="name-p">Medical Center</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="each-popular-service">
                            <p className="img-p"><img src={barberIcon} /></p>
                            <p className="name-p">Barber Shop</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="each-popular-service">
                            <p className="img-p"><img src={nailsIcon} /></p>
                            <p className="name-p">Nail Salon</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="each-popular-service">
                            <p className="img-p"><img src={spaIcon} /></p>
                            <p className="name-p">Day Spa</p>
                        </div>
                    </a>
                    <a className="dontShowMobile" href="">
                        <div className="each-popular-service">
                            <p className="img-p"><img src={cosmeticBrushIcon} /></p>
                            <p className="name-p">Beauty Salon</p>
                        </div>
                    </a>
                    <a className="dontShowMobile" href="">
                        <div className="each-popular-service">
                            <p className="img-p"><img src={hairDryerIcon} /></p>
                            <p className="name-p">Hair Salon</p>
                        </div>
                    </a>
                </div>
                <p className="top-border"></p>
                <h1 className="section-title">Suggested Places</h1>
                <div className="homepage-favorite-services-list">
                    <a href=''>
                        <div className="homepage-each-favorite-service">
                            <div className="homepage-each-favorite-service-inner">
                                <div>
                                    <div className="homepage-each-favorite-service-image">
                                        <img src="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                    <p className="homepage-each-favorite-service-rating">
                                        <span className="homepage-each-favorite-service-rating-span">
                                            ★★★★★ 
                                            <i className="fa fa-check"><span> Recommended</span></i>
                                        </span>
                                    </p>
                                </div>

                            </div>
                            <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                            <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className="homepage-each-favorite-service">
                            <div className="homepage-each-favorite-service-inner">
                                <div>
                                    <div className="homepage-each-favorite-service-image">
                                        <img src="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                    <p className="homepage-each-favorite-service-rating">
                                        <span className="homepage-each-favorite-service-rating-span">
                                            ★★★★★ 
                                            <i className="fa fa-check"><span> Recommended</span></i>
                                        </span>
                                    </p>
                                </div>

                            </div>
                            <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                            <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className="homepage-each-favorite-service">
                            <div className="homepage-each-favorite-service-inner">
                                <div>
                                    <div className="homepage-each-favorite-service-image">
                                        <img src="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                    <p className="homepage-each-favorite-service-rating">
                                        <span className="homepage-each-favorite-service-rating-span">
                                            ★★★★★ 
                                            <i className="fa fa-check"><span> Recommended</span></i>
                                        </span>
                                    </p>
                                </div>

                            </div>
                            <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                            <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className="homepage-each-favorite-service">
                            <div className="homepage-each-favorite-service-inner">
                                <div>
                                    <div className="homepage-each-favorite-service-image">
                                        <img src="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                    <p className="homepage-each-favorite-service-rating">
                                        <span className="homepage-each-favorite-service-rating-span">
                                            ★★★★★ 
                                            <i className="fa fa-check"><span> Recommended</span></i>
                                        </span>
                                    </p>
                                </div>

                            </div>
                            <p className="homepage-each-favorite-service-bizname ">Bukus Meds</p>
                            <p className="homepage-each-favorite-service-servicetype">- Medical Center -</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero
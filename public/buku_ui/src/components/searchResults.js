import favsProPIc from '../images/ProfilePic17.png';
import glryPic1 from "../images/medical-residents.png";
import glryPic2 from "../images/Doctors.jpg";
import glryPic3 from "../images/P1800540.jpg.2.2x.generic.jpg";
import glryPic4 from "../images/PA1.jpg";
import glryPic5 from "../images/shutterstock_88515766.jpg";
import glryPic6 from "../images/pic6.jpg";
import glryPic7 from "../images/docstalking.jpg";
import glryPic8 from "../images/Inpatient-1.jpg";

function SearchResultsPage(){
    return (
        <div className="search-results-page">
            <main>
                <div style={{display: "flex", flexDirection: "row !important", justifyContent: "space-between", padding: "0 10px"}}>
                    <section class="search-results-list" style={{width: "70%"}}>
                        <div style={{backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 4, marginBottom: 5, overflow: "hidden"}}>
                            <div className="homepage-each-favorite-service" style={{maxWidth: 350, margin: 0, borderRadius: 0, paddingBottom: 10, borderTop: "none", height: "100%", borderLeft: "10px solid #ffe96b"}}>
                                <div className="homepage-each-favorite-service-inner">
                                    <div>
                                        <div className="homepage-each-favorite-service-image">
                                            <img src={favsProPIc} />
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
                                <div style={{marginTop: 20, overflow: "hidden", borderRadius: 4, borderTop: "4px solid #37a0f5", borderBottom: "4px solid #37a0f5", backgroundColor: "rgba(25,25,0,0.4)", boxShadow: "0px 1.6px 3.6px rgba(0, 0, 0, 0.5), 0px 0px 2.9px rgba(0, 0, 0, 0.5)"}}>
                                <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%"}}>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic1+"')"}}>
                                        </div>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic2+"')"}}>
                                        </div>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic3+"')"}}>
                                        </div>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic4+"')"}}>
                                        </div>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%", marginTop: 1}}>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic5+"')"}}>
                                        </div>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic6+"')"}}>
                                        </div>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic7+"')"}}>
                                        </div>
                                        <div style={{width: "calc(25% - 1px)", height: 80, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('"+glryPic8+"')"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                    </section>
                    <section style={{width: "calc(30% - 5px)", backgroundColor: "rgba(0,0,0,0.2)", minHeight: 200, borderRadius: 4, marginBottom: 5}}>

                    </section>
                </div>
            </main>
        </div>
    );
}

export default SearchResultsPage
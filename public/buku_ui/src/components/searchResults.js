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
                        <div style={{backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 4, marginBottom: 5, overflow: "hidden", display: "flex"}}>
                            <div className="homepage-each-favorite-service" style={{marginRight: 10, background: "none", boxShadow: "none", width: "35%", margin: 0, borderRadius: 0, padingRight: 0, paddingBottom: 10, borderTop: "none", height: "100%", borderLeft: "10px solid #ffe96b"}}>
                                <div className="homepage-each-favorite-service-inner">
                                    <div>
                                        <div className="homepage-each-favorite-service-image">
                                            <img src={favsProPIc} />
                                        </div>
                                    </div>
                                    <div style={{marginBottom: 20}}>
                                        <p className="homepage-each-favorite-service-name">Mohammed Adinan</p>
                                        <p className="homepage-each-favorite-service-rating">
                                            <span className="homepage-each-favorite-service-rating-span">
                                                ★★★★★ 
                                                <i className="fa fa-check"><span> Recommended</span></i>
                                            </span>
                                        </p>
                                    </div>

                                </div>
                                <p className="homepage-each-favorite-service-bizname">Bukus Meds</p>
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
                            <div className="each-search-result-spots-section" style={{width: "65%"}}>
                                <div style={{padding: 10,}}>
                                    <p style={{color: "orange", textAlign: "center", fontWeight: "bolder", marginBottom: 20}}>Pick a spot below</p>
                                    <div style={{display: "flex", flexWrap: "wrap"}}>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(55,255,23, 0.2)", border: "1px solid rgb(55,255,23, 0.4)", borderRadius: 4, color: "rgba(55,255,23, 0.8)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "rgb(21,121,223)", marginRight: 5}} className="fa fa-check"></i>
                                                30% Discount
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(55,23,255, 0.2)", border: "1px solid rgb(55,23,255, 0.4)", borderRadius: 4, color: "rgba(55,23,255, 0.9)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "rgb(21,223,221)", marginRight: 5}} className="fa fa-info-circle"></i>
                                                Full Price
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                10% More
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                15% More
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                40% More
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                12% More
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(255,55,23, 0.2)", border: "1px solid rgb(255,55,23, 0.4)", borderRadius: 4, color: "rgba(255,55,23, 0.8)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "orange", marginRight: 5}} className="fa fa-exclamation-triangle"></i>
                                                18% More
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(55,255,23, 0.2)", border: "1px solid rgb(55,255,23, 0.4)", borderRadius: 4, color: "rgba(55,255,23, 0.8)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "rgb(21,121,223)", marginRight: 5}} className="fa fa-check"></i>
                                                20% Discount
                                            </p>
                                        </div>
                                        <div style={{marginRight: 5, marginBottom: 5, textAlign: "center", padding: 10, width: "fit-content", backgroundColor: "rgba(55,23,255, 0.2)", border: "1px solid rgb(55,23,255, 0.4)", borderRadius: 4, color: "rgba(55,23,255, 0.9)", cursor: "pointer"}}>
                                            3:40 PM
                                            <p style={{marginTop: 5, color: "white", fontSize: 13}}>
                                                <i style={{color: "rgb(21,223,221)", marginRight: 5}} className="fa fa-info-circle"></i>
                                                Full Price
                                            </p>
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
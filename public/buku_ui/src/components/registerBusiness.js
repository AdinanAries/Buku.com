import medsPic from "../images/Medical-Services-header.jpg";

function RegisterBusiness(){
    return (
        <div className="wrapper">
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div style={{width: "50%"}}>
                    <h1 className="section-title" style={{color: "rgb(23,122,122)"}} >Register Your Business</h1>
                    <p style={{textAlign: "center", fontSize: 14, color: "rgb(23,99,99)"}}>Let us help you manage your bookings</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 20, padding: "0 10px"}}>
                        <div style={{width: "50%", maxWidth: 400, marginRight: 5}}>
                            <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                    <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                </div>
                            </div>
                            <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                    <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                </div>
                            </div>
                            <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                    <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                </div>
                            </div>
                        </div>
                        <div style={{width: "50%", maxWidth: 400}}>
                            <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                    <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                </div>
                            </div>
                            <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                    <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                </div>
                            </div>
                            <div style={{backgroundColor: "white", padding: 10, borderRadius: "5px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", marginBottom: 5}}>
                                <p style={{fontSize: 14, color: "rgb(23,99,99)", fontWeight: "bolder"}}>Business Name</p>
                                <div style={{borderTop: "1px solid rgba(0,0,0,0.2)", marginTop: 5}}>
                                    <input style={{padding: 10, border: "none", backgroundColor: "white", width: "100%"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <h1 className="section-title" style={{color: "rgb(23,122,122)"}} >Why Buku.com</h1>
                    <p style={{textAlign: "center", fontSize: 14, color: "rgb(23,99,99)"}}>More and more businesses are joining Buku.com</p>
                    <div style={{marginTop: 20}}>
                        <img style={{width: "100%", height: "auto"}} src={medsPic}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterBusiness
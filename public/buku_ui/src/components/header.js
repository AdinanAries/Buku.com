import HeaderSearchBox from "./headerSearchBox";

function Header(){
    return (
        <header className="App-header">
            <div className="header-wrapper">
                <div className="each-header-section">
                    <p className="logo">Buk-<span className="logosB">U</span><span>.com</span></p>
                </div>
                <div style={{width: "50%"}} className="each-header-section">
                    <HeaderSearchBox />
                </div>
                <div className="each-header-section header-main-nav">
                    <ul>
                        <li className="active"><i className="fa fa-home"></i>Home</li>
                        <li><i className="fa fa-bars"></i>Services</li>
                        <li><i className="fa fa-calendar-o"></i>Appointments</li>
                        <li><i className="fa fa-sign-in"></i>Login</li>
                    </ul>
                </div>
                <div className="each-header-section">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p><i style={{fontSize: "22px", color: "aqua"}} className="fa fa-newspaper-o"></i></p>
                        <p style={{fontSize: "11px", color: "white"}}>News</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
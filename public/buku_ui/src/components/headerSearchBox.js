function HeaderSearchBox(){
    let containerStyle = {
        width: "100%",
        overFlow: "hidden",
        borderRadius: 20,
    };
    let inputStyle = {
        padding: "10px",
        borderRadius: 0,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        border: "none",
        fontSize: "14px",
        width: "calc(100% - 100px)"
    };
    let buttonStyle= {
        fontSize: "14px",
        padding: "10px",
        fontWeight: "bolder",
        border: "none",
        borderRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "white",
        color: "red",
        textAlign: "center",
        letterSpacing: "1px",
        width: "100px",
    };
    return (
        <div style={containerStyle}>
            <input style={inputStyle} placeholder="search service provider"/>
            <button style={buttonStyle}>
                <i style={{color: "darkslateblue", marginRight: 5}} className="fa fa-search"></i>search
            </button>
        </div>
    );
}

export default HeaderSearchBox
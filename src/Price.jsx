function Price({ oldPrice, newPrice}){

    let oldStyles = {
        textDecorationLine: "Line-through",
    };

    let newStyles = {
        fontWeight: "bold",
    };

    let styles = {
        backgroundColor: "rgb(255, 155, 155)",
        height: "30px",     
        borderRadius: "5px",
    };

    return(
        <>
           <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
           </div>
        </>
    )
}

    export default Price
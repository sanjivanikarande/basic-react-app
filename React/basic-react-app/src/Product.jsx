import "./Product.css"
import Price from "./Price.jsx"
function Product({title, idx /*features*/ })
{
    
    // let styles = {backgroundColor : "pink"};
    // let isDiscount = price > 30000 ? "Discount of 5%": "";
    
    // if(price>30000){

    let oldPrice = ["12495", "11900", "1599", "599"]
    let newPrice = ["8999/-", "9199/-", "899/-", "278/-"]
    let description =[
    ["8000 DPI", "5 programmable buttons"], 
    ["intituve surface", "designed for ipad Pro"],
    ["designed for ipad Pro", "intituve surface"],
    ["wireless", "optical orientation"],
    ];  
    return(
    <div className="product">
         
        
        <h3>{title}</h3>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <p>{description[idx][2]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>




        {/* <h3>/*This is my Product Title !</h3> */}
        {/* <h3>{props.title}</h3> */}

        

        {/* <h5>Product Description !</h5> */}

        {/* <h5>price : {price/2}</h5>

        {price > 30000 ? <p>"Discount of 5%"</p>: null} */}

            
       {/* <p>Discount of 5%</p> */} 


{/* ------------Is Example of features -------- */}
            {/*---- OR ----*/}
        {/* <p>{features}</p> */}
        {/* <p>{list}</p> */}
        
             {/*---- Or ----- */}
        {/* <p>
            {features.map((feature) => (
            <li>{feature}</li>
        ))}</p> */}
</div>
    )
}

    export default Product
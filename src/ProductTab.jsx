import Product from "./Product.jsx"

function ProductTab(){
  
    // let options = ["hi-tech", "durable", "reliable"]
    // let options2 = {a: "hi-tech", b:"durable", c:"reliable"}
    // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"reliable"</li>]
    

    let styles = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    };
    return(
    <>

      <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd gen)" idx={1} />
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="Petronics Toad 23" idx={3}/>
    </div>





      {/* <Product title="Mobile" price={30000}/>
      <Product title="Laptop" price={40000} features={options}/>
      <Product title="Pen" price={50} features={options}/> */}
  
    </>
    )
}

    export default ProductTab
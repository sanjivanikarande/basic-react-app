import "./App.css"
import ProductTab from "./ProductTab.jsx"
import Title from "./Title.jsx"
import Msgbox from "./Msgbox.jsx"

function App() {
  return (
  <>
    <div>
      <h1>This is my App Component</h1>
      <p>Inside app Component we have !</p>
      
      <Title/>
      <Title/>
      <Title/>

      <h2>BlockBuster Deals !!! Shop now........</h2>
      <ProductTab/>

      <Msgbox userName="Sanjivani Karande" textColor="orange"/>
      <Msgbox userName="Krushna College" textColor="red"/>
      <Msgbox userName="Shivaji University" textColor="green"/>
    </div>
  </>
  )
}

    export default App

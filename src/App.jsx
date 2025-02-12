import Button from "./button.jsx"
import data from "./components/card.js"
import Cards from "./components/cards"
import Gparent from "./components/gparent.jsx"

const App=()=>{
    const styles={
       color:"red"

      

    } 
return(<>
      {
       data.map((v,i)=>
       <Cards name={v} index ={i} />
)      }
      <div>
      <Button style={styles} value={"this is Button"} />
      </div>
      <div> 
      <Gparent/>
      </div>
</>)
}
export default App
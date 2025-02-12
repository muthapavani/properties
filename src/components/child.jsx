import Gchild from "./gchild"

function Child(props){
    console.log(props)
return(<>
   <Gchild prop ={props.name}/>
</>)
}
export default Child
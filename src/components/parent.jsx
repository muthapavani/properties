import Child from "./child"

function Parent(props){
    console.log(props)
return(<>
<Child name={props.a}/>
</>)
}
export default Parent
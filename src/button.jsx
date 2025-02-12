const Button=(props)=>{ 
    console.log(props)
    return(<>
    <button style={props.style}> {props.value} </button>
    </>)
}
export default Button
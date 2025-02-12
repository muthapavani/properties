import Parent from "./parent"

const Gparent =()=>{
    const name = "this is grand parent"
    return(<>
        <Parent a={name}/>
    </>)
}
export default Gparent
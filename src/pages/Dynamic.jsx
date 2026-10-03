import { useParams } from "react-router";
// "params" usually refers to URL parameters (or route parameters)
function Dynamic(){
    const {id}= useParams();
    return(
        <>
        <h1>Dynamic Route page</h1>
        <h2>And product collection id is {id}</h2>
        </>
    )
}
export default Dynamic;
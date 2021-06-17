import React,{useState , useEffect} from "react";
import DisplayCity  from "./DisplayCity";

const url = "https://developerfunnel.herokuapp.com/location";
function HooksComponent(){
    const[title] = useState("Hooks App");
    const [count , setCount] = useState(0);
    const [city, setMyCity] = useState();

    useEffect(()=> {
        fetch(url,{method:"GET"})
        .then((resp)=>resp.json())
        .then((data) => {
            setMyCity(data)
        })
    })
    return (
        <div>
            <center>
                <h1>{title}</h1>
                <h2>{count}</h2>
                <button onClick = {()=> {setCount(count+1)}}>Counter</button>
                <DisplayCity myCity={city}/>
            </center>
        </div>
    )
}
export default HooksComponent;
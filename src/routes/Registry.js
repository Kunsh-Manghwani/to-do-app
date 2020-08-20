import React, { useState , useEffect } from "react"
import { Link } from "react-router-dom"

function Registry(){
    const [registryData, setRegistryData] =useState([])
    const [textInput, setTextInput] = useState("")
    const [error,setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if(error) return;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }

    useEffect(() => {
        if(textInput.length > 25) setError(true);
        else setError(false)
    },[textInput])


    const removeItem = (index) => {
        let newData =[...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const editItem = (index) => {
        if(error) return;
        
        let newData = [...registryData]
        newData[index] =textInput;

        setRegistryData(newData);

    }
    
    return (
        <div class="registry">
        <span class="foot">
                K-star
            </span>
            <h1>
                TO-DO LIST
            </h1>
            <Link class="link"to="/">Click to go to Home</Link>
            <form onSubmit={addItem}>
               
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                
                <input type="submit" value="Submit" />
            </form>
            {error ? <span style={{color:"red"}}>Error Ocurred.</span> : null}
            <ul>
        {
            registryData.map((item, index) => {
                return (
                
                    <li key={index}>{item} <button onClick={() => editItem(index)}>Update</button><button class="remove" onClick={() => removeItem(index)}>Remove</button></li>
                
                )
            }
           
        )
        }
         </ul>
         
        </div>
    )
}

export default Registry;

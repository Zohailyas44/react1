import React, {useState} from 'react';
import './Style.css'
 function Room(){
    const [isOn, setOn] = useState(true);
    const [temp, setTemp] = useState(72);
    const onState = isOn ? 'ON':'OFF';
    let myTemp=temp;
    return(

        <div className={`gate ${isOn?"open":"closed"}` }>
            <p>The switch is <b>{onState}</b></p>
            <p>Current temperature of Room:<b>{temp}Celsius</b></p>
            <p>PIAIC best platform to learn</p>
            <p><button onClick={()=>setOn(true)}>ON Switch</button>
            <button onClick={()=>setOn(false)}>OFF Switch</button></p>
            <p><button onClick={()=>setTemp(++myTemp)}>Increase Temperature</button>
            <button onClick={()=>setTemp(--myTemp)}>Decrease Temperature</button></p>
        </div>

    )
}
export default Room;

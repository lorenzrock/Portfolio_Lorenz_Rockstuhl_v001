import React, { useState, useRef, useEffect, useContext} from "react"
import { RoundSlider } from 'mz-react-round-slider';
import styles from "./Skill.module.css"
import { Context } from "../App";

function Skill(prop) {
    const [ pointers, setPointers ] = useState([
        { value: 0 },
        { value: 25 }
    ]);

    
    useEffect(() =>{

    }, [])


    return(
        <>     
        <div className={styles.skillContainer}>
        <RoundSlider
            pathStartAngle={ 270 }
            pathEndAngle={ 269.999 }
            pointers={ pointers }
            onChange={ setPointers }
            textColor={ '#8993B7' }
        />
            <h3>{prop.pres}%</h3>
            <p>{prop.skill}</p>
        </div>
        </>
    )
}

export default Skill
import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./Skill.module.css"
import { Context } from "../App";

function Skill(prop) {
   
    const outerCircle = useRef(null);
    const knop = useRef(null);
    const slider = useRef(null);



    
    useEffect(() =>{
        if (outerCircle.current) {
            
            outerCircle.current.style.border = "20px solid black";
            outerCircle.current.style.borderRadius = "50%";
            const center = outerCircle.current.offsetHeight/2
            console.log(center)
            knop.current.style.top =  (center - knop.current.offsetHeight/2) + "px"
            knop.current.style.left = (center - knop.current.offsetHeight/2) + "px"
        }
    }, [])


    return(
        <>     
        <div className={styles.roundRangeSliderContainer}>
            <div ref={outerCircle} className={styles.outerCircle}>
                <div ref={knop} className={styles.knop}></div>
                <div ref={slider}></div>
                <div className={styles.centerInfoElement}>
                    <div>
                        <h3>{prop.pres}%</h3>
                        <p>{prop.skill}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skill
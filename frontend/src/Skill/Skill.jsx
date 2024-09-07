import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./Skill.module.css"
import { Context } from "../App";

function Skill(prop) {
   
    const outerCircle = useRef(null);
    const knop = useRef(null);
    const slider = useRef(null);

    // State for knob radius, circle radius, angle
    const [knopR, setKnopR] = useState(0);
    const [r, setR] = useState(0);
    const [a, setA] = useState(0);

    useEffect(() => {
        setKnopR(prop.knopR)
        setR(prop.radius)
        setA(prop.pres * 3.6)

        
    
    }, [prop.knopR, prop.radius, prop.pres])

    useEffect(() => {

        if (outerCircle.current && knop.current) {
            console.log(knopR)
            console.log(r)
            console.log(a)
    
            const centerX = r - knopR
            const centerY = r - knopR

    
            const deltaX = Math.sin(a * Math.PI/180) * (r - knopR)
            const deltaY = Math.cos(a * Math.PI/180) * (r - knopR)
            console.log(deltaX)
            console.log(deltaY)
    
    
            knop.current.style.left = `${centerX + deltaX}px`;
            knop.current.style.top = `${centerY + deltaY}px`;
    
        }
       

    }, [knopR, a, r])


    return(
        <>     
        <div className={styles.roundRangeSliderContainer}>
            <div ref={outerCircle} className={styles.outerCircle}>
                <div ref={knop} className={styles.knop}></div>
                <div ref={slider} className={styles.slider}></div>
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
import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./Skill.module.css"
import { Context } from "../App";

function Skill(prop) {
   
    const outerCircle = useRef(null);
    const knop = useRef(null);
    const rangeslider = useRef(null);

    const [radius, setRadius] = useState(null);


    useEffect(() => {

        if (outerCircle.current && knop.current) {
            
            const knopR = prop.knopR;
            const radius = prop.radius;
            const angle = prop.pres * 3.6;
            const pres = prop.pres
            const radian = angle * Math.PI/180;
            const circumference = 2*Math.PI*radius;

            setRadius(radius);

            console.log(outerCircle.current.style)
            outerCircle.current.style.stroke = "aqua";
            outerCircle.current.style.strokeDasharray = circumference * 0.25;
            outerCircle.current.style.strokeDashoffset =
            outerCircle.current.style.strokeLinecap = "round";
            outerCircle.current.style.strokeWidth = knopR;
            outerCircle.current.style.transformOrigin = "center"
            outerCircle.current.style.transform = "rotate(-90deg)";

            
            rangeslider.current.style.stroke = "red";
            rangeslider.current.style.strokeDasharray = 628;
            const strokeDashOffsetvalue = (circumference - (circumference/2 * pres) / 100)
            console.log(strokeDashOffsetvalue)
            rangeslider.current.style.strokeDashoffset = strokeDashOffsetvalue
            rangeslider.current.style.strokeLinecap = "round";
            rangeslider.current.style.strokeWidth = knopR;
            rangeslider.current.style.transformOrigin = "center"
            rangeslider.current.style.transform = "rotate(150deg)";


            console.log(`KnopR: ${knopR}`);
            console.log(`Radius: ${radius}`);
            console.log(`Angle: ${angle}, Radian: ${radian}`);
            console.log(`circumference: ${circumference}`);




            
            const centerX = radius - knopR
            const centerY = radius - knopR

            console.log(`CenterX: ${centerX}, CenterY: ${centerY}`)

    
            const deltaX = Math.sin(radian) * (radius - knopR)
            const deltaY = Math.cos(radian) * (radius - knopR)
            console.log(deltaX)
            console.log(deltaY)
    
    
            knop.current.style.left = `${centerX + deltaX}px`;
            knop.current.style.top = `${centerY + deltaY}px`;
    
        }
       

    }, [prop.knopR, prop.radius, prop.pres])


    return(
        <>     
        <div className={styles.roundRangeSliderContainer}>
                <svg className={styles.slider}>
                    <circle className={styles.outerring} ref={outerCircle} cx={radius} cy={radius} r={prop.radius - (prop.knopR*2)}></circle>
                    <circle className={styles.rangeslider} ref={rangeslider} cx={radius} cy={radius} r={prop.radius - (prop.knopR*2)}></circle>
                    
                </svg>
                <div ref={knop} className={styles.knop}></div>
                <div className={styles.centerInfoElement}>
                    <div>
                        <h3>{prop.pres}%</h3>
                        <p>{prop.skill}</p>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Skill
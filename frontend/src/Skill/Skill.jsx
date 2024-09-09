import React, { useState, useRef, useEffect, useContext} from "react"
import "../index.css"
import styles from "./Skill.module.css"
import { Context } from "../App";

function Skill(prop) {
   
    const outerCircle = useRef(null);
    const knop = useRef(null);
    const rangeslider = useRef(null);
    const circleShadow = useRef(null)

    const [radius, setRadius] = useState(prop.radius);
    const [primaryColor, setPrimaryColor] = useState(null);
    const [iconColor, setIconColor] = useState(null)

    useEffect(() => {

        
        const rootStyles = getComputedStyle(document.documentElement);
        const colorPrimary = rootStyles.getPropertyValue("--color-primary").trim();
        const colorIcon = rootStyles.getPropertyValue("--color-icons").trim();
        setPrimaryColor(colorPrimary);
        setIconColor(colorIcon)


        if (outerCircle.current && knop.current) {
            
            const knopR = prop.knopR;
            const radius = prop.radius;
            const angle = prop.pres * 3.6;
            const pres = prop.pres
            const radian = angle * Math.PI/180;
            const circumference = 2*Math.PI*radius;



            setRadius(radius);

            console.log(outerCircle.current.style)
            outerCircle.current.style.strokeDasharray = circumference * 0.25;
            outerCircle.current.style.strokeDashoffset =
            outerCircle.current.style.strokeLinecap = "round";
            outerCircle.current.style.strokeWidth = knopR;
            outerCircle.current.style.transformOrigin = "center"
            outerCircle.current.style.transform = "rotate(-90deg)";
            outerCircle.current.style.fill = "none";
            outerCircle.current.setAttribute("stroke", "url(#gradient_0)");

            
            rangeslider.current.style.strokeDasharray = 628;
            const strokeDashOffsetvalue = (circumference - (circumference/2 * pres) / 100)
            console.log(strokeDashOffsetvalue)
            rangeslider.current.style.strokeDashoffset = strokeDashOffsetvalue
            rangeslider.current.style.strokeLinecap = "round";
            rangeslider.current.style.strokeWidth = knopR;
            rangeslider.current.style.transformOrigin = "center"
            rangeslider.current.style.transform = "rotate(150deg)";
            rangeslider.current.style.fill = "none";
            rangeslider.current.setAttribute("stroke", "url(#gradient_1)");

            circleShadow.current.style.strokeWidth = "2px"
            circleShadow.current.style.stroke = "aliceblue"
            circleShadow.current.style.fill = "none"
            circleShadow.current.style.strokeDasharray = (radius+6) * Math.PI * 2 * 0.25
    
            
            


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
                    <defs>
                        <linearGradient id="gradient_0" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: "black", stopOpacity: 1}}></stop>
                            <stop offset="100%" style={{stopColor: "black", stopOpacity: 1}}></stop>
                        </linearGradient>
                        <linearGradient id="gradient_1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: primaryColor, stopOpacity: 1}}></stop>
                            <stop offset="100%" style={{stopColor: iconColor, stopOpacity: 1}}></stop>
                        </linearGradient>
                    </defs>
                    <circle ref={outerCircle} cx={radius} cy={radius} r={prop.radius - (prop.knopR*2)}></circle>
                    <circle ref={rangeslider} cx={radius} cy={radius} r={prop.radius - (prop.knopR*2)}></circle>
                    <circle ref={circleShadow} cx={radius} cy={radius} r={prop.radius - (prop.knopR)-6}></circle>
                    
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
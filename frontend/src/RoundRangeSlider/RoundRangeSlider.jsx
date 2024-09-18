import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./RoundRangeSlider.module.css"
import { Context } from "../App";

function RoundRangeSlider(prop) {
   
    const canvas = useRef(null)

    useEffect(() => {

        if (canvas.current) {

            const radius = prop.radius
            const lineWidth = prop.lineWidth
            const totalCircleCircumference = prop.totalCircleCircumference
            const progress = prop.progress

            const containerSize = radius*2 + lineWidth
            canvas.current.width = containerSize;
            canvas.current.height = containerSize;

            const ctx = canvas.current.getContext("2d");
            ctx.clearRect(0, 0, containerSize, containerSize);

            
            

            

            const centerX = canvas.current.width/2
            const centerY = canvas.current.height/2


            console.log(centerX)
            console.log(centerY)

           

            const circlePathLenght = 360*(totalCircleCircumference/100)
            const circlePathLengthRadian = circlePathLenght * Math.PI/180
            const circleToRotate = (360* (100 - totalCircleCircumference)/100) + 45
            console.log(circleToRotate)


            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate((circleToRotate * Math.PI) / 180)

            ctx.lineWidth = lineWidth
            ctx.strokeStyle = "black"
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.arc(0, 0, radius, 0, circlePathLengthRadian);
            ctx.stroke();
            ctx.restore();


            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate((circleToRotate * Math.PI) / 180)

            const gradient = ctx.createLinearGradient(-radius, -radius, containerSize, 0);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(1, "blue");

            ctx.lineWidth = lineWidth
            ctx.strokeStyle = gradient
            ctx.lineCap = "round";

            console.log((360*(100-totalCircleCircumference)/100))
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.arc(0, 0, radius, 0, (270*(progress/100)) * Math.PI/180);
            ctx.stroke();
        }   


    }, [])
    



    return(
        <>     
        <div className={styles.roundRangeSliderContainer}>
         <canvas ref={canvas} ></canvas>
        </div>
        </>
    )
}

export default RoundRangeSlider
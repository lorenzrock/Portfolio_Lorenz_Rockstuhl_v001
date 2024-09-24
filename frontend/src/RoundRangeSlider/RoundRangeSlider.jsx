import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./RoundRangeSlider.module.css"
import { Context } from "../App";
import MplusFont from "/src/assets/fonts/MPLUSRounded1c-ExtraBold.woff"
import RoboR from "/src/assets/fonts/Roboto-Regular.woff"
function RoundRangeSlider(prop) {
   
    const canvas = useRef(null)
    const discription = useRef(null)


    // the container needs to get a min with of 735px to prewent overflow


    useEffect(() => {

        if (canvas.current) {

            const radius = prop.radius
            const lineWidth = prop.lineWidth
            const totalCircleCircumference = prop.totalCircleCircumference
            const progress = prop.progress
            const textLabel = prop.textLabel

            const containerSize = radius*2 + lineWidth
            canvas.current.width = containerSize;
            canvas.current.height = containerSize;
            canvas.current.style.zIndex = 0;

            const ctx = canvas.current.getContext("2d");
            ctx.clearRect(0, 0, containerSize, containerSize);

            const centerX = canvas.current.width/2
            const centerY = canvas.current.height/2


            const circlePathLenght = 360*(totalCircleCircumference/100)
            const circlePathLengthRadian = circlePathLenght * Math.PI/180
            const circleToRotate = (360* (100 - totalCircleCircumference)/100) + 45



            
            drawArcBackground()
            drawArcProgress()
            drawText()
            setupDiscription()

            function setupDiscription() {
                if (discription.current) {
                    
                }

            }


            function drawText() {
                loadFont()
            }

            function loadFont() {
                const fontFace = new FontFace("Mplus_bb", `url(${MplusFont})`);
                const fontFace1 = new FontFace("Robo_r", `url(${RoboR})`)
                fontFace.load().then((loadedFont) => {
                    document.fonts.add(loadedFont);
                    ctx.textAlign = "center";
                    ctx.fillStyle = "#F0F8FF";
                    ctx.font = "18px Mplus_bb";
                    ctx.fillText(textLabel, centerX, centerY);
                });
                fontFace1.load().then((loadedFont) => {
                    document.fonts.add(loadedFont);
                    ctx.font = "15px Robo_r";
                    ctx.globalAlpha = 0.5;
                    ctx.fillText(`${progress}%`, centerX, centerY + 26);
                    ctx.globalAlpha = 1;
                })
            }

            function drawArcBackground() {
                

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

            }

            function drawArcProgress() {


                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate((circleToRotate * Math.PI) / 180)

                const gradient = ctx.createLinearGradient(-radius, -radius, containerSize, 0);
                gradient.addColorStop(0, "#15E5CC");
                gradient.addColorStop(1, "#F0F8FF");

                ctx.lineWidth = lineWidth
                ctx.strokeStyle = gradient
                ctx.lineCap = "round";

                ctx.beginPath();
                ctx.moveTo(radius, 0);
                ctx.arc(0, 0, radius, 0, (270*(progress/100)) * Math.PI/180);
                ctx.stroke();
                ctx.restore();
            }
            
        }   


    }, [])
    

    









    return(
        <>     
        <div className={styles.container}>
            <canvas ref={canvas} className={styles.RoundRangeSlider} ></canvas>
            <div className={styles.overlay}>
                {prop.description ? <p>{prop.description}</p> : null}    
            </div>         
        </div>
        </>
    )
}

export default RoundRangeSlider
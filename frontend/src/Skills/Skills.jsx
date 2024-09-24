import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./Skills.module.css"
import Skill from "../Skill/Skill";
import { Context } from "../App";
import RoundRangeSlider from "../RoundRangeSlider/RoundRangeSlider";

function Skills() {

    var [navIsOpen, setNavOpenState] = useContext(Context)
    var section = useRef(null)
    var infoboxContainer = useRef(null)
    var roundRageSliderDiv = useRef(null)
    

    useEffect(() =>{
        handleroundRageSliderDivResiz()
        if (navIsOpen) {
            section.current.style.marginRight = "200px"
        } else {
            section.current.style.marginRight = "100px"
        }

        const handleScroll = (event) => {
            event.preventDefault();
            if (infoboxContainer.current) {
                infoboxContainer.current.scrollLeft += event.deltaY
            }
        }
    



        
        if (infoboxContainer.current) {
            infoboxContainer.current.addEventListener("wheel", handleScroll);
        }
        if (window) {
            window.addEventListener("resize", handleroundRageSliderDivResiz)
        }




        return () => {
            if (infoboxContainer.current) {
                infoboxContainer.current.removeEventListener("wheel", handleScroll)
            }
        }
    }, [navIsOpen, infoboxContainer])



    const handleroundRageSliderDivResiz = () => {
        const div = infoboxContainer.current.querySelectorAll(".set-size");
        
        div.forEach((div) => {
            div.style.minWidth = `${infoboxContainer.current.offsetWidth}px`;
        });
        
    }


    const handleScroll1 = () => {
        infoboxContainer.current.children[0].scrollIntoView({behavior: 'smooth',inline: 'start'});
    }
    const handleScroll2 = () => {
        infoboxContainer.current.children[1].scrollIntoView({behavior: 'smooth',inline: 'start'});
    }
    const handleScroll3 = () => {
        infoboxContainer.current.children[2].scrollIntoView({behavior: 'smooth',inline: 'start'});
    }



    return(
        <section id="Skills">
            <div className={styles.sectionContentContainer} ref={section}>
               <h2>Skills</h2>
               <div className={styles.selcter}>
                    <div className={styles.points} onClick={handleScroll1}></div>
                    <div className={styles.points} onClick={handleScroll2}></div>
                    <div className={styles.points} onClick={handleScroll3}></div>
               </div>
               <div>
                    <div className={styles.infoboxContainer} ref={infoboxContainer} /* onWheel does not seam to worke because of jsx*/>
                            <div ref={roundRageSliderDiv} className="set-size">
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={94} textLabel="HTML" description="Danke an Programmieren lernen mit Junus"/>
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={63} textLabel="JavaScript" description="Thank you, Chris Courses."/>
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={57} textLabel="React" description="I will never forget you, Bro Code."/>
                            </div>                            
                            <div className="set-size">
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={87} textLabel="Figma" description="Thanks to myself! ;)"/>
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={72} textLabel="FreeCAD" description="Thanks to MangoJelly Solutions for FreeCAD."/>
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={42} textLabel="Linux" description="Too many to count."/>
                            </div>
                            <div className="set-size">
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={30} textLabel="Docker" description="I can run a container. :/"/>
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={47} textLabel="Nginx" description="Thank you."/>
                                <RoundRangeSlider radius={100} lineWidth={15} totalCircleCircumference={75} progress={15} textLabel="SQL" description="I'm still forgetting the commands"/>
                            </div>
                            
                    </div>
               </div>
            </div>
        </section>
    )
}

export default Skills
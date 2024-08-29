import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./Skills.module.css"
import Skill from "../Skill/Skill";
import { Context } from "../App";

function Skills() {

    var [navIsOpen, setNavOpenState] = useContext(Context)
    var section = useRef(null)
    var infoboxContainer = useRef(null)
    

    useEffect(() =>{
        handleFieldsetWidth()
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
    





        if (infoboxContainer) {
            infoboxContainer.current.addEventListener("wheel", handleScroll);
        }
        if (window) {
            window.addEventListener("resize", handleFieldsetWidth)
        }




        return () => {
            if (infoboxContainer) {
                infoboxContainer.current.removeEventListener("wheel", handleScroll)
            }
        }
    }, [navIsOpen, infoboxContainer])



    const handleFieldsetWidth = () => {
        const fieldset = infoboxContainer.current.querySelectorAll("fieldset");
        
        fieldset.forEach((fieldset) => {
            fieldset.style.minWidth = `${infoboxContainer.current.offsetWidth}px`;
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
               <div className={styles.infoboxContainer} ref={infoboxContainer} /* onWheel does not seam to worke because of jsx*/>
                    <Skill skill="React" pres="63" />
               </div>
               
            </div>
        </section>
    )
}

export default Skills
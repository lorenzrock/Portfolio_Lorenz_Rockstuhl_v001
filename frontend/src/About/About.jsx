import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./About.module.css"
import { Context } from "../App";

function Home() {

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
            if (infoboxContainer.current) {
                event.preventDefault();
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
        infoboxContainer.current.children[0].scrollIntoView({behavior: 'smooth',block: 'nearest', inline: 'start'});
    }
    const handleScroll2 = () => {
        infoboxContainer.current.children[1].scrollIntoView({behavior: 'smooth',block: 'nearest', inline: 'start'});
    }
    const handleScroll3 = () => {
        infoboxContainer.current.children[2].scrollIntoView({behavior: 'smooth',block: 'nearest', inline: 'start'});
    }



    return(
        <section id="About">
            <div className={styles.sectionContentContainer} ref={section}>
               <h2>About</h2>
               <div className={styles.selcter}>
                    <h3 onClick={handleScroll1}>resume</h3>
                    <h3>/</h3>
                    <h3 onClick={handleScroll2} >projects</h3>
                    <h3>/</h3>
                    <h3 onClick={handleScroll3}>??????????</h3>
               </div>
               <div /* Helps with the sizning in css*/>
                    <div className={styles.infoboxContainer} ref={infoboxContainer} /* onWheel does not seam to worke because of jsx*/>
                            <fieldset>
                                <legend>resume</legend>
                                <svg className={styles.indicator} width="39" height="32" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H29.7639C30.5215 0 31.214 0.428005 31.5528 1.10557L38.5528 15.1056C38.8343 15.6686 38.8343 16.3314 38.5528 16.8944L31.5528 30.8944C31.214 31.572 30.5215 32 29.7639 32H0V0Z"/>
                                </svg>

                                <p>Former athlete turned tech enthusiast. Spent four years at Jena Sport School before transitioning to IGS - Erfurt, where I pursued my Abitur while diving into programming. Now, I'm dedicated to using technology to tackle challenges and create innovative solutions. Let's connect and discuss how we can make a difference together!</p>
                                <hr />
                                <button>CV-Download</button>
                            </fieldset>
                            <fieldset>
                                <legend>resume</legend>
                                <svg className={styles.indicator} width="39" height="32" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H29.7639C30.5215 0 31.214 0.428005 31.5528 1.10557L38.5528 15.1056C38.8343 15.6686 38.8343 16.3314 38.5528 16.8944L31.5528 30.8944C31.214 31.572 30.5215 32 29.7639 32H0V0Z"/>
                                </svg>

                                <p>Former athlete turned tech enthusiast. Spent four years at Jena Sport School before transitioning to IGS - Erfurt, where I pursued my Abitur while diving into programming. Now, I'm dedicated to using technology to tackle challenges and create innovative solutions. Let's connect and discuss how we can make a difference together!</p>
                                <hr />
                                <button>CV-Download</button>
                            </fieldset>
                            <fieldset>
                                <legend>resume</legend>
                                <svg className={styles.indicator} width="39" height="32" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H29.7639C30.5215 0 31.214 0.428005 31.5528 1.10557L38.5528 15.1056C38.8343 15.6686 38.8343 16.3314 38.5528 16.8944L31.5528 30.8944C31.214 31.572 30.5215 32 29.7639 32H0V0Z"/>
                                </svg>

                                <p>Former athlete turned tech enthusiast. Spent four years at Jena Sport School before transitioning to IGS - Erfurt, where I pursued my Abitur while diving into programming. Now, I'm dedicated to using technology to tackle challenges and create innovative solutions. Let's connect and discuss how we can make a difference together!</p>
                                <hr />
                                <button>CV-Download</button>
                            </fieldset>
                    </div>
               </div>
               
               
            </div>
        </section>
    )
}

export default Home
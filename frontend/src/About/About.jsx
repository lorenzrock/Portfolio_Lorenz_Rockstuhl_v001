import React, { useState, useRef, useEffect, useContext} from "react"
import styles from "./About.module.css"
import { Context } from "../App";

function Home() {
    var [navIsOpen, setNavOpenState] = useContext(Context)
    var section = useRef(null)






    useEffect(() =>{
        if (navIsOpen) {
            section.current.style.marginRight = "200px"
        } else {
            section.current.style.marginRight = "100px"
        }
    }, [navIsOpen])





    return(
        <section id="About">
            <div className={styles.sectionContentContainer} ref={section}>
               <h2>About</h2>
               <div className={styles.selcter}>
                    <h3>resume</h3>
                    <h3>/</h3>
                    <h3>projects</h3>
                    <h3>/</h3>
                    <h3>??????????</h3>
               </div>^
               <div className={styles.infoboxContainer}>
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
        </section>
    )
}

export default Home
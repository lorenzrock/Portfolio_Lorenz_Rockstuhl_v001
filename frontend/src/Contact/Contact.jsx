import styles from "./Contact.module.css"
import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../App";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfos from "../ContactInfos/ContactInfos";
import { Link } from "react-router-dom";


function Contact() {

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
        <section id="Contact">
            <div className={styles.sectionContentContainer} ref={section}>
                <h2>Contact</h2>
                <h2><Link to="/privacy"></Link></h2>
                <ContactForm />
                <ContactInfos />
                
                    
            </div>
        </section>
    )
}

export default Contact
import styles from "./ContactForm.module.css"

function ContactForm() {
    


    return(
        <form className={styles.contactform}>
            <fieldset>
                <legend>Don't hesitate to drop me a message!</legend>
                <input type="text" placeholder="Heading"></input>
                <textarea name="infos" id="maininfos" rows="10" placeholder="Enter your text/question"></textarea>
                <input type="Submit"></input>
            </fieldset>
        </form>
    )
}

export default ContactForm
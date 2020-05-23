import React from "react";

function Contact() {
   return(
        <div>
            <h3>Contact Me</h3>
            <div className="form-page"> 
            <form className="form">
            <label> Name 
                <br />
                <input type="text" name="name" />
            </label>
            <br />
            <label> Email
                <br />
                <input type="text" name="email" />
            </label>
            <br />
            Message
            <br />
            <textarea type="textarea" name="textarea"></textarea>
            <br />
            <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
    
}

export default Contact;

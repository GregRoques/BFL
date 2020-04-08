import React, { Component } from "react";
import cssContact from "./contact.module.css";
import Top from "./Components/ContactTop";
import Hours from "./Components/Hours";
import Map from "./Components/Map";
//import Message from "./Components/Message";

const currYear = (new Date()).getFullYear();

class Contact extends Component {

    render () {
        return (
            <div className={ cssContact.body }>
                <div className={ cssContact.grid }>
                     <Top /> 
                    <div className={ cssContact.contactMagin}>
                        <Hours />
                        <hr/>
                         {/* <Message />
                        <hr/>  */}
                    </div>
                    <Map />
                    <div className={ cssContact.copyright}>
                        <div>Copyright {`${String.fromCharCode(169)}`} { currYear } Beds 4 Less</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;

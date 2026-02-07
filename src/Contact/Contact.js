/**
 * @file Contact.js
 * @description Contact page that assembles the hero image, business hours,
 * contact form, embedded map, and copyright notice.
 */

import React from "react";
import cssContact from "./contact.module.css";
import Top from "./Components/ContactTop";
import Hours from "./Components/Hours";
import Map from "./Components/Map";
import Message from "./Components/Message";

/** @constant {number} currYear - Current calendar year for the copyright line. */
const currYear = (new Date()).getFullYear();

/**
 * @component Contact
 * @description Renders the full Contact page layout. Scrolls to the top on
 * mount and composes child components (ContactTop, Hours, Message, Map).
 * @returns {JSX.Element} The Contact page.
 */
const Contact = () => {

    window.scrollTo(0, 0);

    return (
        <div className={ cssContact.body }>
            <div className={ cssContact.grid }>
                    <Top />
                <div className={ cssContact.contactMagin}>
                    <Hours />
                    <hr/>
                        <Message />
                    <hr/>
                </div>
                <Map />
                <div className={ cssContact.copyright}>
                    <div>Copyright {`${String.fromCharCode(169)}`} { currYear } Beds 4 Less</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

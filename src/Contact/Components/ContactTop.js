/**
 * @file ContactTop.js
 * @description Hero banner for the Contact page, showing a title and
 * background image.
 */

import React from "react";
import cssTop from "./CSS/contactTop.module.css";

/**
 * @component ContactTop
 * @description Renders the "Contact" heading with a decorative background
 * image at the top of the Contact page.
 * @returns {JSX.Element} The contact hero section.
 */
const ContactTop = () => {
    return (
        <div className={cssTop.topBody}>
            <div className={cssTop.topContainer}>
                <div className= {cssTop.topImageText }>
                    Contact
                </div>
                <div className={ cssTop.topImage } style={{ backgroundImage: 'url("/contactPic.jpg")' }}></div>
            </div>
        </div>
    );
};

export default ContactTop;

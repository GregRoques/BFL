import React from "react";
import cssTop from "./CSS/contactTop.module.css";

const ContactTop = () => {
    return (
        <div className={cssTop.topBody}>
            <div className={cssTop.topContainer}>
                <div className= {cssTop.topImageText }>
                    Contact
                </div>
                <div className={ cssTop.topImage }></div>
            </div>
        </div>
    );
};

export default ContactTop;

/**
 * @file Hours.js
 * @description Contact page section displaying phone/email links, social
 * media icons, and the current business hours with today highlighted.
 */

import React from "react";
import cssHours from "./CSS/hours.module.css";
import {
    BUSINESS_PHONE,
    BUSINESS_PHONE_LINK,
    BUSINESS_EMAIL,
    SOCIAL_LINKS,
    BUSINESS_HOURS
} from "../../Aux/businessInfo";
import { getDayNumber, isDayOpen, isDayClosed } from "../../Functions/timeUtils";

/**
 * @component Hours
 * @description Renders a two-column grid with contact methods (phone, email,
 * social links) on the left and business hours on the right. Highlights
 * the current day's status (open or closed).
 * @returns {JSX.Element} The hours/contact section.
 */
const Hours = () => {
    const dayNum = getDayNumber();

    return (
        <div className={cssHours.hoursGrid}>
            <div className={cssHours.seperator}>
                <div className={cssHours.header}>
                    <div className={cssHours.contactBig}>Call Us</div>
                </div>
                <div className={cssHours.connectGrid}>
                    <div className={cssHours.hitEmWithTheFlex}>
                        <a href={BUSINESS_PHONE_LINK}>
                            <img alt={BUSINESS_PHONE} className={cssHours.connectContact} src="/myImages/phone.png"/>
                            <br/>
                            {BUSINESS_PHONE}
                        </a>
                    </div>
                    <div className={cssHours.hitEmWithTheFlex}>
                        <a href={`mailto:${BUSINESS_EMAIL}?subject=Question%20for%20Jason`}>
                            <img alt={BUSINESS_EMAIL} className={cssHours.connectContact} src="/myImages/email.png"/>
                            <br/>
                            Jason@NolaBeds.com
                        </a>
                    </div>
                </div>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" className={cssHours.connectSocial} src="/myImages/facebook.png"/>
                </a>
                <a href={SOCIAL_LINKS.yelp} target="_blank" rel="noopener noreferrer">
                    <img alt="Yelp" className={cssHours.connectSocial} src="/myImages/yelp.png"/>
                </a>
            </div>
            <div className={cssHours.weekDays}>
                <div className={cssHours.header}>Hours</div>
                <div className={isDayOpen(dayNum) ? cssHours.highlightDate : null}>
                    <div>Tuesday – Saturday <br/> {BUSINESS_HOURS.open.display}</div>
                </div>
                <br/>
                <div className={isDayClosed(dayNum) ? cssHours.highlightDate : null}>
                    <div>Sunday – Monday<br/> {BUSINESS_HOURS.closedDisplay}</div>
                </div>
            </div>
        </div>
    );
};

export default Hours;

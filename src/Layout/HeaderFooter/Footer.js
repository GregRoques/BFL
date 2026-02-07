/**
 * @file Footer.js
 * @description Fixed bottom footer bar showing the phone number, address
 * (with map link), and today's business hours. Collapses to simplified
 * labels (Call / Map / Email) on small screens.
 */

import React from "react";
import cssFooter from "./CSS/footer.module.css";
import { mapSelector } from "../../Functions/MapSelector";
import {
    BUSINESS_PHONE_FORMATTED,
    BUSINESS_PHONE_LINK,
    BUSINESS_ADDRESS_FULL,
    BUSINESS_EMAIL_LINK
} from "../../Aux/businessInfo";
import { getTodayName, getTodayStatus, isClosedToday } from "../../Functions/timeUtils";

/**
 * @component Footer
 * @description Renders a fixed-position footer with three columns: phone,
 * address, and today's hours. On mobile, the columns switch to compact
 * "Call", "Map", and "Email" links.
 * @returns {JSX.Element} The site footer.
 */
const Footer = () => {
    const today = getTodayName();
    const status = getTodayStatus();
    const isClosed = isClosedToday();

    return (
        <div>
            <div className={cssFooter.mobileSpace}><p> blank </p></div>
            <div className={cssFooter.mainPageBottom}/>

            <div className={cssFooter.footerContainer}>
                <div className={cssFooter.grid}>
                    <div>
                        <span className={cssFooter.visibleBig}>
                            <a href={BUSINESS_PHONE_LINK}>{BUSINESS_PHONE_FORMATTED}</a>
                        </span>
                        <span className={cssFooter.visibleSmall}>
                            <a href={BUSINESS_PHONE_LINK}>Call</a>
                        </span>
                    </div>
                    <div title="Open Map" className={cssFooter.address} onClick={() => mapSelector()}>
                        <span className={cssFooter.visibleBig}>{BUSINESS_ADDRESS_FULL}</span>
                        <span className={cssFooter.visibleSmall}>Map</span>
                    </div>
                    <div>
                        <span className={cssFooter.visibleBig}>
                            <span>{today}: <span className={isClosed ? cssFooter.closed : null}>{status}</span></span>
                        </span>
                        <span className={cssFooter.visibleSmall}>
                            <a href={BUSINESS_EMAIL_LINK}>Email</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

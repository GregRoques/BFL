/**
 * @file snapGrid.js
 * @description Home page grid section featuring the Snap Finance logo/link
 * and a store info panel with hours, phone number, and address.
 */

import React from "react";
import cssSnap from "./CSS/snapGrid.module.css";
import { mapSelector } from "../../Functions/MapSelector";
import {
    BUSINESS_PHONE,
    BUSINESS_PHONE_LINK,
    BUSINESS_ADDRESS,
    BUSINESS_ADDRESS_NOTE,
    SNAP_FINANCING_URL
} from "../../Aux/businessInfo";
import { getDayNumber, isDayOpen, isDayClosed } from "../../Functions/timeUtils";

/**
 * @component Snap
 * @description Renders a two-column grid: one side shows the Snap Finance
 * application link; the other shows the store photo, hours (with today
 * highlighted), phone number, and a clickable map link.
 * @returns {JSX.Element} The Snap Finance / store info section.
 */
const Snap = () => {
    const dayNum = getDayNumber();

    return (
        <div className={cssSnap.snapGrid}>
            <div className={cssSnap.seperator}>
                <a href={SNAP_FINANCING_URL} target="_blank" rel="noopener noreferrer">
                    <img className={cssSnap.snapImage} src="/snap.jpg" alt="Snap Financing"/>
                </a>
                <div className={cssSnap.snapDescription}>
                    <b>Snap Offers Financing Options</b>
                    <br/><br/>
                    Click the image above to apply.
                </div>
                <hr className={cssSnap.smallSeperator}/>
            </div>
            <div>
                <img className={cssSnap.snapHomeImage} src="/contactPic.jpg" alt="Beds 4 Less Store"/>
                <div className={cssSnap.snapDescription}>
                    <span className={isDayOpen(dayNum) ? cssSnap.dateSelected : null}>Tues-Sat: 10a - 6p </span> |
                    <span className={isDayClosed(dayNum) ? cssSnap.dateSelected : null}> Sun & Mon: Closed</span><br/>
                    <a href={BUSINESS_PHONE_LINK}>{BUSINESS_PHONE}</a><br/>
                    <span className={cssSnap.mapHover} title="Open Map" onClick={() => mapSelector()}>
                        {BUSINESS_ADDRESS}.<br/>
                        (<i>{BUSINESS_ADDRESS_NOTE}</i>)
                    </span>
                </div>
                <hr className={cssSnap.smallSeperator}/>
            </div>
        </div>
    );
};

export default Snap;

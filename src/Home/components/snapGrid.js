import React from "react";
import cssSnap from "./CSS/snapGrid.module.css";
import { mapSelector } from "../../Functions/MapSelector"

const Snap = () => {
    const dayNum = (new Date()).getDay();
    return (
        <div className={ cssSnap.snapGrid }>
            <div className= { cssSnap.seperator}>
                <a href="https://consumer.snapfinance.com/#/?mid=37257" target="_blank" rel="noopener noreferrer">
                    <img className={cssSnap.snapImage} src="/snap.jpg"/>
                </a>
                <div className={cssSnap.snapDescription}>
                    <b>Snap Financial offers 
                    <br/>
                    <span className={cssSnap.dateSelected}>100 DAYS SAME AS CASH</span></b>
                    <br/><br/>
                    Click the link above and fill out the on line application to get an instant approval.
                </div>
                <hr className={cssSnap.smallSeperator}/>
            </div>
            <div>
                <img className={cssSnap.snapHomeImage} src="/contactPic.jpg"/>
                <div  className={ cssSnap.snapDescription }>
                    <span className={dayNum > 1 ? cssSnap.dateSelected : null}>Tues-Sat: 10a - 6p </span> |
                    <span className={dayNum < 2 ? cssSnap.dateSelected : null}> Sun & Mon: Closed</span><br/>
                    <a href="tel:504-305-4430">504.305.4430</a><br/>
                    <span className={cssSnap.mapHover} title="Open Map" onClick ={() => mapSelector("https://www.google.com/maps/place/Beds+4+Less/@30.0244693,-90.2392237,15z/data=!4m5!3m4!1s0x0:0xb1330ab9517646aa!8m2!3d30.0244693!4d-90.2392237")}>
                        3729 Williams Blvd.<br/>
                        (<i>2 blocks from W. Esplanade</i>)
                    </span>
                </div>
                <hr className={cssSnap.smallSeperator}/>
             </div>
        </div>
    );
};

export default Snap;

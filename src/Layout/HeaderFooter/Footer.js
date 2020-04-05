import React from "react";
import cssFooter from "./CSS/footer.module.css";
import { mapSelector } from "../../Functions/MapSelector";

const dayNum = (new Date()).getDay();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = days[dayNum];
let time;

if (dayNum === 1 || dayNum === 0) {
    time = "Closed";
} else {
    time = "10a – 6p";
};

const Footer = () => {
    return (
        <div className={ cssFooter.footerContainer }>
            <div className={cssFooter.grid}>
                <div>
                    <span className={ cssFooter.visibleBig } ><a href="tel:504-305-4430">
                        (504) 305-4430
                    </a></span>
                    <span className={ cssFooter.visibleSmall }><a href="tel:504-305-4430">
                        Call
                    </a></span>
                </div>
                <div title="Open Map" className={ cssFooter.address } onClick ={() => mapSelector("https://www.google.com/maps/place/Beds+4+Less/@30.0244693,-90.2392237,15z/data=!4m5!3m4!1s0x0:0xb1330ab9517646aa!8m2!3d30.0244693!4d-90.2392237")} >
                    <span className={ cssFooter.visibleBig }>3729 Williams Blvd •  Kenner</span>
                    <span className={ cssFooter.visibleSmall}>Map</span>
                </div>
                <div>
                    <span className={ cssFooter.visibleBig }>
                        <span>{ today }: <span className={ time === "Closed" ? cssFooter.closed : null }>{ time }</span></span>
                    </span>
                    <span className={ cssFooter.visibleSmall}>
                        <a href="mailto:jason@nolabeds.com?subject=New%20Question%20for%20Beds%204%20Less">
                            Email
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};


export default Footer;

/**
 * @file Map.js
 * @description Embedded Google Map showing the Beds 4 Less store location.
 */

import React from "react";
import cssMap from "./CSS/map.module.css";

/**
 * @component map
 * @description Renders a "Directions" header and an embedded Google Maps
 * iframe pointing to the store address at 3729 Williams Blvd, Kenner, LA.
 * @returns {JSX.Element} The map section.
 */
const map = () => {
    return (
        <div >
            <div className={cssMap.header}>
                Directions
            </div>
            <iframe title="3729 Williams Blvd, Kenner, LA 70065" className={cssMap.mapBody} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13817.726965072845!2d-90.2392237!3d30.0244693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1330ab9517646aa!2sBeds%204%20Less!5e0!3m2!1sen!2sus!4v1586300941605!5m2!1sen!2sus"></iframe>
        </div>
    );
};

export default map;

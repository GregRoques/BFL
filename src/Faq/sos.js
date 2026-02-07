/**
 * @file Faq/sos.js
 * @description "The Science of Sleep" FAQ page. Uses the shared bodyMap
 * renderer with the sleep science content data.
 */

import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import sleepBody from "../BodyText/sos";

/**
 * @component SOS
 * @description Renders the "Science of Sleep" informational page. Scrolls
 * to the top on mount and delegates rendering to bodyMap.
 * @returns {JSX.Element} The Science of Sleep page.
 */
const SOS = () => {
    window.scrollTo(0, 0);
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("sos", "The Science of Sleep", sleepBody) }
            </div>
        )
    }

export default SOS;
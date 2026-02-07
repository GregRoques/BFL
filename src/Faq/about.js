/**
 * @file Faq/about.js
 * @description "Our Products" FAQ page. Uses the shared bodyMap renderer
 * with the about content data.
 */

import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import aboutBody from "../BodyText/about";

/**
 * @component About
 * @description Renders the "Our Products" informational page. Scrolls to
 * the top on mount and delegates rendering to bodyMap.
 * @returns {JSX.Element} The About / Our Products page.
 */
const About = () => {
    window.scrollTo(0, 0);
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("about", "Our Products", aboutBody) }
            </div>
        )
    }

export default About;
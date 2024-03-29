import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import aboutBody from "../BodyText/about";

const About = () => {
    window.scrollTo(0, 0);
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("about", "Our Products", aboutBody) }
            </div>
        )
    }

export default About;
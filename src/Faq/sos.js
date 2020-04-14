import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import sleepBody from "../BodyText/sos";

const SOS = () => {
    window.scrollTo(0, 0);
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("sos", "The Science of Sleep", sleepBody) }
            </div>
        )
    }

export default SOS;
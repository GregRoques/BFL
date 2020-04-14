import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import sleepBody from "../BodyText/sos";

const SOS = () => {
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("sos", "The Science<br/>of Sleep", sleepBody) }
            </div>
        )
    }

export default SOS;
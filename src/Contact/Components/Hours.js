import React from "react";
import cssHours from "./CSS/hours.module.css";

const Hours = props => {
    const dayNum = (new Date()).getDay();
    return (
        <div className={ cssHours.hoursGrid }>
            <div className= { cssHours.seperator}>
                <div className={ cssHours.header }>
                    <div className={cssHours.contactBig}>Call Us</div>
                    <div className={cssHours.contactSmall}>Contact</div>
                </div>
                <div className={ cssHours.connectGrid }>
                    <div className={ cssHours.hitEmWithTheFlex}>
                        <a href="tel:504-305-4430">
                            <img alt="(504) 305-4430" className={ cssHours.connectContact } src={"/myImages/phone.png"}/>
                            <br/>
                            (504) 305-4430
                        </a>
                    </div>
                    <div className={ cssHours.hitEmWithTheFlex}>
                        <a href="mailto:jason@nolabeds.com?subject=Question%20for%20Jason">
                            <img alt="jason@nolabeds.com" className={ cssHours.connectContact } src="/myImages/email.png"/>
                            <br/>
                            Jason@NolaBeds.com
                        </a>
                    </div>
                </div>
                <a href="https://www.facebook.com/Beds4Less" target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" className={ cssHours.connectSocial } src="/myImages/FacebookBox.png"/>
                </a>
                <a href="https://www.yelp.com/biz/beds-4-less-kenner" target="_blank" rel="noopener noreferrer">
                    <img alt="Yelp" className={ cssHours.connectSocial } src="/myImages/yelp.png"/>
                </a>

            </div>
            <div className={ cssHours.weekDays }>
                <div className={ cssHours.header }>
                    Hours
                </div>
                <div className= { dayNum > 1 ? cssHours.highlightDate : null } >
                   <div>Tuesday – Saturday <br/> 10 a.m. – 6 p.m.</div>
    
                </div> <br/>
                <div className= { dayNum === 1 || dayNum === 0 ? cssHours.highlightDate : null }>
                    <div>Saturday – Sunday<br/> Closed</div>
                </div>
            </div>
        </div>
    );
};

export default Hours;

/**
 * @file PopUp.js
 * @description Timed pop-up banner component. Slides in after a 1-second
 * delay, stays visible for 10 seconds, then auto-dismisses. Can also be
 * closed manually by clicking the "X" button.
 */

import React, { Component } from "react";
import covidCSS from "./PopUp.module.css";

/**
 * @component CoronaUpdate
 * @description Class component that displays a fixed-position promotional
 * or informational pop-up image. Automatically shows after 1 second and
 * hides after 10 seconds.
 */
class CoronaUpdate extends Component {
    /** @type {{ isPopUpOpen: boolean, isCaronaOpen: boolean }} */
    state = {
        isPopUpOpen: false
    }

    /**
     * @description Starts the auto-show timer (1s delay) and schedules
     * auto-dismiss after 10 additional seconds.
     */
    componentDidMount () {
        setTimeout(() => {
            this.popUpToggle(true);
            setTimeout(() => {
                this.popUpToggle(false);
            }, 10000);
        }, 1000);
    }

    /**
     * @description Toggles the pop-up visibility.
     * @param {boolean} isToggled - True to show, false to hide.
     */
    popUpToggle = isToggled => {
        this.setState({
            isCaronaOpen: isToggled
        });
    }

    render () {
        return this.state.isCaronaOpen ? (
            <div className={covidCSS.frame}>
                <div className={covidCSS.closeButton} onClick={() => this.popUpToggle(false)}>X</div>
                <img alt="Pop Up Message" className={covidCSS.picture} src="/corona.jpg"/>
            </div>
        ) : null;
    }
}

export default CoronaUpdate;

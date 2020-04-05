import React, { Component } from "react";
import covidCSS from "./PopUp.module.css";

class CoronaUpdate extends Component {
    state = {
        isPopUpOpen: false
    }

    componentDidMount () {
        setTimeout(() => {
            this.popUpToggle(true);
            setTimeout(() => {
                this.popUpToggle(false);
            }, 10000);
        }, 1000);
    }

    popUpToggle = isToggled => {
        this.setState({
            isCaronaOpen: isToggled
        });
    }

    render () {
        return this.state.isCaronaOpen ? (
            <div className={covidCSS.frame}>
                <div className={covidCSS.closeButton} onClick={() => this.popUpToggle(false)}>X</div>
                <img className={covidCSS.picture} src="/corona.jpg"/>
            </div>
        ) : null;
    }
}

export default CoronaUpdate;

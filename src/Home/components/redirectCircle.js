import React, { Component } from "react";
import cssCircles from "./CSS/circles.module.css";
import { css } from "emotion";
import { Redirect } from "react-router-dom";

const categories = ["About", "Shop", "Science of Sleep"];

const disappearingClass = css`
    opacity: 0;
    transition: 1s ;
    transform: scale(0);
`;

class Circles extends Component{
    state={
        fadeOut: [false, false, false],
        isRedirect: false,
    }

    displayCircles = ({ forwardAddress, titleIndex }) => {
        const nextPage = forwardAddress === "Science of Sleep" 
            ? "sos" 
                : forwardAddress === "About" 
                    ? "about_closeup"
                        :  forwardAddress.toLowerCase();
        const fadeAway = titleIndex;
        const backgroundCircle = css`
        background-image: url("/about/${nextPage}.jpg");`;
        const cssJoin = [backgroundCircle, cssCircles.innerCircle];

        return (
            <div className={this.state.fadeOut[titleIndex] ? disappearingClass : null } >
                <div className={cssJoin.join(" ")} onClick={() => this.circleRedirect(nextPage, fadeAway) }>
                    <div className={cssCircles.circleTextBackground}>{categories[titleIndex] }</div>
                </div>
            </div>
        );
    }

    circleRedirect = (nextPage, fadeAway) => {
        const array = this.state.fadeOut;
        array[fadeAway] = true;
        this.setState({
            fadeOut: array
        });
        setTimeout(() => {
            this.setState({
                isRedirect: true,
                redirectLink: `/${nextPage}`
            });
        }, 800);
    }

    render(){
        return(
            <div>
                { this.state.isRedirect && <Redirect push to={this.state.redirectLink}/> }
                <div className={cssCircles.mobileHomeCircleContainer}>
                    <div className={cssCircles.circlesJustify}>
                        {categories.map((aCircle, i) => {
                            return (
                                <this.displayCircles
                                    forwardAddress= { aCircle }
                                    titleIndex={ i }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

export default Circles;
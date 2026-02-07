/**
 * @file redirectCircle.js
 * @description Animated navigation circles on the home page. Each circle
 * represents an FAQ category and redirects to its page on click with a
 * scale-down fade-out animation.
 */

import React, { Component } from "react";
import cssCircles from "./CSS/circles.module.css";
import { Redirect } from "react-router-dom";

/** @constant {string[]} categories - Display labels for the three FAQ circles. */
const categories = ["Our Products", "Shopping Guide", "Science of Sleep"];

/** @description Inline style applied when a circle is fading out. */
const disappearingStyle = {
    opacity: 0,
    transition: "1s",
    transform: "scale(0)",
};

/**
 * @component Circles
 * @description Renders navigation circles on the home page. Each circle
 * links to an FAQ category. Clicking a circle triggers a fade-out
 * animation before redirecting to the target page.
 */
class Circles extends Component {
    state = {
        fadeOut: [false, false, false],
        isRedirect: false,
    };

    /**
     * @description Renders a single navigation circle with a dynamic
     * background image and a click handler for animated redirection.
     * @param {Object} props
     * @param {string} props.forwardAddress - Category name to derive the target page.
     * @param {number} props.titleIndex     - Index into the categories array.
     * @returns {JSX.Element}
     */
    displayCircles = ({ forwardAddress, titleIndex }) => {
        const nextPage = forwardAddress === "Science of Sleep"
            ? "sos"
            : forwardAddress === "Our Products"
                ? "about"
                : "shop";

        const circleStyle = {
            backgroundImage: `url("/faq_background_images/${nextPage}.jpg")`,
        };

        return (
            <div style={this.state.fadeOut[titleIndex] ? disappearingStyle : undefined}>
                <div
                    className={cssCircles.innerCircle}
                    style={circleStyle}
                    onClick={() => this.circleRedirect(nextPage, titleIndex)}
                >
                    <div className={cssCircles.circleTextBackground}>{categories[titleIndex]}</div>
                </div>
            </div>
        );
    };

    /**
     * @description Triggers fade-out on the clicked circle, then redirects
     * after an 800ms delay.
     * @param {string} nextPage  - URL path segment to redirect to.
     * @param {number} fadeAway  - Index of the circle to fade.
     */
    circleRedirect = (nextPage, fadeAway) => {
        const array = this.state.fadeOut;
        array[fadeAway] = true;
        this.setState({ fadeOut: array });
        setTimeout(() => {
            this.setState({
                isRedirect: true,
                redirectLink: `/${nextPage}`,
            });
        }, 800);
    };

    render() {
        return (
            <div>
                {this.state.isRedirect && <Redirect push to={this.state.redirectLink} />}
                <div className={cssCircles.mobileHomeCircleContainer}>
                    <div className={cssCircles.circlesJustify}>
                        {categories.map((aCircle, i) => (
                            <this.displayCircles
                                key={aCircle}
                                forwardAddress={aCircle}
                                titleIndex={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Circles;

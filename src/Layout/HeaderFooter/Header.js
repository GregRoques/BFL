/**
 * @file Header.js
 * @description Fixed top header bar containing the B4L logo (links to Home)
 * and a hamburger menu toggle that opens/closes the navigation Modal.
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import cssHeader from "./CSS/header.module.css";
import Modal from "./Modal";

/** @constant {boolean} isiPad - True when the user agent indicates an iPad. */
const isiPad = navigator.userAgent.match(/iPad/i) !== null;

/**
 * @component Header
 * @description Class component rendering a fixed header with the site logo
 * and a hamburger/close button. Manages modal open/close state and a
 * fade-out animation before the modal closes.
 */
class Header extends Component {
    /**
     * @type {{ isResized: boolean, isOpen: boolean, isFadeOut: boolean }}
     */
    state = {
        isResized: true,
        isOpen: false,
        isFadeOut: false,
    };

    /**
     * @description Attaches a resize listener and sets the initial
     * `isResized` flag based on viewport width and iPad detection.
     */
    componentDidMount () {
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 || (window.innerWidth > 767 && window.innerWidth < 1025 && (window.innerHeight > window.innerWidth) && isiPad)
            ? this.setState({ isResized: false })
            : this.setState({ isResized: true });
    };

    /**
     * @description Toggles the navigation modal. When called without
     * arguments it flips the open state immediately. When called with a
     * truthy value it triggers a 1.5-second fade-out before closing.
     * @param {string} [props] - Pass any truthy value (e.g. "close") to
     *   trigger the fade-out animation before toggling.
     */
    modalToggler = (props) => {
        if (!props) {
            const inverse = this.state.isOpen;
            this.setState({
                isOpen: !inverse,
                isFadeOut: false
            });
        } else {
            this.setState({ isFadeOut: true });
            setTimeout(() => {
                this.modalToggler();
            }, 1500);
        }
    }

    render () {
        return (
            <div>
                <Modal
                    isOpen={ this.state.isOpen }
                    close={ this.modalToggler}
                    isFadeOut = {this.state.isFadeOut}
                />
                <div className={ cssHeader.headerPosition}>
                    <div className={ cssHeader.headerContainer }>
                        <Link to="/"><img alt="B4L Logo" className={ cssHeader.B4Llogo } src="/logos/smallLogo.png"/></Link>
                            <div className= { cssHeader.headerContainerSmallText}>
                                {!this.state.isOpen
                                    ? <img alt="hamburger" className={cssHeader.imageContain} src="/myImages/hamburger.png" onClick={() => this.modalToggler()}/>
                                    : <span className={cssHeader.imageContain} onClick={() => this.modalToggler("close")}>X</span>
                                }
                            </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Header;

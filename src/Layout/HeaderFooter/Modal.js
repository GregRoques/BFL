/**
 * @file Modal.js
 * @description Full-screen navigation modal that slides down from the header.
 * Contains links to all site pages plus contact info and social links.
 */

import React from "react";
import { Link } from "react-router-dom";
import { mapSelector } from "../../Functions/MapSelector";
import cssModal from "./CSS/modal.module.css";
import {
    BUSINESS_PHONE_FORMATTED,
    BUSINESS_PHONE_LINK,
    BUSINESS_ADDRESS_FULL,
    BUSINESS_EMAIL,
    BUSINESS_EMAIL_LINK,
    SOCIAL_LINKS
} from "../../Aux/businessInfo";

/**
 * @component Modal
 * @description Renders a full-screen overlay with navigation links, contact
 * information, and social media icons. Animates open/close with CSS keyframes.
 * @param {Object} props
 * @param {boolean} props.isOpen    - Whether the modal is visible.
 * @param {Function} props.close    - Callback to close the modal (may trigger fade-out).
 * @param {boolean} props.isFadeOut - When true, plays the closing animation.
 * @returns {JSX.Element|null} The modal overlay or null when closed.
 */
const Modal = ({ isOpen, close, isFadeOut }) => {
    return isOpen ? (
        <div className={!isFadeOut ? cssModal.modalPositionOpen : cssModal.modalPositionClose}>
            <div className={!isFadeOut ? cssModal.modalContainer : cssModal.modalDisappear}>
                <span className={cssModal.subService} onClick={() => close("close")}>
                    <Link to="/">Home</Link>
                </span>
                <span className={cssModal.subService} onClick={() => close("/about")}>
                    <Link to="/about">Our Products</Link>
                </span>
                <span className={cssModal.subService} onClick={() => close("/shop")}>
                    <Link to="/shop">Shopping Guide</Link>
                </span>
                <span className={cssModal.subService} onClick={() => close("/sos")}>
                    <Link to="/sos">The Science of Sleep</Link>
                </span>
                <span className={cssModal.subService} onClick={() => close("/contact")}>
                    <Link to="/contact">Contact</Link>
                </span>

                <div className={cssModal.modalContact}>
                    <div>
                        <a href={BUSINESS_PHONE_LINK}>
                            <b>{BUSINESS_PHONE_FORMATTED}</b>
                        </a>
                    </div>
                    <div title="Open Map" onClick={() => mapSelector()}>
                        <span role="button" tabIndex="0" className={cssModal.mapLink}>{BUSINESS_ADDRESS_FULL}</span>
                    </div>
                    <div>
                        <a href={BUSINESS_EMAIL_LINK}>{BUSINESS_EMAIL}</a>
                    </div>
                </div>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" className={cssModal.connectSocial} src="/myImages/whitefb.png"/>
                </a>
                <a href={SOCIAL_LINKS.yelp} target="_blank" rel="noopener noreferrer">
                    <img alt="Yelp" className={cssModal.connectSocial} src="/myImages/whiteyelp.png"/>
                </a>
            </div>
        </div>
    ) : null;
};

export default Modal;

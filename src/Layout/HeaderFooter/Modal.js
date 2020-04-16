import React from "react";
import { Link } from "react-router-dom";
import { mapSelector } from "../../Functions/MapSelector";
import cssModal from "./CSS/modal.module.css";

const Modal = ({ isOpen, close, isFadeOut }) => {
    return isOpen ? (
        <div className = { !isFadeOut ? cssModal.modalPositionOpen : cssModal.modalPositionClose }>
            <div className = { !isFadeOut ? cssModal.modalContainer : cssModal.modalDisappear}>
                <span className={ cssModal.subService  } onClick={ () => close("close")}>
                    <Link to= "/">Home</Link>
                </span>
                <span className={ cssModal.subService  } onClick={ () => close("/about")}>
                    <Link to= "/about">Our Products</Link>
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/shop")} >
                    <Link to= "/shop">Shopping Guide</Link>
                </span>
                <span className={ cssModal.subService } onClick={ () => close("/sos") } >
                    <Link to= "/sos">The Science of Sleep</Link>
                </span>
                <span className={ cssModal.subService} onClick={ () => close("/contact") }t>
                    <Link to= "/contact">Contact</Link>
                </span>
                
                <div className = {cssModal.modalContact }>
                    <div><a href="tel:504-305-4430">
                        <b>(504) 305-4430</b>
                    </a></div>

                    <div title="Open Map" onClick ={() => mapSelector()} >
                        <a>3729 Williams Blvd • Kenner</a>
                    </div>
                        
                    <div><a href="mailto:jason@nolabeds.com?subject=New%20Question%20for%20Beds%204%20Less">
                        Jason@nolabeds.com
                    </a></div>
                </div>
                <a href="https://www.facebook.com/Beds4Less" target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" className={ cssModal.connectSocial } src="/myImages/whitefb.png"/>
                </a>
                <a href="https://www.yelp.com/biz/beds-4-less-kenner" target="_blank" rel="noopener noreferrer">
                    <img alt="Yelp" className={ cssModal.connectSocial } src="/myImages/whiteyelp.png"/>
                </a>
            </div>
        </div>
    ) : null;
};

export default Modal;


import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import shopBody from "../BodyText/shoppingGuide";

const Shop = () => {
    window.scrollTo(0, 0);
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("shop", "Shopping Guide", shopBody) }
            </div>
        )
    }

export default Shop;
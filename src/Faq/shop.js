import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import shopBody from "../BodyText/shoppingGuide";

const Shop = () => {
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("shop", "Shopping Guide", shopBody) }
            </div>
        )
    }

export default Shop;
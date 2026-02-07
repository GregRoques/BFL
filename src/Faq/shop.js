/**
 * @file Faq/shop.js
 * @description "Shopping Guide" FAQ page. Uses the shared bodyMap renderer
 * with the shopping guide content data.
 */

import React from "react";
import cssFaq from "./components/faq.module.css";
import bodyMap from "./components/bodyMap";
import shopBody from "../BodyText/shoppingGuide";

/**
 * @component Shop
 * @description Renders the "Shopping Guide" informational page. Scrolls to
 * the top on mount and delegates rendering to bodyMap.
 * @returns {JSX.Element} The Shopping Guide page.
 */
const Shop = () => {
    window.scrollTo(0, 0);
        return (
            <div className={cssFaq.topBody}>
                { bodyMap("shop", "Shopping Guide", shopBody) }
            </div>
        )
    }

export default Shop;
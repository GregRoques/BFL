/**
 * @file Home.js
 * @description Landing page showcasing the value proposition, an intro video,
 * financing options, customer reviews, navigation circles, and a
 * "Louisiana Proud" banner.
 */

import React from "react";
import cssHome from "./home.module.css";
import SnapFinance from "./components/snapGrid";
import Yelp from "./components/YelpReviews";
import Circles from "./components/redirectCircle";

/**
 * @component Home
 * @description Renders the main landing page. Scrolls to the top on mount.
 * Composes SnapFinance, YelpReviews, and Circles sub-components.
 * @returns {JSX.Element} The Home page.
 */
const Home = () => {

    window.scrollTo(0, 0);
    return (
        <div className={cssHome.homeBody}>
            <div className={cssHome.homeHeader}>
                Name Brand Mattresses <br/>
                Up to <span>80% Off</span> Retail Pricing
            </div>
            <div className={cssHome.homeSubHeader}>
                Beds 4 Less specializes in selling top quality bedding from major bedding manufacturers at a fraction of the retail cost. Our mattresses and box springs are overstocks, close-outs, freight returns, and mismatched products.
            </div>
            <iframe title="Beds 4 Less Introduction Video" className={cssHome.homeVid} src="https://www.youtube.com/embed/eLzLlBRnOts?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <SnapFinance/>
            <Yelp/>
            <Circles/>
            <div className={cssHome.LAproud} style={{ backgroundImage: 'url("/louisiana.png")' }}>
                <div className={cssHome.LaHeader}>
                    Louisiana Proud
                </div>
                <div className={cssHome.LaSubHeader}>
                    Beds 4 Less is a locally owned and operated business. We are proud to serve the New Orleans Metropolitan Area.
                </div>
            </div>
        </div>
    )

}

export default Home;
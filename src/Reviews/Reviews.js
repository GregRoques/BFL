/**
 * @file Reviews.js
 * @description "Thank You" page shown after a purchase. Provides links for
 * customers to leave reviews on Facebook, Yelp, and Google, plus social
 * sharing buttons (email and Facebook).
 */

import React from "react";
import cssReviews from "./reviews.module.css";

/**
 * @component Reviews
 * @description Renders a thank-you message, review platform buttons
 * (Facebook, Yelp, Google), a separator, and social sharing links.
 * @returns {JSX.Element} The Reviews / Thank You page.
 */
const Reviews = props => {
    return (
        <div>
            <div className={cssReviews.thankYou}>
                Thank You!
            </div>
            <div className={cssReviews.thankYouParagraph}>
                We are very grateful to have you as a cutomer.<br/>
                Please write us a review using one of the links below and let future visitors know what you thought of your new mattress.
            </div>
            <div>
                <span >
                    <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fbeds4less%2Freviews%2F" target="_blank" rel="noopener noreferrer">
                        <img className={ cssReviews.fbReview } src="/reviewImages/fbReview.jpg" alt="Facebook Review"/>
                    </a>
                </span>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.yelp.com/writeareview/biz/Fr7pQ3blnqbbNxKVUGNv0g?return_url=%2Fbiz%2FFr7pQ3blnqbbNxKVUGNv0g&source=biz_details_war_button" >
                        <img className={ cssReviews.yelpReview } src="/reviewImages/yelpReview.png" alt="Yelp Review"/>
                    </a>
                </span>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com" >
                        <img className={ cssReviews.yelpReview } src="/reviewImages/gglReview.png" alt="Google Review"/>
                    </a>
                </span>
            </div>
            <hr className={ cssReviews.reviewSeperator } align="center" width="65%"/>
            <div className={cssReviews.withFriendsHeader}>
                Share with Friends
            </div>
            <div>
                <span>
                    <a href="mailto:?subject=Check%20Out%20Beds%204%20Less&body=I%20just%20got%20a%20great%20new%20mattress%20from%20Beds%204%20Less.%20Check%20them%20out:%20https://www.nolabeds.com">
                        <img className={ cssReviews.reviewSocialEmail} src="/reviewImages/emailShare.png" alt="Email Icon"/>
                    </a>
                </span>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://www.nolabeds.com">
                        <img className={ cssReviews.reviewSocialFacebook } src="/reviewImages/fbShare.png" alt="Facebook Logo"/>
                    </a>
                </span>
            </div>
            <div className={cssReviews.mobileSpace}><p> blank </p></div>
            <div className={cssReviews.mainPageBottom}/>
        </div>
    );
};


export default Reviews;

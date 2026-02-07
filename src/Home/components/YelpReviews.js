/**
 * @file YelpReviews.js
 * @description Rotating customer review carousel displayed on the home page.
 * Cycles through Yelp and Facebook testimonials every 10 seconds.
 */

import React, { Component } from 'react';
import cssYelp from "./CSS/yelpReviews.module.css";
import yelp from "../../BodyText/yelp";

/**
 * @component YelpReviews
 * @description Class component that randomly selects and displays a customer
 * review. A new review fades in every 10 seconds via a recursive timeout.
 */
class YelpReviews extends Component {
    /** @type {{ currNum: number }} */
    state={
        currNum: Math.round(Math.random() * (yelp.length - 1))
    }

    componentDidMount(){
        this.setCounter();
    }

    /**
     * @description Recursively sets a 10-second timeout that picks a new
     * random review index and updates state.
     */
    setCounter = () =>{
        setTimeout(() =>{
                this.setState({
                    currNum: Math.round(Math.random() * (yelp.length -1))
                });
                this.setCounter();
            }, 10000)
    }

    render(){
        const {currNum} = this.state;
        return(
            <div className={cssYelp.yelpBody}>
                <div className={cssYelp.yelpHeader}>
                    What Our Customers<br/>Are Saying
                </div>
                <div key={currNum} className={cssYelp.enterCustomer}>
                    <div>
                        <span>"</span>{yelp[currNum].review}<span>"</span>
                    </div>
                    <div>
                        <a className={cssYelp.customer} href={yelp[currNum].link} target="_blank" rel="noopener noreferrer">
                            –{yelp[currNum].name}, <i>{yelp[currNum].link.includes("www.yelp.com") ? "Yelp" : "Facebook"}</i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default YelpReviews;
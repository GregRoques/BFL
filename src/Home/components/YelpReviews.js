import React, { Component } from 'react';
import cssYelp from "./CSS/yelpReviews.module.css";
import yelp from "../../BodyText/yelp";

class YelpReviews extends Component {
    state={
        currNum: Math.round(Math.random() * (yelp.length - 1))
    }

    componentDidMount(){
        this.setCounter();
    }

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
                        <span>“</span>{yelp[currNum].review}<span>”</span>
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
import React, { Component } from "react";
import cssHome from "./home.module.css";

class Home extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    // (Math.round(Math.random() * array.length))  
    render () {
        return (
            <div className={cssHome.homeBody}>
                <div className={cssHome.homeHeader}>
                    Famous Name Brand Mattresses <br/>
                    Up to <span>80% Off</span> Retail Pricing
                </div>
                <div className={cssHome.homeSubHeader}>
                    Beds 4 Less specializes in selling top quality bedding from major bedding manufacturers at a fraction of the retail cost. Our mattresses and box springs are overstocks, close-outs, freight returns, and mismatched products. 
                </div>
                <iframe className={cssHome.homeVid} src="https://www.youtube.com/embed/eLzLlBRnOts?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className={cssHome.LAproud}>
                    <div className={cssHome.LaHeader}>
                        Louisiana Proud
                    </div>
                    <div className={cssHome.homeSubHeader}>
                        Beds 4 Less is a locally owned and operated business. We are proud to serve the New Orleans Metropolitan Area. 
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
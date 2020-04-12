import React from "react";
import ReactHtmlParser from "react-html-parser";
import cssFaq from "./faq.module.css";
import { css } from "emotion";

const bodyMap = (image, pageHeader, currArray) => {
    
    const headerImage = css`
        background-image: url(/about/${image}.jpg)
    `
        return (
            <div className={cssFaq.topBody}>
                <div className={cssFaq.topContainer}>
                    <div className= {cssFaq.topImageText }>
                        {pageHeader}
                    </div>
                    <div className={ [headerImage, cssFaq.topImage].join(" ") }></div>
                </div>
                <div>
                    { currArray.map(info=>{
                        return(
                            <div>
                                {info.header}
                                {
                                   info.body.map(subInfo =>{
                                            return (
                                                <div>
                                                    {info.body.length > 1 ? "•" : null } {ReactHtmlParser(subInfo)}
                                                </div>
                                            )
                                        })     
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

export default bodyMap;
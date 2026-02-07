/**
 * @file bodyMap.js
 * @description Shared renderer for all FAQ-style pages. Accepts a background
 * image key, a page title, and an array of section objects, then outputs a
 * styled page with a hero image, title, and expandable body sections.
 */

import React from "react";
import cssFaq from "./faq.module.css";

/**
 * @description Renders an FAQ page section with a dynamic header image,
 * a page title, and a list of collapsible Q&A entries.
 * @param {string} image       - Image filename (without extension) used for the header background.
 * @param {string} pageHeader  - HTML string displayed as the page title.
 * @param {Array<{header: string, body: string[]}>} currArray - FAQ sections to render.
 * @returns {JSX.Element} The FAQ page layout.
 */
const bodyMap = (image, pageHeader, currArray) => {
    const headerStyle = {
        backgroundImage: `url(/faq_background_images/${image}.jpg)`,
    };

    return (
        <div className={cssFaq.faqFadeIn}>
            <div className={cssFaq.topContainer}>
                <div className={cssFaq.topImageText} dangerouslySetInnerHTML={{ __html: pageHeader }} />
                <div className={cssFaq.topImage} style={headerStyle}></div>
            </div>
            <div>
                {currArray.map((info, index) => (
                    <div key={`section-${index}`} className={cssFaq.faqTextContainer}>
                        <div className={cssFaq.faqTextHeader}>
                            {info.header}
                        </div>
                        {info.body.map((subInfo, subIndex) => (
                            <div key={`body-${index}-${subIndex}`} className={cssFaq.faqBodyText}>
                                {info.body.length > 1 ? "• " : null}
                                <span dangerouslySetInnerHTML={{ __html: subInfo }} />
                                <br className={cssFaq.breakClass}/>
                                <br className={cssFaq.breakClass}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default bodyMap;

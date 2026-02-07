/**
 * @file MapSelector.js
 * @description Utility that opens the store location in the appropriate
 * mapping application based on the user's device (Apple Maps vs Google Maps).
 */

import { GOOGLE_MAPS_URL, APPLE_MAPS_URL } from "../Aux/businessInfo";

/**
 * @function mapSelector
 * @description Detects whether the visitor is on an Apple device (iPhone,
 * iPad, iPod) and opens the corresponding map URL in a new window.
 */
export const mapSelector = () => {
    const isAppleDevice =
        navigator.platform.indexOf("iPhone") !== -1 ||
        navigator.platform.indexOf("iPad") !== -1 ||
        navigator.platform.indexOf("iPod") !== -1;

    window.open(isAppleDevice ? APPLE_MAPS_URL : GOOGLE_MAPS_URL);
};

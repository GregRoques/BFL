/**
 * @file timeUtils.js
 * @description Utility functions for determining the current day and
 * whether the business is open or closed. All logic is driven by the
 * BUSINESS_HOURS configuration in businessInfo.js.
 */

import { BUSINESS_HOURS, DAY_NAMES } from "../Aux/businessInfo";

/**
 * @function getDayNumber
 * @description Returns the current day of the week as a number.
 * @returns {number} 0 (Sunday) through 6 (Saturday).
 */
export const getDayNumber = () => new Date().getDay();

/**
 * @function getTodayName
 * @description Returns a three-letter abbreviation for today's day.
 * @returns {string} e.g. "Mon", "Tue", etc.
 */
export const getTodayName = () => DAY_NAMES[getDayNumber()];

/**
 * @function isOpenToday
 * @description Checks whether the store is open on the current day.
 * @returns {boolean} True if today is an open day.
 */
export const isOpenToday = () => {
    const dayNum = getDayNumber();
    return BUSINESS_HOURS.openDays.includes(dayNum);
};

/**
 * @function isClosedToday
 * @description Checks whether the store is closed on the current day.
 * @returns {boolean} True if today is a closed day.
 */
export const isClosedToday = () => {
    const dayNum = getDayNumber();
    return BUSINESS_HOURS.closedDays.includes(dayNum);
};

/**
 * @function getTodayStatus
 * @description Returns a display string for today's business hours.
 * @returns {string} e.g. "10a – 6p" or "Closed".
 */
export const getTodayStatus = () => {
    return isOpenToday()
        ? `${BUSINESS_HOURS.open.start} – ${BUSINESS_HOURS.open.end}`
        : BUSINESS_HOURS.closedDisplay;
};

/**
 * @function isDayOpen
 * @description Checks whether a given day number is an open day.
 * @param {number} dayNum - Day of the week (0 = Sunday).
 * @returns {boolean} True if the day is in the openDays list.
 */
export const isDayOpen = (dayNum) => BUSINESS_HOURS.openDays.includes(dayNum);

/**
 * @function isDayClosed
 * @description Checks whether a given day number is a closed day.
 * @param {number} dayNum - Day of the week (0 = Sunday).
 * @returns {boolean} True if the day is in the closedDays list.
 */
export const isDayClosed = (dayNum) => BUSINESS_HOURS.closedDays.includes(dayNum);

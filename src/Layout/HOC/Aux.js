/**
 * @file Aux.js
 * @description Higher-order wrapper component that renders its children
 * without adding extra DOM nodes. Acts as a lightweight fragment alternative.
 */

/**
 * @function aux
 * @description Passes through child elements without wrapping markup.
 * @param {Object} props - React props.
 * @param {React.ReactNode} props.children - Child elements to render.
 * @returns {React.ReactNode} The children as-is.
 */
const aux = (props) => (props.children);

export default aux;

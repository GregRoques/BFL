/**
 * @file Layout.js
 * @description Shared page layout wrapper that renders the Header above
 * the routed content and conditionally includes the Footer (hidden on the
 * Contact page, which has its own footer/copyright).
 */

import React from 'react';
import Aux from './Aux';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

/**
 * @component Layout
 * @description Wraps every page with a persistent Header and an optional
 * Footer. The Footer is suppressed on the /contact route.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content rendered between
 *   the Header and Footer.
 * @returns {JSX.Element} The page shell.
 */
const Layout = ({ children }) => {
    const isContactPage = window.location.pathname === '/contact';

    return (
        <div>
            <Header />
            <Aux>{children}</Aux>
            {!isContactPage && <Footer />}
        </div>
    );
};

export default Layout;

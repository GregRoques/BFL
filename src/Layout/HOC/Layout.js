import React from 'react';
import Aux from './Aux';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import PopUp from '../modalPopUp/PopUp';

const Layout = props => {
  const contact = window.location.pathname === '/contact';

  return (
    <div>
      <Header />
      <Aux>
        { props.children }
      </Aux>
      <PopUp />
      { contact ? null : <Footer /> }
    </div>
  );
};

export default Layout;

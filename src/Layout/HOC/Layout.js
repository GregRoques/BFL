import React from 'react';
import Aux from './Aux';
import cssFoot from "../HeaderFooter/CSS/footer.module.css"
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
      <div className={cssFoot.mobileSpace}><p> blank </p></div>
      <div className={cssFoot.mainPageBottom}/>
      { contact ? null : <Footer /> }
    </div>
  );
};

export default Layout;

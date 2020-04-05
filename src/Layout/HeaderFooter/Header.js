import React, { Component } from "react";
import { Link } from "react-router-dom";
import cssHeader from "./CSS/header.module.css";
import { ModalMobile, ModalDesktop } from "./Modal";

const isiPad = navigator.userAgent.match(/iPad/i) !== null;

class Header extends Component {
    state = {
        isResized: true,
        isOpen: false,
        isFadeOut: false,
    };

    componentDidMount () {
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 || (window.innerWidth > 767 && window.innerWidth < 1025 && (window.innerHeight > window.innerWidth) && isiPad)
            ? this.setState({ isResized: false })
            : this.setState({ isResized: true });
    };


    modalToggler = (props) => {
        if (!props) {
            const inverse = this.state.isOpen;
            this.setState({
                isOpen: !inverse,
                isFadeOut: false
            });
        } else {
            this.setState({ isFadeOut: true });
            setTimeout(() => {
                this.modalTogglerMobile();
            }, 1500);
        }
    }

    render () {
        return (
            <div>
                <ModalMobile
                    isOpen={ this.state.isOpen }
                    close={ this.modalTogglerMobile }
                    isFadeOut = {this.state.isFadeOut}
                />
                <ModalDesktop
                    isOpen={ this.state.isOpen }
                    close={ this.modalTogglerMobile }
                    isFadeOut = {this.state.isFadeOut}
                />
                <div className={ cssHeader.headerPosition}>
                    <div className={ cssHeader.headerContainer }>
                        <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.B4Llogo } src="/logos/smallLogo.png"/></Link>
                        { !this.state.isResized
                            ? <div className= { cssHeader.headerContainerSmallText}>
                                {!this.state.isOpen
                                    ? <img alt="hamburger" className={cssHeader.imageContain} src="/myImages/hamburger.png" onClick={() => this.modalToggler()}/>
                                    : <span className={cssHeader.imageContain} onClick={() => this.modalToggler("close")}>X</span>
                                }
                            </div>
                            : <div className= { cssHeader.headerContainerSmallText}>
                                <img alt="hamburger" className={cssHeader.imageContain} src="/myImages/hamburger.png" onClick={() => this.modalToggler(this.state.isOpen ? "close" : null)}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
};


export default Header;

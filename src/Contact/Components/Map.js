import React from "react";
import cssMap from "./CSS/map.module.css";

const map = () => {
    return (
        <div >
            <div className={cssMap.header}>
                Directions
            </div>
            <iframe title="3729 Williams Blvd, Kenner" className={cssMap.mapBody} src="https://www.google.com/maps/place/Beds+4+Less/@30.0244693,-90.2392237,15z/data=!4m2!3m1!1s0x0:0xb1330ab9517646aa?sa=X&ved=2ahUKEwj-gd7WoNLoAhUrh-AKHcd9Ck4Q_BIwEnoECBkQCA"></iframe>
        </div>
    );
};

export default map;

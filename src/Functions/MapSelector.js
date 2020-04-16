export const mapSelector = props => {
    if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPad") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
        window.open(`maps://www.google.com/maps/place/Beds+4+Less/@30.0244693,-90.2414124,17z/data=!3m1!4b1!4m5!3m4!1s0x8620b6deb85da38d:0xb1330ab9517646aa!8m2!3d30.0244693!4d-90.2392237`);
    } else {
        window.open(`https://www.google.com/maps/place/Beds+4+Less/@30.0244693,-90.2414124,17z/data=!3m1!4b1!4m5!3m4!1s0x8620b6deb85da38d:0xb1330ab9517646aa!8m2!3d30.0244693!4d-90.2392237"`);
    }
};
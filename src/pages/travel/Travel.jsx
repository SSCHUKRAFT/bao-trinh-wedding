import React from 'react';
import './travel.css';
import Background from '../../assets/page-backgrounds/travel-bg.jpg';
import { BsAirplane } from "react-icons/bs";
import { MdOutlineHotel } from "react-icons/md"
import TravelLocation from "../../components/TravelLocation";
import RocAirport from "../../assets/map-images/roc.png";
import BufAirport from "../../assets/map-images/buf.png";
import Holiday from "../../assets/map-images/holiday.png";
import Hyatt from "../../assets/map-images/hyatt.png";

const Travel = () => {
  const bgStyles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    scale: '1',
    position: 'absolute',
  };
  
  return (
    <div className="travel">
      <div style={bgStyles}>
        <div className="travel-title">Travel</div>
        <div className="airport">
          <BsAirplane size={32} style={{ transform: 'rotate(45deg)' }}/>
          <div className="airport-title-txt">Airports</div>
          <div className="airports">
            <TravelLocation 
              name="Greater Rochester<br>International Airport"
              website="https://rocairport.com/"
              map="https://www.google.com/maps/place/Greater+Rochester+International+Airport/@43.122721,-77.6702183,15.5z/data=!4m6!3m5!1s0x89d14cb73768decb:0xb43d4e6684963fa9!8m2!3d43.1225229!4d-77.6665722!16zL20vMDFzem4z"
              image={RocAirport}
            />
            <TravelLocation 
              name="Buffalo Niagara<br>International Airport"
              website="https://www.buffaloairport.com/"
              map="https://www.google.com/maps/place/Buffalo+Niagara+International+Airport/@42.9396584,-78.7359829,15.25z/data=!4m6!3m5!1s0x89d374c8ccbe865d:0xc0e27200bdc16a88!8m2!3d42.9397059!4d-78.7295067!16zL20vMDFxaDBy" 
              image={BufAirport}
            />
          </div>
        </div>
        <div className="hotel">
          <MdOutlineHotel size={32} />
          <div className="hotel-title-txt">Hotels</div>
          <div className="hotels">
            <TravelLocation 
              name="Holiday Inn Rochester" 
              website="https://www.ihg.com/holidayinn/hotels/us/en/rochester/rocny/hoteldetail"
              map="https://www.google.com/maps/place/Holiday+Inn+Rochester+NY+-+Downtown,+an+IHG+Hotel/@43.1567754,-77.6149868,17z/data=!4m21!1m11!3m10!1s0x89d6b455c52d195b:0xcce6bf9073d40afd!2sHoliday+Inn+Rochester+NY+-+Downtown,+an+IHG+Hotel!5m2!4m1!1i2!8m2!3d43.1567715!4d-77.6127981!10e7!16s%2Fg%2F11b778b867!3m8!1s0x89d6b455c52d195b:0xcce6bf9073d40afd!5m2!4m1!1i2!8m2!3d43.1567715!4d-77.6127981!16s%2Fg%2F11b778b867"
              image={Holiday}
              phone="(585) 355-4811"
            />
            <TravelLocation
              name="Hyatt Regency Rochester" 
              website="https://www.hyatt.com/en-US/hotel/new-york/hyatt-regency-rochester/roche?src=corp_lclb_gmb_seo_roche"
              map="https://www.google.com/maps/place/Hyatt+Regency+Rochester/@43.1564895,-77.610058,17z/data=!4m9!3m8!1s0x89d6b4553173d257:0x9eba3a34b05bcc7a!5m2!4m1!1i2!8m2!3d43.1564621!4d-77.6082341!16s%2Fm%2F05szzp3"
              image={Hyatt}
              phone="(585) 546-1234"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel;
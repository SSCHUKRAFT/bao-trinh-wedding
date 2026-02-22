import React from 'react';
import './travel.css';
import Background from '../../assets/page-backgrounds/travel-bg.jpg';
import { BsAirplane } from "react-icons/bs";
import { MdOutlineHotel } from "react-icons/md"
import TravelLocation from "../../components/TravelLocation";
import RaleighAirport from "../../assets/map-images/raleigh.png";
import Home2 from "../../assets/map-images/home2.png";
import Quality from "../../assets/map-images/quality.png";
import Fairfield from "../../assets/map-images/fairfield.png";
import Garden from "../../assets/map-images/garden.png";

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
          <div className="airport-title-txt">Airport</div>
          <div className="airports">
            <TravelLocation 
              name="Raleigh-Durham<br>International Airport"
              website="https://rocairport.com/"
              map="https://maps.app.goo.gl/Db3PbouTw2SYGqqq6"
              image={RaleighAirport}
            />
          </div>
        </div>
        <div className="hotel">
          <MdOutlineHotel size={32} />
          <div className="hotel-title-txt">Nearby Hotels</div>
          <div className="hotels">
            <TravelLocation 
              name="Home2 Suites by Hilton" 
              website="https://www.hilton.com/en/hotels/rduttht-home2-suites-raleigh-north-i540/?SEO_id=GMB-AMER-HT-RDUTTHT&y_source=1_MjQzMjg3MDktNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
              map="https://maps.app.goo.gl/sMq461ALJBXR2Vrh8"
              image={Home2}
              phone="(919) 458-8013"
            />
            <TravelLocation
              name="Quality Inn & Suites" 
              website="https://www.choicehotels.com/north-carolina/raleigh/quality-inn-hotels/nc853?mc=llgoxxpx"
              map="https://maps.app.goo.gl/UkPrAf3HwuYPqVyRA"
              image={Quality}
              phone="(919) 268-8510"
            />
            <TravelLocation
              name="Fairfield Inn & Suites" 
              website="https://www.marriott.com/en-us/hotels/rdufn-fairfield-inn-and-suites-raleigh-capital-blvd-i-540/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
              map="https://maps.app.goo.gl/MsqnPw2tzKSUfNg86"
              image={Fairfield}
              phone="(919) 878-1120"
            />
            <TravelLocation
              name="Hilton Garden Inn" 
              website="https://www.hilton.com/en/hotels/rdunegi-hilton-garden-inn-raleigh-capital-blvd-i-540/?SEO_id=GMB-AMER-GI-RDUNEGI&y_source=1_MjA4NDc0Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
              map="https://maps.app.goo.gl/VjHKe8EkAxUyCd5J7"
              image={Garden}
              phone="(919) 876-5650"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel;
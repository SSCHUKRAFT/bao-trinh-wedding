import React from 'react';
import { Container, SimpleGrid, Stack, Text, ThemeIcon } from '@mantine/core';
import './travel.css';
import { BsAirplane } from "react-icons/bs";
import { MdLocationOn, MdOutlineHotel } from "react-icons/md"
import TravelLocation from "../../components/TravelLocation";
import RaleighAirport from "../../assets/map-images/raleigh.png";
import Home2 from "../../assets/map-images/home2.png";
import Quality from "../../assets/map-images/quality.png";
import Fairfield from "../../assets/map-images/fairfield.png";
import Garden from "../../assets/map-images/garden.png";
import Hibiscus from "../../assets/map-images/hibiscus.png";

const Travel = () => {
  const bgStyles = {
    width: '100%',
    minHeight: '100vh',
    scale: '1',
    position: 'relative',
  };
  
  return (
    <section className="travel">
      <div style={bgStyles} className="travel-bg">
        <Container size={1120} className="travel-content">
          <Stack spacing={48}>
            <Stack spacing={10} align="center" className="travel-heading">
              <Text className="travel-kicker">Guest Details</Text>
              <Text component="h2" className="travel-title">Travel</Text>
              <Text className="travel-subtitle">
                Everything guests need for getting to Raleigh, finding the venue, and staying nearby.
              </Text>
            </Stack>

            <section className="travel-section">
              <div className="travel-section-heading">
                <ThemeIcon
                  size={46}
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: '#f3dfc3', to: '#d4ab7d', deg: 135 }}
                >
                  <MdLocationOn size={24} color="#7c4d2d" />
                </ThemeIcon>
                <Text className="travel-section-title">Wedding Venue</Text>
              </div>

              <TravelLocation
                label="Venue"
                name="The Hibiscus"
                address={'3209 Gresham Lake Road\nRaleigh, NC'}
                website="https://www.thehibiscusraleigh.com/wedding-venue"
                map="https://maps.app.goo.gl/ZDgDLB1hDjEh1MVY9"
                mapLabel="Get Directions"
                image={Hibiscus}
              />
            </section>

            <section className="travel-section">
              <div className="travel-section-heading">
                <ThemeIcon
                  size={46}
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: '#f3dfc3', to: '#d4ab7d', deg: 135 }}
                >
                  <BsAirplane size={20} style={{ transform: 'rotate(45deg)' }} color="#7c4d2d" />
                </ThemeIcon>
                <Text className="travel-section-title">Airport</Text>
              </div>

              <SimpleGrid cols={1}>
                <TravelLocation 
                  label="Airport"
                  name="Raleigh-Durham<br />International Airport"
                  website="https://rocairport.com/"
                  websiteLabel="Airport Info"
                  map="https://maps.app.goo.gl/Db3PbouTw2SYGqqq6"
                  image={RaleighAirport}
                />
              </SimpleGrid>
            </section>

            <section className="travel-section">
              <div className="travel-section-heading">
                <ThemeIcon
                  size={46}
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: '#f3dfc3', to: '#d4ab7d', deg: 135 }}
                >
                  <MdOutlineHotel size={22} color="#7c4d2d" />
                </ThemeIcon>
                <Text className="travel-section-title">Nearby Hotels</Text>
              </div>

              <SimpleGrid cols={1} spacing="lg" breakpoints={[{ minWidth: 'sm', cols: 2, spacing: 'xl' }]}>
                <TravelLocation 
                  label="Hotel"
                  name="Home2 Suites by Hilton" 
                  website="https://www.hilton.com/en/hotels/rduttht-home2-suites-raleigh-north-i540/?SEO_id=GMB-AMER-HT-RDUTTHT&y_source=1_MjQzMjg3MDktNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
                  map="https://maps.app.goo.gl/sMq461ALJBXR2Vrh8"
                  image={Home2}
                  phone="(919) 458-8013"
                />
                <TravelLocation
                  label="Hotel"
                  name="Quality Inn & Suites" 
                  website="https://www.choicehotels.com/north-carolina/raleigh/quality-inn-hotels/nc853?mc=llgoxxpx"
                  map="https://maps.app.goo.gl/UkPrAf3HwuYPqVyRA"
                  image={Quality}
                  phone="(919) 268-8510"
                />
                <TravelLocation
                  label="Hotel"
                  name="Fairfield Inn & Suites" 
                  website="https://www.marriott.com/en-us/hotels/rdufn-fairfield-inn-and-suites-raleigh-capital-blvd-i-540/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                  map="https://maps.app.goo.gl/MsqnPw2tzKSUfNg86"
                  image={Fairfield}
                  phone="(919) 878-1120"
                />
                <TravelLocation
                  label="Hotel"
                  name="Hilton Garden Inn" 
                  website="https://www.hilton.com/en/hotels/rdunegi-hilton-garden-inn-raleigh-capital-blvd-i-540/?SEO_id=GMB-AMER-GI-RDUNEGI&y_source=1_MjA4NDc0Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                  map="https://maps.app.goo.gl/VjHKe8EkAxUyCd5J7"
                  image={Garden}
                  phone="(919) 876-5650"
                />
              </SimpleGrid>
            </section>
          </Stack>
        </Container>
      </div>
    </section>
  );
}

export default Travel;

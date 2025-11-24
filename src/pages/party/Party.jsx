import React, { useState } from 'react';
import './party.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PartyMember from '../../components/PartyMember';

import Trang from '../../assets/wedding-party-photos/trang-circle.png';
import Linh from '../../assets/wedding-party-photos/linh-circle.png';
import Lilly from '../../assets/wedding-party-photos/lilly-circle.png';
import Bich from '../../assets/wedding-party-photos/bich-circle.png';
import Quyen from '../../assets/wedding-party-photos/quyen-circle.png';
import Katelyn from '../../assets/wedding-party-photos/katelyn-circle.png';
import Yilmaz from '../../assets/wedding-party-photos/yilmaz-circle.png';
import Minh from '../../assets/wedding-party-photos/minh-circle.png';
import Daniel from '../../assets/wedding-party-photos/daniel-circle.png';
import Quinton from '../../assets/wedding-party-photos/quinton-circle.png';
import Andy from '../../assets/wedding-party-photos/andy-circle.png';
import Christopher from '../../assets/wedding-party-photos/christopher-circle.png';

const Party = () => {
  const [party, setParty] = useState(0);

  const handlePartyChange = (event, newParty) => {
    console.log(newParty)
    setParty(newParty);
  }

  return (
    <div className="party">
      <div className="party-bg">
        <div className="party-dark-filter" />
        <div className="party-introducing">Introducing...</div>
        <div className="party-title">The Wedding Party!</div>
        <div className="tabs-container">
          <Tabs value={party} onChange={handlePartyChange}>
            <Tab style={{textTransform: 'none'}} disableRipple label="Bridesmaids" />
            <Tab style={{textTransform: 'none'}} disableRipple label="Groomsmen" />
          </Tabs>
          {party === 0 ? 
            <div className="party-members">
              <PartyMember image={Trang} name="Trang Mai" role="Maid of Honor" />
              <PartyMember image={Linh} name="Linh Mai" />
              <PartyMember image={Lilly} name="Lilly Nguyen" />
              <PartyMember image={Bich} name="Bich Pham" />
              <PartyMember image={Quyen} name="Quyen Pham" />
              <PartyMember image={Katelyn} name="Katelyn Dang" />
            </div>
            :
            <div className="party-members">
              <PartyMember image={Yilmaz} name="Yilmaz Yoruk" role="Best Man" />
              <PartyMember image={Minh} name="Minh Huynh" />
              <PartyMember image={Daniel} name="Daniel Le" />
              <PartyMember image={Quinton} name="Quinton Dang" />
              <PartyMember image={Andy} name="Andy Dao" />
              <PartyMember image={Christopher} name="Chris Kieliszak" />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Party;
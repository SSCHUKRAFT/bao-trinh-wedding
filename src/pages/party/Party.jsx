import React, { useState } from 'react';
import './party.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PartyMember from '../../components/PartyMember';

import Trang from '../../assets/wedding-party-photos/Trang Mai-modified.png';
import Linh from '../../assets/wedding-party-photos/Cuu Mai-modified.png';
import Anh from '../../assets/wedding-party-photos/Anh Mai-modified.png';
import Miuly from '../../assets/wedding-party-photos/Miuly Ha-modified.png';
import Kathy from '../../assets/wedding-party-photos/Kathy Vu-modified.png';
import Chelsea from '../../assets/wedding-party-photos/Chelsea Nguyen-modified.png';
import Vu from '../../assets/wedding-party-photos/Vu Dang-modified.png';
import Sean from '../../assets/wedding-party-photos/Sean-modified.png';
import Kevin from '../../assets/wedding-party-photos/Kevin Truong-modified.png';
import Vinh from '../../assets/wedding-party-photos/Vinh Le-modified.png';
import Phuc from '../../assets/wedding-party-photos/Phuc Nguyen-modified.png';

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
              <PartyMember image={Anh} name="Anh Mai" />
              <PartyMember image={Linh} name="Linh Mai" />
              <PartyMember image={Miuly} name="Miuly Ha" />
              <PartyMember image={Kathy} name="Kathy Vu" />
              <PartyMember image={Chelsea} name="Chelsea Nguyen" />
            </div>
            :
            <div className="party-members">
              <PartyMember image={Vu} name="Vu Dang" role="Best Man" />
              <PartyMember image={Sean} name="Sean Schukraft" />
              <PartyMember image={Kevin} name="Kevin Truong" />
              <PartyMember image={Vinh} name="Vinh Le" />
              <PartyMember image={Phuc} name="Phuc Nguyen" />
              {/* <PartyMember image={Christopher} name="Chris Kieliszak" /> */}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Party;
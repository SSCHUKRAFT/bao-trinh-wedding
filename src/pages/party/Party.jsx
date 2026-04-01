import React, { useState } from 'react';
import {
  Box,
  Container,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import './party.css';
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
import Truong from '../../assets/wedding-party-photos/Truong Mai-modified.png';

const BRIDESMAIDS = [
  { image: Trang, name: 'Trang Mai', role: 'Maid of Honor' },
  { image: Anh, name: 'Anh Mai' },
  { image: Linh, name: 'Linh Mai' },
  { image: Miuly, name: 'Miuly Ha' },
  { image: Kathy, name: 'Kathy Vu' },
  { image: Chelsea, name: 'Chelsea Nguyen' },
];

const GROOMSMEN = [
  { image: Vu, name: 'Vu Dang', role: 'Best Man' },
  { image: Truong, name: 'Truong Mai' },
  { image: Sean, name: 'Sean Schukraft' },
  { image: Kevin, name: 'Kevin Truong' },
  { image: Vinh, name: 'Vinh Le' },
  { image: Phuc, name: 'Phuc Nguyen' },
];

const Party = () => {
  const [party, setParty] = useState('bridesmaids');
  const members = party === 'bridesmaids' ? BRIDESMAIDS : GROOMSMEN;

  return (
    <section className="party">
      <div className="party-bg">
        <div className="party-dark-filter" />
        <Container size={1120} className="party-content">
          <Stack spacing="xl" align="center">
            <Stack spacing={6} align="center" className="party-heading">
              <Text className="party-introducing">Introducing...</Text>
              <Text component="h2" className="party-title">
                The Wedding Party
              </Text>
              <Text className="party-subtitle">
                The people standing beside us on one of the most meaningful days of our lives.
              </Text>
            </Stack>

            <Box className="party-panel">
              <SegmentedControl
                fullWidth
                radius="xl"
                size="md"
                value={party}
                onChange={setParty}
                data={[
                  { label: 'Bridesmaids', value: 'bridesmaids' },
                  { label: 'Groomsmen', value: 'groomsmen' },
                ]}
                transitionDuration={250}
                className="party-toggle"
              />

              <SimpleGrid cols={1} spacing="lg" breakpoints={[{ minWidth: 'sm', cols: 2, spacing: 'xl' }]}>
                {members.map((member) => (
                  <PartyMember
                    key={member.name}
                    image={member.image}
                    name={member.name}
                    role={member.role}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Container>
      </div>
    </section>
  );
};

export default Party;

import React from 'react';
import { Badge, Card, Image, Stack, Text } from '@mantine/core';

export default function PartyMember({ image, name, role }) {
  return (
    <Card
      radius={28}
      p={0}
      shadow="xl"
      sx={(theme) => ({
        overflow: 'hidden',
        background: 'rgba(12, 12, 12, 0.48)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 24px 50px rgba(0, 0, 0, 0.24)',
        minHeight: '100%',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        [theme.fn.largerThan('sm')]: {
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
          },
        },
      })}
    >
      <Card.Section
        sx={{
          background: 'linear-gradient(180deg, rgba(255, 248, 240, 0.08) 0%, rgba(255, 248, 240, 0.02) 100%)',
          padding: '1.1rem 1.1rem 0.55rem',
        }}
      >
        <Image
          src={image}
          alt={name}
          height={280}
          fit="contain"
          sx={{
            '.mantine-Image-image': {
              objectPosition: 'center',
            },
          }}
        />
      </Card.Section>

      <Stack
        spacing={8}
        p="lg"
        sx={{
          background:
            'linear-gradient(180deg, rgba(17, 17, 17, 0.82) 0%, rgba(6, 6, 6, 0.94) 100%)',
        }}
      >
        {role ? (
          <Badge
            variant="light"
            radius="xl"
            tt="uppercase"
            sx={{
              alignSelf: 'flex-start',
              backgroundColor: 'rgba(255, 244, 230, 0.14)',
              color: '#f7e6d0',
              border: '1px solid rgba(247, 230, 208, 0.16)',
            }}
          >
            {role}
          </Badge>
        ) : null}

        <Text
          fw={600}
          size="xl"
          sx={{
            color: '#fffdf8',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          {name}
        </Text>
      </Stack>
    </Card>
  );
}

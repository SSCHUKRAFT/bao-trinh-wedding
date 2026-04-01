import React from 'react';
import {
  Anchor,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { MdLocationOn } from 'react-icons/md';

export default function TravelLocation({
  name,
  map,
  image,
  phone,
  website,
  label,
  address,
  websiteLabel = 'Visit website',
  mapLabel = 'Open in Maps',
}) {
  return (
    <Card
      radius={28}
      p={0}
      shadow="xl"
      sx={(theme) => ({
        overflow: 'hidden',
        minHeight: '100%',
        background: 'rgba(255, 252, 252, 0.82)',
        border: '1px solid rgba(181, 121, 132, 0.14)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 24px 60px rgba(166, 115, 130, 0.16)',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        [theme.fn.largerThan('sm')]: {
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 30px 70px rgba(166, 115, 130, 0.22)',
          },
        },
      })}
    >
      {image ? (
        <Card.Section>
          <Image src={image} alt={name} height={192} fit="cover" />
        </Card.Section>
      ) : (
        <Card.Section
          sx={{
            height: 192,
            background:
              'radial-gradient(circle at top left, rgba(229, 196, 203, 0.85) 0%, rgba(229, 196, 203, 0.25) 34%, rgba(255, 255, 255, 0.96) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1.5rem',
          }}
        >
          <Stack spacing={10} align="center">
            <Group
              position="center"
              sx={{
                width: 62,
                height: 62,
                borderRadius: 999,
                background: 'rgba(255, 255, 255, 0.7)',
                color: '#b57984',
              }}
            >
              <MdLocationOn size={28} />
            </Group>
            <Text
              sx={{
                color: '#8b5865',
                fontSize: '1.05rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Location Details
            </Text>
          </Stack>
        </Card.Section>
      )}

      <Stack spacing="md" p="lg">
        {label ? (
          <Badge
            variant="light"
            radius="xl"
            sx={{
              alignSelf: 'flex-start',
              backgroundColor: 'rgba(229, 196, 203, 0.32)',
              color: '#9e5f6d',
              border: '1px solid rgba(181, 121, 132, 0.14)',
            }}
          >
            {label}
          </Badge>
        ) : null}

        <Stack spacing={6}>
          {website ? (
            <Anchor
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              underline={false}
              sx={{
                color: '#6f4450',
                fontSize: '1.35rem',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: name }} />
            </Anchor>
          ) : (
            <Text
              sx={{
                color: '#6f4450',
                fontSize: '1.35rem',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              {name}
            </Text>
          )}

          {address ? (
            <Text sx={{ color: 'rgba(110, 76, 84, 0.8)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {address}
            </Text>
          ) : null}

          {phone ? (
            <Anchor
              href={`tel:${phone}`}
              underline={false}
              sx={{ color: '#b57984', fontWeight: 600, width: 'fit-content' }}
            >
              {phone}
            </Anchor>
          ) : null}
        </Stack>

        <Group grow>
          {map ? (
            <Button
              component="a"
              href={map}
              target="_blank"
              rel="noreferrer"
              radius="xl"
              variant="light"
              sx={{
                backgroundColor: 'rgba(229, 196, 203, 0.28)',
                color: '#9e5f6d',
              }}
            >
              {mapLabel}
            </Button>
          ) : null}

          {website ? (
            <Button
              component="a"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              radius="xl"
              sx={{
                background: 'linear-gradient(135deg, #d99dac 0%, #c98598 100%)',
                color: '#fff8fa',
                '&:hover': {
                  background: 'linear-gradient(135deg, #d99dac 0%, #c98598 100%)',
                },
              }}
            >
              {websiteLabel}
            </Button>
          ) : null}
        </Group>
      </Stack>
    </Card>
  );
}

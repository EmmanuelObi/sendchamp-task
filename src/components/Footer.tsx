import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import uuid from 'react-uuid';

const baseArea = `
"products solutions"
"resources company"
"followUs contactUs"
`;

const mdArea = `
"products solutions resources"
"company followUs contactUs"
`;

const xlArea = `
"products solutions resources company followUs contactUs"
`;

function Footer() {
  return (
    <Box
      w="full"
      py="50px"
      px={{ base: 1, md: 6, lg: 10 }}
      as="footer"
      role="contentinfo"
      bg="#0D253F"
    >
      <Container
        w="full"
        maxW="container.xl"
        px={{ base: 4, md: 0 }}
        color="#757F98"
      >
        <Grid
          w="full"
          templateAreas={{
            base: baseArea,
            md: mdArea,
            lg: xlArea,
          }}
        >
          <FooterSection
            header="products"
            links={[
              {
                isExternal: true,
                label: 'Channels/Router',
                url: '',
              },
              {
                isExternal: true,
                label: 'Verification',
                url: '',
              },
              {
                isExternal: true,
                label: 'No-Code Tools',
                url: '',
              },
            ]}
            templateArea="products"
          />
          <FooterSection
            header="solutions"
            links={[
              {
                isExternal: true,
                label: 'Onboard',
                url: '',
              },
              {
                isExternal: true,
                label: 'Engage',
                url: '',
              },
              {
                isExternal: true,
                label: 'Support',
                url: '',
              },
              {
                isExternal: true,
                label: 'Retain',
                url: '',
              },
            ]}
            templateArea="solutions"
          />
          <FooterSection
            header="resources"
            links={[
              { label: 'Developers', url: '' },
              { label: 'API Reference', url: '' },
              { label: 'Guides', url: '' },
              { label: 'SDKs/Libraries', url: '' },
              { label: 'Community', url: '' },
              { label: 'Status Page', url: '' },
              { label: 'Pricing', url: '' },
            ]}
            templateArea="resources"
          />
          <FooterSection
            header="company"
            links={[
              { label: 'About Us', url: '' },
              { label: 'Our Stories', url: '' },
              { label: 'Careers', url: '' },
              { label: 'Contact', url: '' },
              { label: 'Terms of Use', url: '' },
              { label: 'Privacy', url: '' },
            ]}
            templateArea="company"
          />
          <FooterSection
            header="Follow Us"
            links={[
              { label: 'Twitter', url: '' },
              { label: 'LinkedIn', url: '' },
              { label: 'Facebook', url: '' },
              { label: 'Instagram', url: '' },
            ]}
            templateArea="followUs"
          />
          <FooterSection
            header="Contact Us"
            links={[
              { label: '+234(0)18880261', url: '' },
              { label: 'sales@sendchamp.com', url: '' },
              { label: 'help@sendchamp.com', url: '' },
            ]}
            templateArea="contactUs"
          />

          {/* <GridItem area="company">
            <VStack
              w="full"
              maxW="279px"
              align="flex-start"
              spacing="6"
              pb="10"
            >
              <VStack w="full" spacing="0" align="flex-start">
                <RouterLink to="/"></RouterLink>
                <Text fontWeight="medium">
                  A better way to compare, share, and manage schedules across
                  time zones.
                </Text>
              </VStack>

              <Text fontWeight="light" fontSize="sm" color="darkBlue.500">
                &copy;{new Date().getFullYear()} - Zonely LLC
              </Text> 
            </VStack>
          </GridItem> */}
        </Grid>
      </Container>
    </Box>
  );
}

type TLink = Record<'label' | 'url', string> &
  Partial<Record<'isExternal', boolean>>;

type FooterSectionProps = {
  templateArea: string;
  header: string;
  links: TLink[];
};

function FooterSection({ header, links, templateArea }: FooterSectionProps) {
  return (
    <GridItem area={templateArea}>
      <VStack w="full" align="flex-start" spacing="3" pb="10">
        <Heading
          fontSize="lg"
          fontWeight="light"
          color="rgba(255,255,255,.56)"
          textTransform="capitalize"
        >
          {header.toLowerCase()}
        </Heading>
        <VStack w="full" align="flex-start" spacing="4">
          {links.map((link) => {
            if (!link.isExternal)
              return (
                <Link
                  key={uuid()}
                  as={RouterLink}
                  to={link.url}
                  fontWeight="light"
                  textTransform="capitalize"
                  _hover={{ textDecoration: 'none', color: 'gray.400' }}
                  color="white"
                  fontSize="md"
                >
                  {link.label.toLowerCase()}
                </Link>
              );

            return (
              <Link
                key={uuid()}
                isExternal
                href={link.url}
                fontWeight="light"
                textTransform="capitalize"
                _hover={{ textDecoration: 'none', color: 'gray.400' }}
                color="white"
                fontSize="md"
              >
                {link.label.toLowerCase()}
              </Link>
            );
          })}
        </VStack>
      </VStack>
    </GridItem>
  );
}

export default Footer;

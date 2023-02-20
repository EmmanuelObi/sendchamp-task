import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import uuid from 'react-uuid';

const baseArea = `
"company company"
"about resources"
"products socials"
`;

const mdArea = `
"company about socials"
"resources products products"
`;

const xlArea = `
"company about resources products socials"
`;

function Footer() {
  return (
    <Box
      w="full"
      py="50px"
      px={{ base: 1, md: 6, lg: 10 }}
      as="footer"
      role="contentinfo"
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
          <GridItem area="company">
            <VStack
              w="full"
              maxW="279px"
              align="flex-start"
              spacing="6"
              pb="10"
            >
              <VStack w="full" spacing="0" align="flex-start">
                <RouterLink to="/">{/* <LogoSVG /> */}</RouterLink>
                <Text fontWeight="medium">
                  A better way to compare, share, and manage schedules across
                  time zones.
                </Text>
              </VStack>

              <Text fontWeight="light" fontSize="sm" color="darkBlue.500">
                &copy;{new Date().getFullYear()} - Zonely LLC
              </Text>
            </VStack>
          </GridItem>

          <FooterSection
            header="about"
            links={[
              {
                isExternal: true,
                label: 'about zonely',
                url: '',
              },
              {
                isExternal: true,
                label: 'privacy',
                url: '',
              },
              {
                isExternal: true,
                label: 'terms and conditions',
                url: '',
              },
            ]}
            templateArea="about"
          />

          <FooterSection
            header="resources"
            links={[
              { label: 'pricing', url: '' },
              { label: 'contact support', url: '' },
            ]}
            templateArea="resources"
          />

          <FooterSection
            header="products"
            links={[{ label: 'features', url: '' }]}
            templateArea="products"
          />

          <FooterSection
            header="socials"
            links={[
              {
                label: 'linkedIn',
                url: '',
                isExternal: true,
              },
              {
                label: 'instagram',
                url: '',
                isExternal: true,
              },
              {
                label: 'twitter',
                url: '',
                isExternal: true,
              },
              {
                label: 'feedback',
                url: '',
                isExternal: true,
              },
            ]}
            templateArea="socials"
          />
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
        <Heading fontSize="xl" color="darkBlue.500" textTransform="capitalize">
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
                  fontWeight="medium"
                  textTransform="capitalize"
                  _hover={{ textDecoration: 'none', color: 'blue.500' }}
                >
                  {link.label.toLowerCase()}
                </Link>
              );

            return (
              <Link
                key={uuid()}
                isExternal
                href={link.url}
                fontWeight="medium"
                textTransform="capitalize"
                _hover={{ textDecoration: 'none', color: 'blue.500' }}
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

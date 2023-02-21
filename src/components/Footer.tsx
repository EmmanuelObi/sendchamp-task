import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  VStack,
  Text,
  Image,
  chakra,
  useBreakpointValue,
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import { siteAssets } from '../assets';
import { ReactComponent as LogoSVG } from '../assets/images/SendchampFooterLogo.svg';

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
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box w="full" pt="70px" as="footer" role="contentinfo" bg="#0D253F">
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 7 }}
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
            header="Products"
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
            header="Solutions"
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
            header="Resources"
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
            header="Company"
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
            header="Follow us"
            links={[
              { label: 'Twitter', url: '' },
              { label: 'LinkedIn', url: '' },
              { label: 'Facebook', url: '' },
              { label: 'Instagram', url: '' },
            ]}
            templateArea="followUs"
          />
          <FooterSection
            header="Contact us"
            links={[
              { label: '+234(0)18880261', url: '' },
              { label: 'sales@sendchamp.com', url: '' },
              { label: 'help@sendchamp.com', url: '' },
            ]}
            templateArea="contactUs"
          />
        </Grid>

        <HStack
          w="full"
          spacing={{ base: '0', lg: '16' }}
          alignItems="center"
          justifyContent={{ base: 'center', lg: 'space-between' }}
          borderTop=" 1px solid"
          borderBottom=" 1px solid"
          borderColor="gray.600"
          py="10"
          px={{ base: '0', lg: '8' }}
          flexWrap={{ base: 'wrap', lg: 'unset' }}
        >
          <Link href="/">
            <LogoSVG width="230px" />
          </Link>

          <Text
            fontWeight="medium"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign={{ base: 'center', lg: 'left' }}
            py="3"
          >
            {isDesktop && <Image src={siteAssets.NaijaIcon} width="40px" />}
            <chakra.span ml="4" color="#fff" fontSize="sm">
              142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria.
            </chakra.span>
          </Text>
          <Text
            fontWeight="medium"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            {isDesktop && <Image src={siteAssets.USAIcon} width="40px" />}
            <chakra.span ml="4" color="#fff" fontSize="sm">
              2055 Limestone Rd STE 200-C Wilmington, DE 19808
            </chakra.span>
          </Text>
        </HStack>

        <Text my="5" textAlign="center">
          Built with ❤️ at Sendchamp Inc. - © 2023 | All rights reserved
        </Text>
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
          fontSize={{ base: 'sm', lg: 'lg' }}
          fontWeight="light"
          color="rgba(255,255,255,.56)"
        >
          {header}
        </Heading>
        <VStack w="full" align="flex-start" spacing="4">
          {links.map((link) => {
            if (!link.isExternal)
              return (
                <Link
                  key={uuid()}
                  as={'a'}
                  href={link.url}
                  fontWeight="light"
                  _hover={{ textDecoration: 'none', color: 'gray.400' }}
                  color="white"
                  fontSize={{ base: 'sm', lg: 'md' }}
                >
                  {link.label}
                </Link>
              );

            return (
              <Link
                as="a"
                key={uuid()}
                isExternal
                href={link.url}
                fontWeight="light"
                _hover={{ textDecoration: 'none', color: 'gray.400' }}
                color="white"
                fontSize={{ base: 'sm', lg: 'md' }}
              >
                {link.label}
              </Link>
            );
          })}
        </VStack>
      </VStack>
    </GridItem>
  );
}

export default Footer;

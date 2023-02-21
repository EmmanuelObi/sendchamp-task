import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  FormLabel,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { preferenceModalState } from '../../state/atoms';
import CountrySelect from '../CountrySelect';
import MyButton from '../Navbar/LoginButton';

const PreferenceModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(preferenceModalState);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent px="4">
          <ModalHeader
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Text
              fontSize="sm"
              textDecoration="underline"
              color="#197EEF"
              float="right"
              fontWeight="light"
              onClick={onClose}
              cursor="pointer"
            >
              Cancel
            </Text>
          </ModalHeader>

          <ModalBody py="10">
            <Text w="full" textAlign="center" color="black" fontSize="xl">
              Country Preference
            </Text>
            <Text
              textAlign="center"
              w="full"
              py="7"
              px="3"
              mt="2"
              color="gray.500"
            >
              Kindly choose your preferred country from the options below
            </Text>
            <FormLabel
              fontSize="xs"
              fontWeight="light"
              color="gray.500"
              textTransform="uppercase"
            >
              Country
            </FormLabel>
            <CountrySelect h="45px" w="full" mb="7" fontSize="xs" />
            <MyButton text="UPDATE PREFERENCE" w="full" h="45px" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PreferenceModal;

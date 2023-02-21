import { UnlockIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Heading,
  Text,
  chakra,
  Tag,
} from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { valueModalData, valueModalState } from '../../state/atoms';

const ValueModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(valueModalState);
  const modalData = useRecoilValue(valueModalData);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box
              bg="#197EEF"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="40px"
              h="40px"
              rounded="lg"
              mr="2"
            >
              <UnlockIcon width="20px" height="20px" color="white" />
            </Box>
            <Heading size="md" fontWeight="light">
              {modalData.valueName}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody borderTop="1px solid" borderColor="#197EEF" py="10">
            <Text
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <chakra.span>{modalData.preText}</chakra.span>
              <chakra.span>{modalData.postText}</chakra.span>
            </Text>
            <Text
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bg="#EFF4FE"
              w="full"
              py="7"
              px="3"
              mt="2"
            >
              <chakra.span fontWeight="medium">{modalData.value}</chakra.span>
              <chakra.span>
                {modalData.isTag && (
                  <Tag
                    size="md"
                    variant="solid"
                    bg="rgba(25, 126, 239, 0.08)"
                    color="#197EEF"
                    fontSize="xs"
                    fontWeight="light"
                  >
                    Coming Soon
                  </Tag>
                )}
              </chakra.span>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ValueModal;

import React from 'react';
import {
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

export type EventType = {
  id: Number;
  title: String;
  media_raw: MediaRawItem[];
  description: String;
  address: String;
  url: string;
  startDate: String;
  endDate: String;
  nextDate: String;
  recurrence: String;
};

export type MediaRawItem = {
  mediaurl: string;
  sortorder: Number;
};

function EventImage({ url }: { url: MediaRawItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image onClick={onOpen} src={url.mediaurl} maxW="500px" />
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton background="white" />
          <Image src={url.mediaurl} />
        </ModalContent>
      </Modal>
    </>
  );
}

export default EventImage;

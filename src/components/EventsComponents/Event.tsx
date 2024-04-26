import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  // stay new line
  Card,
  Center,
  Heading,
  Image,
  ChakraProvider,
  CardBody,
  Text,
  Link as ChakraLink,
  Container,
  Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';
import axios from 'axios';

function Event() {
  const { id } = useParams();

  type EventType = {
    id: Number;
    title: String;
    media_raw: any[];
    description: String;
    address: String;
    url: string;
    startDate: String;
    endDate: String;
  };

  const [event, setEvent] = useState({} as EventType);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    axios
      .get(`/events/event/${id}`)
      .then(({ data }) => {
        setEvent(data);
        setStart(dayjs(data.startDate).format('dddd, MMMM D, YYYY'));
        setEnd(dayjs(data.endDate).format('dddd, MMMM D, YYYY'));
      })
      .catch((err) => console.error('failed finding event', err));
  }, [id]);

  return (
    <ChakraProvider>
      <Container maxW="7xl">
        <Box padding="10px">
          <Center>
            <Heading size="3xl" color="blue.200">
              {event.title}
            </Heading>
          </Center>
        </Box>
        <Card>
          <CardBody>
            <Text>{event.description}</Text>
            <Text>{event.address}</Text>
            <ChakraLink href={event.url} isExternal>
              Check out their site
              <ExternalLinkIcon mx="2px" />
            </ChakraLink>
            <Text>{`Make sure to check it out between ${start} and ${end}`}</Text>
            {event.media_raw ? (
              event.media_raw.map((url) => (
                <Image key={`${event.id}-${url.sortorder}`} src={url.mediaurl} />
              ))
            ) : (
              <div />
            )}
          </CardBody>
        </Card>
      </Container>
    </ChakraProvider>
  );
}

export default Event;

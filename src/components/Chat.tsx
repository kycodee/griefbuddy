import React, { useRef, useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

import ChatInput from './ChatComponents/ChatInput';

function Chat() {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([] as (typeof message)[]);

  const messagesEndRef = useRef(null);

  const bottomScroll = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(bottomScroll, [messages]);

  const onChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setMessage(value);
  };

  // needs socket
  const onSend = () => {
    setMessages((curMessages) => curMessages.concat([message]));
    setMessage('');
  };

  const onPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <Container>
      <Heading>Chat</Heading>
      <Box overflowY="auto" maxHeight="70vh" marginBottom="10px" marginTop="15px">
        <ChatInput
          messagesEndRef={messagesEndRef}
          message={message}
          onChange={onChange}
          onSend={onSend}
          onPress={onPress}
        />
      </Box>
    </Container>
  );
}

export default Chat;

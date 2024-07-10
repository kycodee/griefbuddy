import React from 'react';
import { HStack, /* Input, */ Button, Textarea } from '@chakra-ui/react';

function ChatInput({
  messagesEndRef,
  onChange,
  onPress,
  message,
  onSend,
  id,
}: {
  messagesEndRef: React.MutableRefObject<any>;
  onChange: (e: {
    target: {
      value: string;
      id: string;
    };
  }) => void;
  onPress: (
    e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
  message: string;
  onSend: () => void;
  id: string;
}) {
  return (
    <HStack ref={messagesEndRef} mb=".5rem">
      {/* <Input
        onChange={onChange}
        onKeyDown={onPress}
        value={message}
        id={id}
        placeholder="Start typing here"
      /> */}
      <Textarea
        minH="2.5rem"
        onChange={onChange}
        onKeyDown={onPress}
        value={message}
        id={id}
        placeholder="Start typing here"
      />
      <Button onClick={onSend}>Send</Button>
    </HStack>
  );
}

export default ChatInput;

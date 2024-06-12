import React from 'react';
import { HStack, Input, Button } from '@chakra-ui/react';

function UserSearchInput({
  onChange,
  onSearch,
  onPress,
  userSearch,
}: {
  onChange: (e: {
    target: {
      value: string;
      id: string;
    };
  }) => void;
  onSearch: () => Promise<void>;
  onPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  userSearch: string;
}) {
  return (
    <HStack>
      <Input onChange={onChange} onKeyDown={onPress} placeholder="Look up a buddy's name" value={userSearch} id="user" />
      <Button onClick={onSearch}>Search</Button>
    </HStack>
  );
}

export default UserSearchInput;

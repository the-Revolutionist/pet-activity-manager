import { FaMoon, FaSun } from 'react-icons/fa';
import {
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [isInDarkMode, setIsInDarkMode] = useState(false);
  const handleClick = () => {
    toggleColorMode();
    if (!isInDarkMode) {
      setIsInDarkMode(true);
    }
    if (isInDarkMode) {
      setIsInDarkMode(false);
    }
  };

  return (
    <>
      {!isInDarkMode ? <Text>{text} Mode</Text> : <Text>{text} Mode</Text>}
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={handleClick}
        icon={<SwitchIcon />}
        {...props}
      />
    </>
  );
};

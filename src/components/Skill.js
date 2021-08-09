import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaJava, FaReact, FaJs, FaDatabase, FaAdobe } from 'react-icons/fa';

export default function Skill() {
  return (
    <HStack spacing='44px'>
      <Icon as={FaReact} boxSize="50"></Icon>
      <Icon as={FaJs} boxSize="50"></Icon>
      <Icon as={FaJava} boxSize="50"></Icon>
      <Icon as={FaDatabase} boxSize="50"></Icon>
      <Icon as={FaAdobe} boxSize="50"></Icon>
    </HStack>
  );
}

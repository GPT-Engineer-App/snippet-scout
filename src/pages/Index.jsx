import { Box, Image, Text, VStack, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaUserEdit } from "react-icons/fa";

const UserProfileCard = () => {
  const bgColor = useColorModeValue("gray.200", "gray.700");

  // Example of a sourced and customized component
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor} p={4}>
      <VStack spacing={4} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTUyNTA3MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Profile" />
        <Text fontWeight="bold" fontSize="xl">
          John Doe
        </Text>
        <Text fontSize="md" color="gray.500">
          Software Developer
        </Text>
        <IconButton aria-label="Edit Profile" icon={<FaUserEdit />} size="lg" />
      </VStack>
    </Box>
  );
};

export default UserProfileCard;

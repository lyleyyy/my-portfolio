import { Box, Tag } from "@chakra-ui/react";
import React from "react";
interface SkillItemProps {
  children: string;
  color: string;
}

const SkillItem = ({ children, color }: SkillItemProps) => {
  const bgGradient = {
    green: "linear(to-r, teal.500, teal.500)",
    yellow: "linear(to-r, yellow.500, teal.500)",
    blue: "linear(to-r, blue.600, blue.600)",
    red: "linear(to-l, #7928CA, #FF0080)",
    orange: "linear(to-r, orange.500, orange.500)",
  };

  return (
    <Box
      py={2}
      px={4}
      color="white"
      fontWeight="bold"
      borderRadius="md"
      // bgGradient={bgGradient[color as keyof typeof bgGradient]}
      bgGradient="linear(to-r, teal.500, teal.500)"
    >
      {children}
    </Box>
  );
};

export default SkillItem;

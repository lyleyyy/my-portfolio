import { Box, Tag } from "@chakra-ui/react";
import React from "react";
interface SkillItemProps {
  children: string;
  color: string;
}

const SkillItem = ({ children, color }: SkillItemProps) => {
  const bgGradient = {
    green: "linear(to-r, teal.500, green.500)",
    yellow: "linear(to-r, yellow.500, teal.500)",
    blue: "linear(to-r, blue.500, blue.800)",
    red: "linear(to-l, #7928CA, #FF0080)",
    orange: "linear(to-r, red.500, yellow.500)",
  };

  return (
    <Box
      p={2}
      color="white"
      fontWeight="bold"
      borderRadius="md"
      bgGradient={bgGradient[color as keyof typeof bgGradient]}
    >
      {children}
    </Box>
  );
};

export default SkillItem;

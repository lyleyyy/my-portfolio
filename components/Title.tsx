import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="underline underline-offset-2 text-4xl font-bold mb-6">
      {title}
    </h1>
  );
};

export default Title;

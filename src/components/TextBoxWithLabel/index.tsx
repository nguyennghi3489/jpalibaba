import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
  label: string;
  content: string;
}
export const TextBoxWithLabel = ({ label, content }: Props) => {
  return (
    <>
      <Typography variant="overline" display="block" gutterBottom>
        {label}
      </Typography>
      <Typography variant="body1" display="block">
        {content}
      </Typography>
    </>
  );
};

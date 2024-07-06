import { Typography } from "../Atoms/Typography";
export const Heading = ({
  title,
  caption,
}: {
  title: string;
  caption: string;
}) => {
  return (
    <div>
      <Typography variant="title">{title}</Typography>
      <Typography variant="subtitle1">{caption}</Typography>
    </div>
  );
};

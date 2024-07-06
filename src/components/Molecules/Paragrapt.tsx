import { Typography } from "../Atoms/Typography";
export const Paragrapt = ({ text }: { text: string }) => {
  return (
    <div>
      <Typography variant="body1" className="indent-10 hyphens-auto">
        {text}
      </Typography>
    </div>
  );
};

import { Button } from "@adobe/react-spectrum";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const DcButton = ({ text = "placeholder", onClick }: ButtonProps) => {
  return (
    <Button variant="cta" onPress={onClick}>
      {text}
    </Button>
  );
};

export default DcButton;

import { Button } from "@adobe/react-spectrum";

type ButtonProps = {
    text: string;
    onClick: () => void;
}

//TODO: Fix this, it's not working on press but if I use a normal button it works
// const DcButton = ({ text = "placeholder", onClick }: ButtonProps) => {
//     return (
//             <Button 
//             variant="cta"
//             onPress={onClick}
//             >{text}</Button>
//     );
// }

const DcButton = ({ text = "placeholder", onClick }: ButtonProps) => {
    return (
            <button 
            onClick={onClick}
            >{text}</button>
    );
}

export default DcButton;
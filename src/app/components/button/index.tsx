import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
  px-5
  py-3
  outline-none
  rounded-md
  text-white
  text-xs
  font-thin
  md:font-semibold
  border-transparent
  border-2
  border-solid
  focus:outline-none
  transition-all
  duration-200
  ease-in-out
  m-1
  `}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-green-500
    hover:bg-transparent
    hover:text-green-500
    hover:border-green-500
  `}
`;
const FilledButton = styled(BaseButton)`
  ${tw`
    border-green-500
    text-green-500
    bg-transparent
    hover:bg-green-500
    hover:text-white
    hover:border-transparent
  `}
`;

// テーマによる利用ボタンの切り替え
const Button = ({ theme, text, className }: IButtonProps): JSX.Element => {
  if (theme === "filled") {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
};

export default Button;

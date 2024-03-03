import "./Input.scss";

type Props = {
  number: string;
};

export const ShowNumber = ({ number }: Props) => {
  return <div className="your-number">Вы загадали: {number}</div>;
};

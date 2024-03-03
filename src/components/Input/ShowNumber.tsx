type Props = {
  number: string;
};

export const ShowNumber = ({ number }: Props) => {
  return <div className="your-number">{number}</div>;
};

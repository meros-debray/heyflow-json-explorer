type Props = {
  content: string;
};

const Title = ({ content }: Props) => {
  return <h4 className="text-gray-500 text-sm">{content}</h4>;
};

export default Title;

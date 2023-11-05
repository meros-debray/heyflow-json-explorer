import { indentationSpace } from "@/constants";
import { Dispatch, SetStateAction } from "react";

type Props = {
  keyPath: string[];
  value: string;
  setSelectedKeyPath: Dispatch<SetStateAction<string[]>>;
  isComma: boolean;
};

const JsonElement = ({
  keyPath,
  value,
  setSelectedKeyPath,
  isComma,
}: Props) => {
  const handleClick = () => {
    setSelectedKeyPath(keyPath);
  };

  return (
    <div
      className="flex"
      style={{ marginLeft: `${(keyPath.length - 1) * indentationSpace}rem` }}
    >
      <button
        className="text-blue-500 hover:underline"
        onClick={() => handleClick()}
      >
        {keyPath[keyPath.length - 1]}
      </button>
      <span>
        : {value} {isComma && " ,"}
      </span>
    </div>
  );
};

export default JsonElement;

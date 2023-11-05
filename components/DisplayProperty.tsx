import { useEffect, useState } from "react";
import Title from "./Title";

type Props = {
  keyPath: string[];
  jsonData: string;
};

const DisplayProperty = ({ keyPath, jsonData }: Props) => {
  const [property, setProperty] = useState<string>("");
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const formattedKeyPath: string = keyPath
      .map((key) => (isNaN(Number(key)) ? `.${key}` : `[${key}]`))
      .join("");
    const value: string = formattedKeyPath
      ? String(eval(`jsonData${formattedKeyPath}`))
      : "undefined";
    setProperty(formattedKeyPath);
    setValue(value);
  }, [keyPath, jsonData]);

  return (
    <div>
      <Title content="Property" />
      <input
        type="text"
        className="border border-gray-300 rounded-md p-3 w-full"
        placeholder="Property"
        value={property && `res${property}`}
      />
      <p className="text-gray-500 text-sm">{value}</p>
    </div>
  );
};

export default DisplayProperty;

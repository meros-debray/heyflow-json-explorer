import Title from "./Title";
import { Dispatch, SetStateAction } from "react";
import JsonElement from "./JsonElement";
import { indentationSpace } from "@/constants";

type Props = {
  jsonData: any;
  className?: string;
  setSelectedKeyPath: Dispatch<SetStateAction<string[]>>;
};

const DisplayJson = ({ jsonData, className, setSelectedKeyPath }: Props) => {
  const formatJson = (
    key: string,
    value: any,
    keyPath: string[] = [],
    isComma: boolean = true
  ) => {
    // If the value is an object or an array
    if (typeof value === "object") {
      const isArray: boolean = Array.isArray(value);
      return (
        <>
          <div
            style={{ marginLeft: `${keyPath.length * indentationSpace}rem` }}
          >
            {key}: {isArray ? "[" : "{"}
          </div>
          {Object.keys(value).map((subKey, index) => (
            <div key={subKey}>
              {formatJson(
                subKey,
                value[subKey],
                keyPath.concat(key),
                index < Object.keys(value).length - 1
              )}

              {index === Object.keys(value).length - 1 && (
                <div
                  style={{
                    marginLeft: `${keyPath.length * indentationSpace}rem`,
                  }}
                >
                  {isArray ? "]" : "}"}
                  {isComma && " ,"}
                </div>
              )}
            </div>
          ))}
        </>
      );
    }
    // If the value is an string, a number, a boolean or null
    else {
      return (
        <JsonElement
          keyPath={keyPath.concat(key)}
          value={JSON.stringify(value)}
          setSelectedKeyPath={setSelectedKeyPath}
          isComma={isComma}
        />
      );
    }
  };

  return (
    <div className={className}>
      <Title content="Response" />
      <div className="border border-gray-300 rounded-md p-3">
        {Object.keys(jsonData).map((key) => (
          <div key={key}>{formatJson(key, jsonData[key])}</div>
        ))}
      </div>
    </div>
  );
};

export default DisplayJson;

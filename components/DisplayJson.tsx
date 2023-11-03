import reactStringReplace from "react-string-replace";
import Title from "./Title";

type Props = {
  jsonData: any;
};

const DisplayJson = ({ jsonData }: Props) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <Title content="Response" />
      <div className="border border-gray-300 rounded-md p-3">
        <pre>
          {reactStringReplace(
            JSON.stringify(jsonData, undefined, 4),
            /"([^"]+)":/g,
            (match, i) => {
              return (
                <span>
                  <button
                    key={i}
                    className="text-blue-500 hover:underline"
                    onClick={handleClick}
                  >
                    {match}
                  </button>
                  :
                </span>
              );
            }
          )}
        </pre>
      </div>
    </div>
  );
};

export default DisplayJson;

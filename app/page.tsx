"use client";

import DisplayProperty from "@/components/DisplayProperty";
import DisplayJson from "@/components/DisplayJson";
import { useEffect, useState } from "react";

export default function Home() {
  const [jsonData, setJsonData] = useState<any>(undefined);
  const [selectedKeyPath, setSelectedKeyPath] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response: Response = await fetch("/mocks/dummy.json");
      const data: any = await response.json();
      setJsonData(data);
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-10 py-20">
      {jsonData ? (
        <>
          <DisplayProperty keyPath={selectedKeyPath} jsonData={jsonData} />
          <DisplayJson
            jsonData={jsonData}
            className="mt-5"
            setSelectedKeyPath={setSelectedKeyPath}
          />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

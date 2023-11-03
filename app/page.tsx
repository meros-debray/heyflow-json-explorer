"use client";

import DisplayJson from "@/components/DisplayJson";
import { useEffect, useState } from "react";

export default function Home() {
  const [jsonData, setJsonData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("/mocks/dummy.json");
      const data = await response.json();
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
      <DisplayJson jsonData={jsonData} />
    </div>
  );
}

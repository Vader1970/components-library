"use client";

import { useEffect, useState } from "react";

const CodeViewerPage = ({ params }: { params: { fileName: string } }) => {
  const [code, setCode] = useState<string>("Loading...");
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(`/api/code?fileName=${params.fileName}`);
        if (!response.ok) throw new Error("Failed to fetch code");
        const data = await response.text();
        setCode(data);
      } catch (error) {
        if (error instanceof Error) {
          setCode("Error loading code: " + error.message);
        } else {
          setCode("An unknown error occurred.");
        }
      }
    };

    fetchCode();
  }, [params.fileName]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setNotification("Code copied to clipboard!");

    // Remove notification after 2 seconds
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div className="p-4">
      {/* Flex container to align title and button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Code for {params.fileName}</h1>
        <button
          onClick={handleCopyCode}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Copy Code
        </button>
      </div>
      <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
        {code}
      </pre>

      {/* Notification */}
      {notification && (
        <div className="fixed top-[50%] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md">
          {notification}
        </div>
      )}
    </div>
  );
};

export default CodeViewerPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FakeApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // empty dependency array to run once on mount

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts:</h2>
      {data.map((post) => (
        <div key={post.id} className="mb-2 p-2 border-b border-gray-300">
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FakeApi;

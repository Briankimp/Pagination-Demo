"use client";
import { useState } from "react";
import Pagination from "../components/Pagination";

const sampleData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

const ITEMS_PER_PAGE = 10; // Define the number of items per page

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1); 


  const totalPages = Math.ceil(sampleData.length / ITEMS_PER_PAGE);


  const currentData = sampleData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <div className="container  mx-auto p-4  ">
      <h1 className="text-2xl font-bold text-center">Pagination Example</h1>
      <div className="grid gap-4  ">
        {currentData.map((item) => (
          <div key={item.id} className="p-4 bg-white text-black  shadow rounded">
            {item.name}
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;

"use client";
import { useState } from "react";
import Pagination from "../components/Pagination";
// Sample data - replace this with your actual data source
const sampleData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

const ITEMS_PER_PAGE = 10; // Define the number of items per page

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1); // State for the current page

  // Calculate total number of pages
  const totalPages = Math.ceil(sampleData.length / ITEMS_PER_PAGE);

  // Calculate the data to be displayed based on the current page  
  const currentData = sampleData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <div className="container  mx-auto p-4  ">
      {/* Render current data */}
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

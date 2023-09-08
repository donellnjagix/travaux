"use client";
import React from "react";
import { ClassType } from "../types/types";
import Card from "../components/Card";
import img1 from "@/public/images/design/img1.jpg";
import img2 from "@/public/images/design/img2.jpg";
import img3 from "@/public/images/Maisonettes3/CM 1.jpg";  
import img4 from "@/public/images/Maisonettes3/CM 2.jpg";  
import img5 from "@/public/images/Maisonettes3/CM 3.jpg";  
import img6 from "@/public/images/Maisonettes3/CM 4.jpg";  
import img7 from "@/public/images/Maisonettes3/FIRST FLOOR_page-0001.jpg";  
import img8 from "@/public/images/Maisonettes3/Roof plan_page-0001.jpg";  
import Link from "next/link";
import img9 from "@/public/images/Maisonettes5/Flat Roof 1.jpg"; 
import img10 from "@/public/images/Maisonettes5/Utawala 1.jpg"; 
import img11 from "@/public/images/Maisonette4/12 X 35 Flat Roof 3D.jpg"; 
import img12 from "@/public/images/Maisonette4/4 bedroom flat roof 40 x 80_page-0001.jpg";

// Define property types (modify as needed)
const propertyTypeOptions = ["All", "House", "Apartment", "Condo", "Villa"];

export const properties: Array<ClassType> = [
  {
    id: 1,
    name: "Properties",
    price: 10,
    image: [img1.src],
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
    propertyType: "House",
    location: "City A",
    landSize: "500 sq. ft",
    selections: 2, // Add the number of selections
  },
  {
    id: 2,
    name: "Properties",
    price: 10,
    image: [img12.src, img12.src,],
    shortDescription: "Lorem ipsum dolor sit amet.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
    propertyType: "Apartment",
    location: "City B",
    landSize: "500 sq. ft",
    selections: 3, // Add more property entries with relevant details
  },
  {
    id: 3,
    name: "Properties",
    price: 1000,
    image: [img3.src, img4.src, img5.src, img6.src, img7.src, img8.src,],
    shortDescription: "Massionete _ Bungallows on 1/4 Acre ",
    longDescription:
      "This is how your dream should look ",
    propertyType: "Apartment",
    location: "City B",
    landSize: "N/A",
    selections: 3, // Add more property entries with relevant details
  },

  {
    id: 4,
    name: "Properties",
    price: 1000,
    image: [img3.src],
    shortDescription: "Massionete _ Bungallows on 1/4 Acre ",
    longDescription:
      "This is how your dream should look ",
    propertyType: "Apartment",
    location: "City B",
    landSize: "N/A",
    selections: 3, // Add more property entries with relevant details
  },

  {
    id: 5,
    name: "Properties",
    price: 1000,
    image: [img3.src, img9.src, img10.src,],
    shortDescription: "Massionete _ Bungallows on 1/4 Acre ",
    longDescription:
      "This is how your dream should look ",
    propertyType: "Massionete ",
    location: "City B",
    landSize: "50FT * 100FT",
    selections: 4, // Add more property entries with relevant details
  },

];

const Property = () => {
  const [selectedPropertyType, setSelectedPropertyType] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedLandSize, setSelectedLandSize] = React.useState("");
  const [selectedNumber, setSelectedNumber] = React.useState<number | null>(
    null
  );

  // Implement search logic here
  const filterProperties = () => {
    return properties.filter((property) => {
      // Apply filters here based on selected criteria
      if (
        (selectedPropertyType === "All" ||
          property.propertyType === selectedPropertyType) &&
        (selectedLandSize === "" || property.landSize === selectedLandSize) &&
        (selectedNumber === null || property.selections === selectedNumber) &&
        (property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.shortDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPropertyType(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here, filtering properties based on searchQuery
    // For example, you can set the state or modify the filterProperties function.
  };

  return (
    <div id="properties" className="mx-auto w-5/6 pt-28">
      {/* Filter */}
      <div className="filter-container flex justify-between items-center">
        {/* Property Type Filter */}
        <div className="filter-type mb-4">
          <label>Property Type:</label>
          <select
            value={selectedPropertyType}
            onChange={handlePropertyTypeChange}
            className="ml-2 p-2 rounded-md border border-gray-300 text-black"
          >
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* Land Size Filter */}
        <div className="filter-type mb-4">

          <label>Land Size:</label>
          <select
            value={selectedLandSize}
            onChange={(e) => setSelectedLandSize(e.target.value)}
            className="ml-2 p-2 rounded-md border border-gray-300"
          >
            <option value="">Any Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        {/* Number of Selections Filter */}
        <div className="filter-type mb-4">
          <label>Number of Bedroom:</label>
          <div className="flex ml-2 space-x-2">
            <button
              className={`${
                selectedNumber === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(1)}
            >
              1
            </button>
            <button
              className={`${
                selectedNumber === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(2)}
            >
              2
            </button>
            <button
              className={`${
                selectedNumber === 3
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(3)}
            >
              3
            </button>
            <button
              className={`${
                selectedNumber === 4
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(4)}
            >
              4
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="filter-type mb-4">
          <label>Search:</label>
          <div className="flex ml-2 space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md border border-gray-300"
            />
            <button
              className="bg-orange-500 text-white px-3 py-1 rounded-full"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filterProperties().map(
          ({
            id,
            name,
            price,
            image,
            shortDescription,
          }: ClassType) => (
            <div key={id}>
              <Link href={`/properties/${id}`}>
                <Card
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  shortDescription={shortDescription}
                />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};


export default Property;
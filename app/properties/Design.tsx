"use client";
import React, { useState } from "react";
import { ClassType } from "../types/types";
import Card from "../components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "@/public/images/properties/christian-mackie-cc0Gg3BegjE-unsplash.jpg";
import img2 from "@/public/images/properties/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg";
import img3 from "@/public/images/properties/marcus-lenk-wKO0rx50VWo-unsplash.jpg";
import img4 from "@/public/images/properties/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import img5 from "@/public/images/properties/r-architecture-CCjAPxoQWgQ-unsplash.jpg";
import Link from "next/link";

// Define property types (modify as needed)
const propertyTypeOptions = ["All", "House", "Apartment", "Condo", "Villa"];

type Props = {};



const Design: React.FC<Props> = (props) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Sample designs data (modify as needed)
  const designs: Array<ClassType> = [
    {
      id: 1,
      name: "Designs",
      price: 10,
      image: [img1.src],
      shortDescription: "Lorem ipsum dolor sit amet.",
      longDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
      propertyType: "House",
      location: "City A",
      landSize: "500 sq. ft",
      selections: 2, // Example value for selections
      //landSizeOptions: ["Small", "Medium", "Large"] // Example land size options
    },
    {
      id: 2,
      name: "Designs",
      price: 10,
      image: [img2.src],
      shortDescription: "Lorem ipsum dolor sit amet.",
      longDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quas. Quia corporis error fugit praesentium? Aliquid sit, incidunt assumenda autem veniam expedita dignissimos id animi quia quidem eos ipsa amet!",
      propertyType: "Apartment",
      location: "City B",
      landSize: "N/A",
      selections: 1, // Example value for selections
    //  landSizeOptions: ["Small", "Medium", "Large"] // Example land size options
    },
    // Add more design entries with relevant details, including 'selections' and 'landSizeOptions'
  ];
  

  const filterDesigns = () => {
    return designs.filter((design) => {
      // Apply filters here based on selected criteria
      if (
        (selectedPropertyType === "All" ||
          design.propertyType === selectedPropertyType) &&
        (design.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          design.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()))
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
    // Implement search logic here, filtering designs based on searchQuery
    // For example, you can set the state or modify the filterDesigns function.
  };

  return (
    <div id="design" className="mx-auto w-5/6 mt-4 pt-20">
      {/* Heading */}
      <div className="flex flex-col justify-center mb-4 items-center">
        <p className="font-bold text-accent-black text-lg">How we design</p>
        <h1 className="text-3xl font-bold text-accent-orange">Our Designs</h1>
        <p className="text-accent-black w-full md:w-3/4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eius quo,
          similique doloribus expedita quasi soluta pariatur accusantium
          obcaecati iure quam officiis necessitatibus repellendus modi dicta
          temporibus eos facere numquam.
        </p>
      </div>
      {/* end */}
      {/* Filter */}
      <div className="filter-container">
        {/* Property Type Filter */}
        <div className="filter-type">
          <label>Property Type:</label>
          <select
            value={selectedPropertyType}
            onChange={handlePropertyTypeChange}
          >
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {/* Designs Carousel */}
      <Carousel responsive={responsive}>
        {filterDesigns().map(
          ({ id, name, price, shortDescription, image }: ClassType) => (
            <div key={id} className="ml-4">
              <Link href={`/designs/${id}`}>
                <Card
                  id={id}
                  name={name}
                  price={price}
                  shortDescription={shortDescription}
                  image={image}
                />
              </Link>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Design;
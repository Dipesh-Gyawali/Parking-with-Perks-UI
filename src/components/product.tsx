import { useState } from "react";
import "./_product.scss";

export const Product = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query

  // Define an array of product data
  const products = [
    {
      id: 1,
      imageSrc: "./src/assets/park.png",
      occupancy: "20%",
      parkedVehicles: 17,
      location: "Thamel",
      warnings: 2,
    },
    {
      id: 2,
      imageSrc: "./src/assets/park.png",
      occupancy: "30%",
      parkedVehicles: 18,
      location: "TU Ground",
      warnings: 5,
    },
    {
      id: 3,
      imageSrc: "./src/assets/park.png",
      occupancy: "50%",
      parkedVehicles: 30,
      location: "Ratna Park",
      warnings: 1,
    },

    // Add more product objects as needed
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="email"
          placeholder="Search by location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="product-main-container">
        {/* Map over the products array */}
        {filteredProducts.map((product, index) => (
          <a
            className="product-container"
            key={index}
            href={`#/parkingslot/${product.id}`}
          >
            <div className="img-container">
              <img src={product.imageSrc} alt="Parking Image" />
              <div className="percentage-overlay">
                <span>Occupancy: {product.occupancy}</span>
                <span>Parked Vehicles: {product.parkedVehicles}</span>
                <span>Location: {product.location}</span>
                <span>Warnings: {product.warnings}</span>
              </div>
            </div>
            <div className="content-container">
              <p>Location - {product.location}</p>
              <div className="table-container">
                <table cellPadding="8" cellSpacing="20">
                  <tr className="numbers">
                    <td>{product.occupancy}</td>
                    <td>{product.parkedVehicles}</td>
                    <td>{product.warnings}</td>
                  </tr>
                  <tr className="characters">
                    <td>Occupancy</td>
                    <td>Parked</td>
                    <td>Warning</td>
                  </tr>
                </table>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

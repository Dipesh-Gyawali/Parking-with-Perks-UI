import { useEffect, useState } from "react";
import "./_product.scss";

export const Product = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const [products, setProducts] = useState([]);

  const [newSlot, setNewSlot] = useState({
    id: "",
    imageSrc: "",
    location: "",
    freeSpace: "",
    occupiedSpace: "",
    // occupancy: "",
    // parkedVehicles: "",
    // warnings: "",
  });

  // Fetch data from db.json
  useEffect(() => {
    fetch("./data/product.json")
      .then((response) => response.json())
      .then((data) => {
        // Extracting the values from the object and converting them into an array
        const productsArray = Object.values(data);
        setProducts(productsArray);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Define an array of product data
  // const productss = [
  //   {
  //     id: 1,
  //     imageSrc: "./src/assets/park.png",
  //     location: "Thamel",
  //     // occupancy: "20%",
  //     // parkedVehicles: 17,
  //     // warnings: 2,
  //   },
  //   {
  //     id: 2,
  //     imageSrc: "./src/assets/park.png",
  //     location: "TU Ground",
  //     // occupancy: "30%",
  //     // parkedVehicles: 18,
  //     // warnings: 5,
  //   },
  //   {
  //     id: 3,
  //     imageSrc: "./src/assets/park.png",
  //     location: "Ratna Park",
  //     // occupancy: "50%",
  //     // parkedVehicles: 30,
  //     // warnings: 1,
  //   },

  //   // Add more product objects as needed
  // ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add the new slot to the beginning of products array
    // @ts-ignore
    setProducts([newSlot, ...products]);
    console.log("New Slot:", newSlot);
    // Update the products array directly
    // Close the modal
    setShowAddModal(false);
    // Reset newSlot state
    setNewSlot({
      id: "",
      imageSrc: "",
      location: "",
      freeSpace: "",
      occupiedSpace: "",
    });
  };

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
        {filteredProducts.map((product: any, index) => (
          <a
            className="product-container"
            key={index}
            href={`#/parkingslot/${product.id}`}
          >
            <div className="img-container">
              <img src={product.imageSrc} alt="Parking Image" />
              <div className="percentage-overlay">
                <span>Location: {product.location}</span>
                <span>Free Space: {product.freeSpace}</span>
                <span>Occupied Space: {product.occupiedSpace}</span>
                {/* <span>Warnings: {product.warnings}</span> */}
              </div>
            </div>
            <div className="content-container">
              <p>Location - {product.location}</p>
              <div className="table-container">
                <table cellPadding="8" cellSpacing="20">
                  <tr className="numbers">
                    <td>{product.freeSpace}</td>
                    <td>{product.occupiedSpace}</td>
                    <td>
                      {parseInt(product.freeSpace) +
                        parseInt(product.occupiedSpace)}
                    </td>
                  </tr>
                  <tr className="characters">
                    <td>Free Space </td>
                    <td>Occupied </td>
                    <td>Total</td>
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

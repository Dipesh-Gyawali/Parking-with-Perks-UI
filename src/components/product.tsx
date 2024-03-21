import { useState } from "react";
import "./_product.scss";

export const Product = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const [products, setProducts] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false); // State variable for showing add modal
  const [newSlot, setNewSlot] = useState({
    id: "",
    imageSrc: "",
    location: "",
    // occupancy: "",
    // parkedVehicles: "",
    // warnings: "",
  });

  // Define an array of product data
  const productss = [
    {
      id: 1,
      imageSrc: "./src/assets/park.png",
      location: "Thamel",
      // occupancy: "20%",
      // parkedVehicles: 17,
      // warnings: 2,
    },
    {
      id: 2,
      imageSrc: "./src/assets/park.png",
      location: "TU Ground",
      // occupancy: "30%",
      // parkedVehicles: 18,
      // warnings: 5,
    },
    {
      id: 3,
      imageSrc: "./src/assets/park.png",
      location: "Ratna Park",
      // occupancy: "50%",
      // parkedVehicles: 30,
      // warnings: 1,
    },

    // Add more product objects as needed
  ];

  // Filter products based on search query
  const filteredProducts = productss.filter((product) =>
    product.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddMoreSlots = () => {
    setShowAddModal(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSlot({
      ...newSlot,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new slot to the beginning of products array
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
      // occupancy: "",
      // parkedVehicles: "",
      // warnings: "",
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
        {filteredProducts.map((product, index) => (
          <a
            className="product-container"
            key={index}
            href={`#/parkingslot/${product.id}`}
          >
            <div className="img-container">
              <img src={product.imageSrc} alt="Parking Image" />
              <div className="percentage-overlay">
                <span>Location: {product.location}</span>
                {/* <span>Occupancy: {product.occupancy}</span> */}
                {/* <span>Parked Vehicles: {product.parkedVehicles}</span> */}
                {/* <span>Warnings: {product.warnings}</span> */}
              </div>
            </div>
            <div className="content-container">
              <p>Location - {product.location}</p>
              <div className="table-container">
                <table cellPadding="8" cellSpacing="20">
                  <tr className="numbers">
                    {/* <td>{product.occupancy}</td>
                    <td>{product.parkedVehicles}</td>
                    <td>{product.warnings}</td> */}
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
         {products.map((product, index) => (
          <a
            className="product-container"
            key={index}
            href={`#/parkingslot/${product.id}`}
          >
            <div className="img-container">
              <img src={product.imageSrc} alt="Parking Image" />
              <div className="percentage-overlay">
                <span>Location: {product.location}</span>
                {/* <span>Occupancy: {product.occupancy}</span> */}
                {/* <span>Parked Vehicles: {product.parkedVehicles}</span> */}
                {/* <span>Warnings: {product.warnings}</span> */}
              </div>
            </div>
            <div className="content-container">
              <p>Location - {product.location}</p>
              <div className="table-container">
                <table cellPadding="8" cellSpacing="20">
                  <tr className="numbers">
                    {/* <td>{product.occupancy}</td>
                    <td>{product.parkedVehicles}</td>
                    <td>{product.warnings}</td> */}
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
        <div className="add-more-slots" onClick={handleAddMoreSlots}>
          <div className="add">+</div>
          <p>Add Parking Space</p>
        </div>
      </div>

      {/* Add modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddModal(false)}>
              &times;
            </span>
            <h2>Add Parking Slot</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={newSlot.id}
                onChange={handleInputChange}
              />
              <label htmlFor="imageSrc">Image Source:</label>
              <input
                type="text"
                id="imageSrc"
                name="imageSrc"
                value={newSlot.imageSrc}
                onChange={handleInputChange}
              />
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newSlot.location}
                onChange={handleInputChange}
              />
              {/* <label htmlFor="occupancy">Occupancy:</label>
              <input
                type="text"
                id="occupancy"
                name="occupancy"
                value={newSlot.occupancy}
                onChange={handleInputChange}
              /> */}
              {/* <label htmlFor="parkedVehicles">Parked Vehicles:</label>
              <input
                type="text"
                id="parkedVehicles"
                name="parkedVehicles"
                value={newSlot.parkedVehicles}
                onChange={handleInputChange}
              /> */}
              {/* <label htmlFor="warnings">Warnings:</label>
              <input
                type="text"
                id="warnings"
                name="warnings"
                value={newSlot.warnings}
                onChange={handleInputChange}
              /> */}
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

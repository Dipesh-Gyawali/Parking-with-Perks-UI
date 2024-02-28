import "./_product.scss";

export const Product = () => {
    
  // Define an array of product data
  const products = [
    {
      imageSrc: "./src/assets/park.png",
      occupancy: "20%",
      parkedVehicles: 17,
      location: "Thamel",
      warnings: 2,
    },
    {
      imageSrc: "./src/assets/park.png",
      occupancy: "30%",
      parkedVehicles: 18,
      location: "TU Ground",
      warnings: 5,
    },
    {
      imageSrc: "./src/assets/park.png",
      occupancy: "50%",
      parkedVehicles: 30,
      location: "Ratna Park",
      warnings: 1,
    },

    // Add more product objects as needed
  ];

  return (
    <div className="product-main-container">
      {/* Map over the products array */}
      {products.map((product, index) => (
        <div className="product-container" key={index}>
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
        </div>
      ))}
    </div>
  );
};

import "./_product.scss";

export const Product = () => {
  return (
    <>
    <div className="product-main-container">
      <div className="product-container">
        <div className="img-container">
          <img src="./src/assets/park.png" alt="Parking Image" />
        </div>
        <div className="content-container">
          <p>Location - Street Name</p>
          <div className="table-container">
            <table cellPadding="8" cellSpacing="20">
              <tr className="numbers">
                <td>20%</td>
                <td>17</td>
                <td>2</td>
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
      <div className="product-container">
        <div className="img-container">
          <img src="./src/assets/park.png" alt="Parking Image" />
        </div>
        <div className="content-container">
          <p>Location - Street Name</p>
          <div className="table-container">
            <table cellPadding="8" cellSpacing="20">
              <tr className="numbers">
                <td>20%</td>
                <td>17</td>
                <td>2</td>
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
      </div>
    </>
  );
};

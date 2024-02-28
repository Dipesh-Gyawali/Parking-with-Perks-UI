import "./_product.scss";

export const Product = () => {
  return (
    <>
      <div className="product-container">
        <div>
          <img src="./src/assets/park.png" alt="Parking Image" />
        </div>
        <div className="content-container">
          <p>Location - Street Name</p>
          <div>
          <table border="1">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
                <td>Row 1, Column 3</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
                <td>Row 2, Column 3</td>
            </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

// Ensure correct import of useParams from react-router-dom
import { useParams } from "react-router-dom";
import "./_productDetail.scss";

export const ProductDetail = () => {
  // Retrieve the id parameter from the URL
  const { id } = useParams();
  console.log("ID:", id); // Check if the id is correctly retrieved

  return (
    <>
      <div className="product-detail-main-container">
        <div className="title">
          <a href={`#/product/`}> --- Back</a>
          <p>Overview</p>
        </div>
        <div>
          <div className="table-container">
            <table cellPadding="8" cellSpacing="20">
              <tr className="numbers">
                <td>Free Spaces</td>
                <td>Occupies Spaces</td>
                <td>Unknown</td>
                <td>Total Space</td>
              </tr>
              <tr className="characters">
                <td>5</td>
                <td>20</td>
                <td>8</td>
                <td>33</td>
              </tr>
            </table>
          </div>
        </div>
        <div></div>
      </div>
      ;
    </>
  );
};

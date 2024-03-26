// Ensure correct import of useParams from react-router-dom
import { useParams } from "react-router-dom";
import "./_productDetail.scss";
import { IoMdArrowBack } from "react-icons/io";
import { PieChart, Pie, Tooltip } from "recharts";
import { useEffect, useState } from "react";

export const ProductDetail = () => {
  const { id } = useParams();
  console.log("ID:", id);
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    fetch("./data/productDetail.json")
      .then((response) => response.json())
      .then((data) => {
        const detail = data[`place${id}`];
        setDetailData(detail);
      })
      .catch((error) => console.error("Error fetching detail data:", error));
  }, [id]);

  // const data01 = [
  //   { name: "Free Space", value: 5 },
  //   { name: "Occupied Space", value: 20 },
  //   // { name: "Unknown", value: 8 },
  //   { name: "Total Space", value: 33 },
  // ];

  return (
    <>
      <div className="product-detail-main-container">
        <div className="title">
          <a href={`#/parkingslot/`}>
            <IoMdArrowBack /> Back
          </a>
          <p>Overview</p>
        </div>
        <div className="main-card-container">
          {detailData && (
            <>
              <div className="card-container">
                <p>Free Space</p>
                <span>{detailData.free}</span>
              </div>
              <div className="card-container">
                <p>Occupied Spaces</p>
                <span>{detailData.occupied}</span>
              </div>
              <div className="card-container">
                <p>Total Space</p>
                <span>
                  {parseInt(detailData.free) + parseInt(detailData.occupied)}
                </span>
              </div>
            </>
          )}
        </div>
        {detailData && (
          <div className="main-chart-container">
            <div className="chart-container">
              <p>Occupancy Status</p>
              <div>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={[
                      { name: "Free Space", value: parseInt(detailData.free) },
                      {
                        name: "Occupied Space",
                        value: parseInt(detailData.occupied),
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            </div>
            <div className="chart-content-container">
              <p>Rules</p>
              <ul>
                <li>Vehicles without proper authorization are not allowed.</li>
                <li>
                  Parking is only permitted during specified hours. Violators
                  may be subject to fines or towing.
                </li>
                <li>
                  Pay required parking fees using designated methods, and
                  display proof of payment.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

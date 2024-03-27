import { useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { PieChart, Pie, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import "./_productDetail.scss";

export const ProductDetail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    fetch("./data/product.json")
      .then((response) => response.json())
      .then((data) => {
        const detail = data[`place${id}`];
        setDetailData(detail);
      })
      .catch((error) => console.error("Error fetching detail data:", error));
  }, [id]);

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
                <span>{detailData.freeSpace}</span>
              </div>
              <div className="card-container">
                <p>Occupied Spaces</p>
                <span>{detailData.occupiedSpace}</span>
              </div>
              <div className="card-container">
                <p>Total Space</p>
                <span>
                  {parseInt(detailData.freeSpace) +
                    parseInt(detailData.occupiedSpace)}
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
                      {
                        name: "Free Space",
                        value: parseInt(detailData.freeSpace),
                      },
                      {
                        name: "Occupied Space",
                        value: parseInt(detailData.occupiedSpace),
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
              <video controls>
                <source src="../src/assets/reversed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

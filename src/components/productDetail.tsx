// Ensure correct import of useParams from react-router-dom
import { useParams } from "react-router-dom";
import "./_productDetail.scss";
import { IoMdArrowBack } from "react-icons/io";
import { PieChart, Pie, Tooltip } from "recharts";

export const ProductDetail = () => {
  const { id } = useParams();
  console.log("ID:", id);

  const data01 = [
    { name: "Free Space", value: 5 },
    { name: "Occupied Space", value: 20 },
    { name: "Unknown", value: 8 },
    { name: "Total Space", value: 33 },
  ];

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
          <div className="card-container">
            <p>Free Space</p>
            <span>5</span>
          </div>
          <div className="card-container">
            <p>Occupied Spaces</p>
            <span>20</span>
          </div>
          <div className="card-container">
            <p>Unknown</p>
            <span>8</span>
          </div>
          <div className="card-container">
            <p>Total Space</p>
            <span>33</span>
          </div>
        </div>
        <div className="main-chart-container">
          <div className="chart-container">
            <p>Occupancy Status</p>
            <div>
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  // fill="#00C399"
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
                Parking is only permitted during specified hours. Violators may
                be subject to fines or towing.
              </li>
              <li>
                Pay required parking fees using designated methods, and display
                proof of payment.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

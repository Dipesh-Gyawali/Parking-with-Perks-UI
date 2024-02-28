// Ensure correct import of useParams from react-router-dom
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  // Retrieve the id parameter from the URL
  const { id } = useParams();
  console.log("ID:", id); // Check if the id is correctly retrieved

  return <div>HELLO</div>;
};

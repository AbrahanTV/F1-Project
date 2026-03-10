import { Link } from "react-router";
import "../styles/styles.css";

const BackBtn = () => {
  return (
    <>
      <Link to="/" className="back-btn btn btn-lg mb-3 text-white fw-bold">
        Back
      </Link>
    </>
  );
};

export default BackBtn;

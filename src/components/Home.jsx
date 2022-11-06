import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { SEO } from "../exports/Exports";

const Home = () => {
  return (
    <>
      <SEO
        title={"Custom Counter App"}
        description={"AltSchool Africa Second Semester Exam Project"}
        name={"Tobechukwu Uka"}
      />
      <div className="home">
        <div className="center">
          <div className="homepage">
            <h1>Counter Project</h1>
            <Link to="/counter">
              <button>View Counter Project</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

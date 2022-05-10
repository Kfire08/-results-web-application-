import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "./Result.css";

function Result({ arrayRoll }) {
  const [rollNumber, setRollNumber] = useState(arrayRoll);
  const [resData, setResData] = useState([]);
  useEffect(() => {
    setRollNumber(arrayRoll);
    console.log(rollNumber.length);
    console.log(arrayRoll.length);
    const postUsers = async () => {
      const res = await axios.post(
        "http://roll-number-proedge.herokuapp.com/test",
        { rollNumber }
      );
      const newRes = res.data;
      setResData(newRes);
    };
    postUsers();
    // eslint-disable-next-line
  }, [rollNumber]);
  return (
    <div>
      {resData.length === 0 ? (
        <Loader />
      ) : (
        <table className="container">
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {rollNumber.map((item, index) => {
              return (
                <tr key={Math.random().toString()}>
                  <td>{item}</td>
                  <td>{resData === [] ? "" : resData[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Result;

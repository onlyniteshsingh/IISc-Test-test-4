import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Timetaken = ({ icon, trans, time }) => {
  const arr = new Array(trans + 1).fill(icon);
  return (
    <div className="flex justify-center">
      {trans === 0 ? (
        <div>
          <div className="flex justify-center pb-3.5">{icon}</div>
          <h2 >{`${time} minutes`}</h2>
        </div>
      ) : (
        <div>
          <p className="flex justify-center">{`${trans} transfers`}</p>
          <div>
            <div className="flex justify-center p-2">
              {arr.map((a, index) => {
                return (
                  <div>
                    {a}
                    {index !== arr.length - 1 && (
                      <ArrowForwardIosIcon fontSize="small" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <h2 className="flex justify-center">{`${time} minutes`}</h2>
        </div>
      )}
    </div>
  );
};

export default Timetaken;

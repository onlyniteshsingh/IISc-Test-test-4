import React from "react";
// icons
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Service = ({ service }) => {
  const serivefunction = () => {
    if (service === 1) {
      return (
        <div>
          <div className="flex justify-center pb-2">
            <AirlineSeatReclineNormalIcon />
          </div>
          <h1 className="flex justify-center">Ordinary</h1>
        </div>
      );
    }
    else if (service === 2) {
      return (
        <div>
          <div className="flex justify-center pb-2">
            <AirlineSeatReclineExtraIcon />
          </div>
          <h1 className="flex justify-center pb-2">Express Non-AC</h1>
        </div>
      );
    }
    else if (service === 3) {
      return (
        <div>
          <div className="flex justify-center pb-2">
            <AirlineSeatReclineExtraIcon />
            <AcUnitIcon />
          </div>
          <h1 className="flex justify-center pb-2">Express AC</h1>
        </div>
      );
    }
  };


  return <div>
    {serivefunction()}
  </div>;
};

export default Service;

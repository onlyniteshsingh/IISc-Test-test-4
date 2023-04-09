import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Timetaken from "./Timetaken";
import Seats from "./Seats";
import Service from "./Service";

//importing icons from material UI
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SubwayIcon from "@mui/icons-material/Subway";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";

export default function BasicTable(props) {
  // variable to store the JSON file
  let jsonFile = null;
  // requiring the correct JSON file
  if (props.secondOption === "< 5 km")
    jsonFile = require("../db-json/sample_db_0km.json");
  else if (props.secondOption === "5 - 10 km")
    jsonFile = require("../db-json/sample_db_5km.json");
  else if (props.secondOption === "10 - 15 km")
    jsonFile = require("../db-json/sample_db_10km.json");
  else if (props.secondOption === "15 - 20 km")
    jsonFile = require("../db-json/sample_db_15km.json");
  else if (props.secondOption === "20 - 25 km")
    jsonFile = require("../db-json/sample_db_20km.json");
  else jsonFile = require("../db-json/sample_db_25km.json");

  return (
    // Table from Material UI Component library
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          outlineStyle: "solid",
          outlineWidth: "thin",
          margin: "3px",
        }}
        aria-label="simple table"
      >
        {/* Head of the Table */}
        <TableHead >
          {/* adding a row each time <TableRow element is called */}
          <TableRow
            sx={{
              outlineStyle: "solid",
              outlineWidth: "thin",
            }}
          >
            {/* adding a column to given row */}
            <TableCell
              sx={{
                backgroundColor: "#C7E9B0",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div className="flex justify-center items-center">
                Bus Route 1
              </div>
              <div className="flex justify-center items-center">
                <input type="radio" value="Bus Route 1" name="Bus Route 1" />
              </div>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#B3E5BE",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div className="flex justify-center items-center">
                Bus Route 2
              </div>
              <div className="flex justify-center items-center">
                <input type="radio" value="Bus Route 2" name="Bus Route 2" />
              </div>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#FFF1DC",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div className="flex justify-center items-center">
                { jsonFile.Data[0].mode_4}
              </div>
              {/* showing data according to the selection in previous page */}
              <div className="flex justify-center items-center">
                <input type="radio" value={ jsonFile.Data[0].mode_4} name={ jsonFile.Data[0].mode_4} />
              </div>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#94AF9F",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div className="flex justify-center items-center">
                {props.firstOption=="Own Car"? jsonFile.Data[0].mode_8 : jsonFile.Data[0].mode_9 }
              </div>
              <div className="flex justify-center items-center">
                <input type="radio" value={props.firstOption=="Own Car"? jsonFile.Data[0].mode_8 : jsonFile.Data[0].mode_9} name={ props.firstOption=="Own Car"? jsonFile.Data[0].mode_8 : jsonFile.Data[0].mode_9} />
              </div>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E9EDC9",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div className="flex justify-center items-center">
                {props.firstOption=="Auto"? jsonFile.Data[0].mode_7 : "Ride-hailing Car" }
              </div>
              <div className="flex justify-center items-center">
                <input type="radio" value={props.firstOption=="Own Car"? jsonFile.Data[0].mode_7 : "Ola / Uber"} name={ props.firstOption=="Own Car"? jsonFile.Data[0].mode_7 : "Ola / Uber"} />
              </div>
              
            </TableCell>
          </TableRow>
        </TableHead>

        {/* body of table  */}
        <TableBody>
          {/* 2nd row */}
          <TableRow
            sx={{
              backgroundColor: "#FBFFB1",
              outlineStyle: "solid",
              outlineWidth: "thin",
            }}
          >
            <TableCell align="center" colSpan={5}>
              Total travel time spent while inside the vehicle
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#C7E9B0",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Timetaken
                time={jsonFile.Data[0]["mode_1.ivtt"]}
                icon={<DirectionsBusIcon />}
                trans={jsonFile.Data[0]["mode_1.trans"]}
              />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#B3E5BE",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Timetaken
                time={jsonFile.Data[0]["mode_2.ivtt"]}
                icon={<DirectionsBusIcon />}
                trans={jsonFile.Data[0]["mode_2.trans"]}
              />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#FFF1DC",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Timetaken
                time={jsonFile.Data[0]["mode_4.ivtt"]}
                icon={
                  props.secondOption === "< 5 km" ? (
                    <DirectionsBikeIcon />
                  ) : (
                    <SubwayIcon />
                  )
                }
                trans={0}
              />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#94AF9F",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Timetaken
                time={
                  props.firstOption === "Own Car"
                    ? jsonFile.Data[0]["mode_8.ivtt"]
                    : jsonFile.Data[0]["mode_9.ivtt"]
                }
                icon={
                  props.firstOption === "Own Car" ? (
                    <DirectionsCarIcon />
                  ) : (
                    <TwoWheelerIcon />
                  )
                }
                trans={0}
              />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E9EDC9",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Timetaken
                time={
                  props.firstOption === "Auto"
                    ? jsonFile.Data[0]["mode_7.ivtt"]
                    : jsonFile.Data[0]["mode_5.ivtt"]
                }
                icon={
                  props.firstOption === "Auto" ? (
                    <ElectricRickshawIcon />
                  ) : (
                    <LocalTaxiIcon />
                  )
                }
                trans={0}
              />
            </TableCell>
          </TableRow>

          {/* 3rd row */}

          <TableRow>
            <TableCell
              align="center"
              colSpan={5}
              sx={{
                backgroundColor: "#FBFFB1",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Total travel time spent outside vehicle(s)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#C7E9B0",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">
                {`${
                  jsonFile.Data[0]["mode_1.walktime"] +
                  jsonFile.Data[0]["mode_1.waittime"]
                } min`}
              </h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#B3E5BE",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">
                {`${
                  jsonFile.Data[0]["mode_2.walktime"] +
                  jsonFile.Data[0]["mode_2.waittime"]
                } min`}
              </h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#FFF1DC",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">
                {`${
                  jsonFile.Data[0]["mode_4.walktime"] +
                  jsonFile.Data[0]["mode_4.waittime"]
                } min`}
              </h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#94AF9F",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              {props.firstOption === "Own Car" ? (
                <h1 className="flex justify-center">
                  {`${
                    jsonFile.Data[0]["mode_8.walktime"] +
                    jsonFile.Data[0]["mode_8.waittime"]
                  } min`}
                </h1>
              ) : (
                <h1 className="flex justify-center">
                  {`${
                    jsonFile.Data[0]["mode_9.walktime"] +
                    jsonFile.Data[0]["mode_9.waittime"]
                  } min`}
                </h1>
              )}
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E9EDC9",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              {props.firstOption === "Auto" ? (
                <h1 className="flex justify-center">
                  {`${
                    jsonFile.Data[0]["mode_7.walktime"] +
                    jsonFile.Data[0]["mode_7.waittime"]
                  } min`}
                </h1>
              ) : (
                <h1 className="flex justify-center">
                  {`${
                    jsonFile.Data[0]["mode_5.walktime"] +
                    jsonFile.Data[0]["mode_5.waittime"]
                  } min`}
                </h1>
              )}
            </TableCell>
          </TableRow>

          {/* 4th row */}
          <TableRow>
            <TableCell
              align="center"
              colSpan={5}
              sx={{
                backgroundColor: "#FBFFB1",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Possible delay due to traffic congestion or other uncertainties
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#C7E9B0",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`... up to ${jsonFile.Data[0]["mode_1.tvariab"]} min more`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#B3E5BE",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`... up to ${jsonFile.Data[0]["mode_2.tvariab"]} min more`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#FFF1DC",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`... up to ${jsonFile.Data[0]["mode_4.tvariab"]} min more`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#94AF9F",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`... up to ${
                props.firstOption === "Own Car"
                  ? jsonFile.Data[0]["mode_8.tvariab"]
                  : jsonFile.Data[0]["mode_9.tvariab"]
              } min more`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E9EDC9",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`... up to ${
                props.firstOption === "Auto"
                  ? jsonFile.Data[0]["mode_7.tvariab"]
                  : jsonFile.Data[0]["mode_5.tvariab"]
              } min more`}</h1>
            </TableCell>
          </TableRow>

          {/* 5th row */}
          <TableRow>
            <TableCell
              align="center"
              colSpan={5}
              sx={{
                backgroundColor: "#FBFFB1",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Total one-way cost of travel
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#C7E9B0",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`Rs. ${jsonFile.Data[0]["mode_1.tcost"]}`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#B3E5BE",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`Rs. ${jsonFile.Data[0]["mode_2.tcost"]}`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#FFF1DC",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`Rs. ${jsonFile.Data[0]["mode_4.tcost"]}`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#94AF9F",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`Rs. ${
                props.firstOption === "Own Car"
                  ? jsonFile.Data[0]["mode_8.tcost"]
                  : jsonFile.Data[0]["mode_9.tcost"]
              }`}</h1>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E9EDC9",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <h1 className="flex justify-center">{`Rs. ${
                props.firstOption === "Auto"
                  ? jsonFile.Data[0]["mode_7.tcost"]
                  : jsonFile.Data[0]["mode_5.tcost"]
              }`}</h1>
            </TableCell>
          </TableRow>

          {/* 6th row */}
          <TableRow>
            <TableCell
              align="center"
              colSpan={5}
              sx={{
                backgroundColor: "#FBFFB1",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Extent of crowding in the vehicle
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#C7E9B0",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Seats crowd={jsonFile.Data[0]["mode_1.crowd"]} />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#B3E5BE",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Seats crowd={jsonFile.Data[0]["mode_2.crowd"]} />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#FFF1DC",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Seats crowd={jsonFile.Data[0]["mode_4.crowd"]} />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#94AF9F",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E9EDC9",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
          </TableRow>

          {/* 7th row */}
          <TableRow>
            <TableCell
              align="center"
              colSpan={5}
              sx={{
                backgroundColor: "#FBFFB1",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Service type
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#C7E9B0",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Service service={jsonFile.Data[0]["mode_1.serv"]} />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#B3E5BE",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Service service={jsonFile.Data[0]["mode_2.serv"]} />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#FFF1DC",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
            <TableCell
              sx={{
                backgroundColor: "#94AF9F",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
            <TableCell
              sx={{
                backgroundColor: "#E9EDC9",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

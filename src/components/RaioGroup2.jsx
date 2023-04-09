// radio button gorups for ques 2 on page 1 


import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup2(props) {
  const handleChange = (event) => {
    props.callBackData(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <FormControl>
        <RadioGroup
          // row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <div className=" justify-center items-center pt-5 text-lg">
            <div >
              Q2: What is the total distance between your home and workplace?
            </div>
            <div className="flex flex-col pl-7">
              <FormControlLabel
                value="< 5 km"
                control={<Radio />}
                label="< 5 km"
              />
              <FormControlLabel
                value="5 - 10 km"
                control={<Radio />}
                label="5 - 10 km"
              />
              <FormControlLabel
                value="10- 15 km"
                control={<Radio />}
                label="10- 15 km"
              />
              <FormControlLabel
                value="15- 20 km"
                control={<Radio />}
                label="15- 20 km"
              />
              <FormControlLabel
                value="20- 25 km"
                control={<Radio />}
                label="20- 25 km"
              />
              <FormControlLabel
                value="> 25 km"
                control={<Radio />}
                label="> 25 km"
              />
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

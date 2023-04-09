// radio button gorups for ques 1 on page 1 


import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup(props) {
  const handleChange = (event) => {
    props.callBackData(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <div className=" justify-center items-center pt-5 text-lg">
          <div >
            Q1: What is your most frequently used means of travel from your home
            to work location?
          </div>
          <div className="flex flex-col pl-7">
            <FormControlLabel value="Bus" control={<Radio />} label="Bus" />
            <FormControlLabel value="Metro" control={<Radio />} label="Metro" />
            <FormControlLabel
              value="Own Two-wheeler"
              control={<Radio />}
              label="Own Two-wheeler"
            />
            <FormControlLabel
              value="Own Car"
              control={<Radio />}
              label="Own Car"
            />
            <FormControlLabel
              value="Walk / Bicycle"
              control={<Radio />}
              label="Walk / Bicycle"
            />
            <FormControlLabel value="Auto" control={<Radio />} label="Auto" />
            <FormControlLabel
              value="Ola / Uber"
              control={<Radio />}
              label="App based ride hailing cab services including Ola / Uber"
            />
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}

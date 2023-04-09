import { React, useState} from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import RadioGroup2 from "./RaioGroup2";
import RadioGroup from "./RadioGroup";
import { Helmet } from 'react-helmet';

const Page1 = () => {
  const [firstOption, setfirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [error, seterror] = useState(false)
  
  const navigate = useNavigate();

  // requiring data that user selected and storing it
  const parentCallBack1 = (data) => {
    setfirstOption(data);
  };

  const parentCallBack2 = (data) => {
    setSecondOption(data);
  };

  // handling click on clicking the submit button
  // if user haven't choose any one or both of the option then it will show an error 
  // otherwise it will navigate us to the table
  const handleClick = (e) => {
    if (firstOption ==="" || secondOption==="") {
      seterror(true);
      setTimeout(() => seterror(false), 1500);
    }
    else {
      seterror(false);
      navigate("/Page2", {
        state: {
          firstOption: firstOption,
          secondOption: secondOption,
        },
      });
    }
  };

  return (
    <div>
      {/* changing the title according to the page */}
      <Helmet>
        <title>Respondent Travel profile</title>
      </Helmet>
      <div className="flex flex-row">
        <div className="p-5">
          {/* calling the radio button groups that is stored in some other component and requiring the 
              user input through a call back function 
           */}
          <RadioGroup callBackData={parentCallBack1} />
        </div>

        <div className="p-5">
          <RadioGroup2 callBackData={parentCallBack2} />
        </div>
      </div>
      {/* throughing an error if user haven't selected any one or both of the option */}
        {error && <h3 className="flex justify-center text-red-700">Please click select all fields</h3>}
      <div className="flex justify-center items-center p-5">
        <Button onClick={handleClick} variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Page1;

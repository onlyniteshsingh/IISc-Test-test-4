import React from "react";
import { useLocation } from "react-router-dom";
import Table from "./BasicTable";
import { Helmet } from 'react-helmet';

const Page2 = () => {
  const { state } = useLocation();
  


  return (
    <div>
      {/* changing the title of page */}
      <Helmet>
        <title>Mode Choice</title>
      </Helmet>
      {/* calling the table commponent */}
      <Table firstOption={state.firstOption} secondOption={state.secondOption} />
      
    </div>
  );
};

export default Page2;

import React from "react";
import { useTheme } from "styled-components";
import Layout from "components/Layout";
import ConsultantSuccessTemplate from "templates/ConsultantSuccessTemplate";

const ConsultantSuccess: React.FC = () => {
  const theme = useTheme();
  return <ConsultantSuccessTemplate />;
};

export default ConsultantSuccess;

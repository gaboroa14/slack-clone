import { useEffect, useState } from "react";
import Plan from "../../components/Plan";

const Plans = () => {
  const [planes, setPlanes] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/plans")
      .then((response) => response.json())
      .then((planes) => setPlanes(planes));
  });

  return planes?.map((plan) => {
    return <Plan {...plan}></Plan>;
  });
};

export default Plans;

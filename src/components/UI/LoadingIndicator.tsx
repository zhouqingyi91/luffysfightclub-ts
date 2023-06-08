import { CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const LoadingIndicator = () => {
  const cssOverride: CSSProperties = {
    margin: "0 auto",
  }
  return (
    <div className=" py-20">
      <BarLoader
        cssOverride={cssOverride}
        color={"#ccc"}
        width={"80%"}
        height={"0.4rem"}
      />
    </div>

  );
};

export default LoadingIndicator;
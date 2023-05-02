import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader"

type PropsType = {
  isLoading: boolean
}
const LoadingIndicator = ({ isLoading }: PropsType) => {
  const cssOverride: CSSProperties = {
    paddingTop: "2.5rem",
    textAlign: "center",
  }
  return (
    <BeatLoader
      cssOverride={cssOverride}
      color={"#ccc"}
      loading={isLoading}
      size={"2rem"}
      margin={"1.5rem"}
    />
  );
};

export default LoadingIndicator;
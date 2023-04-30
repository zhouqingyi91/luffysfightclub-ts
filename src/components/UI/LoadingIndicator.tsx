import BeatLoader from "react-spinners/BeatLoader"

type PropsType = {
  isLoading?: boolean
}
const LoadingIndicator = ({ isLoading = true }: PropsType) => {
  return (
    <div className={"text-center"}>
      <BeatLoader color={"#ccc"} loading={isLoading} size={"3vw"} margin={"1.5vw"} />
    </div>
  );
};

export default LoadingIndicator;
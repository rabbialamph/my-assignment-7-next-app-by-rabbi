
import { RingLoader } from "react-spinners";
// import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen font-bold text-5xl">
        {/* Global loading...... */}
        <RingLoader color="#ad46ff" />
      {/* <HashLoader color="#ad46ff" /> */}
    </div>
  );
};

export default loading;
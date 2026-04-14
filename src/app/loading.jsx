

import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen font-bold text-5xl">

      <HashLoader color="#22c55e" />
    </div>
  );
};

export default loading;
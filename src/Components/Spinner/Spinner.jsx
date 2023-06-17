import React from 'react';
import { BounceLoader } from "react-spinners";
function Spinner() {
    return (
        <div
        className="
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      "
        >
            <BounceLoader color="#1E40AF" />
      </div>
    );
}

export default Spinner;

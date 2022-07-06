import React,{useState,useEffect,useContext} from "react";
import { appContext } from "../App";

const MobileNoInput = () => {
  const user = useContext(appContext)

  const [mobileNO, setMobileNo] = useState();


    useEffect(() => setMobileNo(user.mobileNo), [user]);


  return (
    <>
      <div className="w-50 m-auto mt-5">
        <label className="form-label">
          Mobile no. 
        </label>
        <input
          value={mobileNO}
          type="Mobile"
          name="Mobile"
          onChange={(e)=>{user.setMobileNo(e.target.value)}}
          className="form-control"
          placeholder="Enter Phone no here"
        />
      </div>
    </>
  );
};

export default MobileNoInput;

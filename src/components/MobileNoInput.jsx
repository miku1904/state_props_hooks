import React,{useState,useEffect} from "react";

const MobileNoInput = (props) => {
  const [mobileNO, setMobileNo] = useState();

    useEffect(() => setMobileNo(props.mobileNo), [props]);


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
          onChange={(e)=>{props.setMobileNo(e.target.value)}}
          className="form-control"
          placeholder="Enter Phone no here"
        />
      </div>
    </>
  );
};

export default MobileNoInput;

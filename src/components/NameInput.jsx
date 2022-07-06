import React,{useState,useEffect,useContext} from "react";
import { appContext } from "../App";

const NameInput = () => {
    const user = useContext(appContext);
  
    const [name, setName] = useState();

    useEffect(() => setName(user.name), [user]);


    
  return (
    <>
      <div className="w-50 m-auto mt-5">
        <label className="form-label">
          Name
        </label>
        <input
        value={name}
          type="Name"
          name="name"
          onChange={(e)=>{user.setName(e.target.value)}}
          className="form-control"
          placeholder="Enter Name Here"
        />
      </div>
    </>
  );
};

export default NameInput;

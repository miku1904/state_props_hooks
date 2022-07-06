import React,{useState,useEffect} from "react";

const NameInput = (props) => {
    const [name, setName] = useState();

    useEffect(() => setName(props.name), [props]);


    
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
          onChange={(e)=>{props.setName(e.target.value)}}
          className="form-control"
          placeholder="Enter Name Here"
        />
      </div>
    </>
  );
};

export default NameInput;

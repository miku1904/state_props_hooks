import React,{useState,useEffect} from "react";

const EmailInput = (props) => {

    const [email, setEmail] = useState();

    useEffect(() => setEmail(props.email), [props]);
  return (
    <>
      <div className="w-50 m-auto mt-5">
        <label  className="form-label">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e)=>{props.setEmail(e.target.value)}}
          className="form-control"
          placeholder="name@example.com"
        />
      </div>
    </>
  );
};

export default EmailInput;

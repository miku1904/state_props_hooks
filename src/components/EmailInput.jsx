import React,{useState,useEffect,useContext} from "react";
import { appContext } from "../App";

const EmailInput = () => {
    const user = useContext(appContext);

    const [email, setEmail] = useState();

    useEffect(() => setEmail(user.email), [user]);
  return (
    <>
      <div className="w-50 m-auto mt-5">
        <label  className="form-label">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e)=>{user.setEmail(e.target.value)}}
          className="form-control"
          placeholder="name@example.com"
        />
      </div>
    </>
  );
};

export default EmailInput;

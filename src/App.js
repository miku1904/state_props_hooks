import { useState } from 'react';

import './App.css';
import EmailInput from './components/EmailInput';
import NameInput from './components/NameInput';
import Output from './components/Output';
import MobileNoInput from './components/MobileNoInput';

function App() {
  const [name, setName] = useState("Dhamik")
  const [email, setEmail] = useState("dharmik@gmail.com")
  const [mobileNo , setMobileNo] = useState("9522554855")
  const [data, setData] = useState({
    name:"",
    email:"",
    mobileNo:""
  })
    
let handleSubmit = () =>{
    setData({
      name:name,
      email:email,
      mobileNo:mobileNo
    }) 
  }

  let ClearData =() =>{
    setName("")
    setEmail("")
    setMobileNo("")
  }


  return (
    <>
    <div className="App container w-50 border border-5 rounded-3 bg-light " >
    
    <NameInput name={name} setName={setName}></NameInput>
    <EmailInput email={email} setEmail={setEmail}></EmailInput>
    <MobileNoInput mobileNo={mobileNo} setMobileNo={setMobileNo}></MobileNoInput>
    <button type="submit" className="btn btn-primary shadow-none m-3" onClick={handleSubmit}>Submit</button>
    <button className="btn btn-primary shadow-none m-3"onClick={ClearData}>Clear</button>
    </div>

    <Output  name={data.name} email={data.email} mobileNo={data.mobileNo} ></Output>
    
    </>
  );
}

export default App;

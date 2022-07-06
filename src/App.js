import React,{ useState } from 'react';

import './App.css';
import EmailInput from './components/EmailInput';
import NameInput from './components/NameInput';
import Output from './components/Output';
import MobileNoInput from './components/MobileNoInput';

const appContext = React.createContext();

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
    <appContext.Provider value={{name,email,mobileNo,setName,setEmail,setMobileNo}}>
    <div className="App container w-50 border border-5 rounded-3 bg-light " >
    
    <NameInput ></NameInput>
    <EmailInput ></EmailInput>
    <MobileNoInput></MobileNoInput>
    <button type="submit" className="btn btn-primary shadow-none m-3" onClick={handleSubmit}>Submit</button>
    <button className="btn btn-primary shadow-none m-3"onClick={ClearData}>Clear</button>
    </div>

    <Output  name={data.name} email={data.email} mobileNo={data.mobileNo} ></Output>
    </appContext.Provider>
    </>
  );
}

export {App,appContext};

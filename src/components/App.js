import './App.css';
import './index.css';

import { useState,useEffect } from 'react';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contact])
  }
  useEffect(()=>{
    const retrieveContacts=JSON.parse(sessionStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts) setContacts(retrieveContacts)
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);
  // const contacts=[
  //   {
  //     id: "1",
  //     name:"raghav",
  //     email: "rky@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name:"mukesh",
  //     email: "mu@gmail.com"
  //   },
  // ]

  return (
   <div className='ui container'>
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
   </div>
  );
}

export default App;

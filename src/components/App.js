import './App.css';
import './index.css';


import Header from "./Header"
import AddContact from "./AddContact"
import ContactCard from "./ContactCard"
import ContactList from "./ContactList"
function App() {

  const contacts=[
    {
      id: "1",
      name:"raghav",
      email: "rky@gmail.com"
    },
    {
      id: "2",
      name:"mukesh",
      email: "mu@gmail.com"
    },
  ]

  return (
   <div className='ui container'>
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
   </div>
  );
}

export default App;

import React from 'react'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import Contacts from '../contacts/Contacts'


const Home = () => {
    return (
<div className="jumbotron my-3">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is Home Page.</p>
  <hr className="my-4"/>
  <p>This is the main page of our FullStack application</p>
  <div className='row'>
  <div className='col m-4 p-0'>
  <ContactForm/>
  </div>
  <div className='col'>
  <div className="m-1 p-0"><ContactFilter /></div>
  <Contacts/>
  </div>
  </div>
  
  
</div>
    )
}

export default Home

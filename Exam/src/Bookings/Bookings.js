import React from 'react'
import '../Bookings/Bookings.css'
const Bookings = () => {
  return (
    <div>
        <h1>RESERVE & EXPLORE</h1>
       

        <form action="">
            <label for="name">Name:</label>
         <input type="text" name="name" id="name" required></input>

         <label for="name" >Email:</label>
         <input type="email" name ="email" id="email" required></input>

         <label for ="name">Destination:</label>
         <input type="text" name="destination" id="destination" required></input>
<br></br>
         <label for="departure date">Departure Date:</label>
         <input type="date" name="departure date" id="departure date" required></input>
<br></br>
         <label for="Return date">Return Date:</label>
         <input type="date" name="Return date" id="Return date" required></input>
<br></br>
         <label for=" No of Places">No of Places:</label>
 <input type="text" name="No of Places" id="No of Places" required></input>
<br></br>
         <button type="Submit">Book now</button>
       

        </form>
       
    </div>
  )
}

export default Bookings
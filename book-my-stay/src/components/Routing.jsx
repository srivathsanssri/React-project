import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {Login} from './Login.jsx'
import BgVideo from './BgVideo'
import BookingForm from './BookingForm'
import { Contact } from './Contact'
import { Book } from './Book'

// import RoomAvailabilityComponent from './RoomAvailabilityComponent'


export const Routing = () => {
  return (
    <div>
        <Routes>
            
            <Route  path='/' element={<BgVideo/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/BookingForm' element={<BookingForm/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Book' element={<Book/>}/>
        </Routes>
        
    </div>
  )
}

import React from 'react';
import './Admin.css';
import Sidebar from '../../Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom';
import AddEvent from '../../AddEvent/AddEvent';
import ListEvent from '../../ListEvent/ListEvent';

const Admin = () => {
    return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addevent' element={<AddEvent />} />
          <Route path='/listevent' element={<ListEvent />} />
        </Routes>
       
    </div>
  )
}

export default Admin

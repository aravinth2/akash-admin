import React from 'react';
import './dashboardpage.css';
import profile from './profile.jpg';
import {FaBell} from 'react-icons/fa';
import {TbSquareRoundedArrowDown} from 'react-icons/tb';
import {FaTags} from 'react-icons/fa';
import {AiOutlineLike} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import Linechart from '../charts/linechart';
import Biechart from '../charts/biechart';



function Dashboard() {
  return (
      <div className='main-grid'>
        <div className='left-grid'>
          <div className='close-box'>
          <h1>Board.</h1>
            <ul>
                <li className='first-list'>DashBoard</li>
                <li>Transaction</li>
                <li>Schedules</li>
                <li>Users</li>
                <li>Settings</li>
                <li className='last-list'>Help</li>
                <li>Contact Us</li>
            </ul>
            </div>
        </div>

        <div className='right-grid'>

          <nav>
            <h2>Board.</h2>
            <input type='search' placeholder='Search..?' />
             <FaBell className='icons'/>
            <img src={profile} />
          </nav>

          <div className='four-box' >

            <div className='boxes-1'>
              <TbSquareRoundedArrowDown className='box-icon'/>
              <p className='box-p'>Total Revenues</p>
              <h3 className='box-h3'>$2,129,430</h3>
            </div>
            <div className='boxes-2'>
              < FaTags className='box-icon'/>
              <p className='box-p' >Total Transaction</p>
              <h3 className='box-h3'>1,520</h3>
            </div>
            <div className='boxes-3'>
                < AiOutlineLike className='box-icon'/>
                <p className='box-p' >Total Likes</p>
                <h3 className='box-h3'>9,721</h3>
            </div>
            <div className='boxes-4'>
                < FiUsers className='box-icon'/>
                <p className='box-p' >Total Users</p>
                <h3 className='box-h3'>892</h3>
            </div>

          </div>
                                          {/* grap box start */}

          <div className='grap-box'>

            <Linechart/>
          </div>

          <div className='two-grap'>


            <div className='round-box'>
                 <Biechart/>
            </div>
            <div className='cont-box'>

              <h4>Today's Schedule</h4>

              <div className='green'>
                <h6>Meeting with suppliers from Kuta Bali</h6>
                <p>14.00 - 15.00</p>
                <p>at Sunset Road, Kuta, Bali</p>
              </div>
              <div className='orange'>
                <h6>Check operation at Giga Factory 1</h6>
                <p>18.00 - 20.00</p>
                <p>at Central Jakarta</p>
              </div>
              
            </div>

            
          </div>
         
        </div>
    
      </div>
  )
}

export default Dashboard;
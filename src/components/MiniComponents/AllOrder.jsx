import React from 'react'
import { IoOptions } from "react-icons/io5";
import Table from './Table';

const AllOrder = () => {
  return (
    <div className="mobile bg-white shadow-xl overflow-x-hidden rounded-md p-5 w-full xl:w-[100%]"> 
          <div className="flex items-center justify-between">
            <h2 className=''>Recent Orders <span className="bg-green-300 p-1 rounded-md text-sm text-green-700">+2 Orders</span></h2>
            <div className="flex items-center space-x-4">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="appearance-none border border-gray-300 rounded-md px-2 text-gray-700 focus:outline-none  bg-white shadow-sm"
                />  
              <div className="flex items-center space-x-1 bg-gray-100 shadow-lg rounded-md py-1 px-2 ">
                <IoOptions />
                <h1 className='text-sm'>Filter</h1>
              </div>
              <div className="bg-red-200 px-2 py-1 rounded-md"><h1 className="text-red-600 text-sm">See All</h1></div>
            </div>
          </div>
          <Table/>
    </div>
  )
}

export default AllOrder
import React, { useEffect, useState } from "react";

import { Link ,Navigate, useNavigate } from "react-router-dom";
const Search = () => {
  const [data, setData] = useState([]);

   const navigate=useNavigate()

   const [input,setInput]=useState('')

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => {
        return res.json();
      })
      .then((fData) => setData(fData));
  }, []);



 


  return (
    <div>
      <div>   

         <div className="mt-5 mb-5 flex gap-10">

            <span>Search By Name</span>
            <input type="text"  className="border border-black rounded-lg" placeholder="Enter Name" value={input}
             onChange={(e)=> setInput(e.target.value)}
             />
         </div>
           
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                >
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Brewery-Type
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                >
                  City
                </th>
                <th scope="col" className="py-3 px-6">
                  State
                </th>
                <th scope="col" className="py-3 px-6">
                  More Details
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((el) => (
                  <tr
                    className="border-b border-gray-200 dark:border-gray-700"
                    key={el.id}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {el.name}
                    </th>
                    <td className="py-4 px-6 text-gray-900">
                      {el.brewery_type}
                    </td>
                    <td className="py-4 px-6 text-gray-900 bg-gray-50 dark:bg-gray-800">
                      {el.city}
                    </td>
                    <td className="py-4 px-6 text-gray-900">{el.state}</td>
                   
                    <td className="py-4 px-6 cursor-pointer text-gray-900"
                     onClick={()=> {navigate(`/individual/${el.id}`)}}
                    >
                      Details
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;

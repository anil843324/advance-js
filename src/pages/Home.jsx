import React, { useEffect, useState } from "react";

import { Link ,Navigate, useNavigate } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);

   const [filterData,setFilterData]=useState(data)

  const [filterType, setFilterType] = useState('');

   const navigate=useNavigate()

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => {
        return res.json();
      })
      .then((fData) => setData(fData));
  }, []);

  // filer Data by Category
  const filterByCategory=(cat)=>{

    if('all'===cat.toLowerCase()){
      setFilterData(data)
          
    }else{
       if(filterType===''){
        setFilterData(data)
       }else{
        let filterData= data.filter((el) =>
        el.brewery_type.toLowerCase()===cat.toLowerCase()
      ) 
      setFilterData(filterData)
       }
     
    }

     console.log(data)


}

 


  return (
    <div>
      <div>
       <div className="mt-5 mb-5">
       <label> Filter By Category:- </label>
              <select
                value={filterType}
                onChange={(e) =>  (setFilterType(e.target.value),filterByCategory(e.target.value))}
                className=" border-solid border-2 border-black  rounded-lg "
                id="category"
              >
              <option value="">Select Category</option>
              <option value="All">All</option>
                <option value="Micro">Micro</option>
                <option value="nano">Nano</option>
                <option value="regional">Regional</option>
                <option value="brewpub">Brewpub</option>
                <option value="large">Large</option>
                <option value="planning">Planning</option>

                <option value="bar">Bar</option>
                <option value="contract">Contract</option>
                <option value="proprietor">Proprietor</option>
                <option value="closed">Closed</option>

              </select>
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
              {filterData &&
                filterData.map((el) => (
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

export default Home;

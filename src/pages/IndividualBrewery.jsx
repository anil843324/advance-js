import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualBrewery = () => {
  const [singleData, setSingleData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((fData) => setSingleData(fData));
  }, []);

  console.log(singleData);

  return (
    <div className=" grid place-items-center">
      <h1>Deatils</h1>
      <div className="mt-5  border border-black  w-80 h-80">
        { !singleData ? <div>Loading....</div> : (
          <div>
            <div className="flex justify-between ml-2 mr-2">
              <span>Name</span>
              <span>{singleData.name}</span>
            </div>

            <div className="flex justify-between ml-2 mr-2">
              <span>Brewery_type</span>
              <span>{singleData.brewery_type}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>City</span>
              <span>{singleData.city}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>Country</span>
              <span>{singleData.country}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>Phone No.</span>
              <span>{singleData.phone}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>State</span>
              <span>{singleData.state}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>Postal_code</span>
              <span>{singleData.postal_code}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>Street</span>
              <span>{singleData.street}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>Latitude</span>
              <span>{singleData.latitude}</span>
            </div>
            <div className="flex justify-between ml-2 mr-2">
              <span>Longitude</span>
              <span>{singleData.longitude}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualBrewery;

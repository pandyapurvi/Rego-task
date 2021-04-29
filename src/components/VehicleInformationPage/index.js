import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import StateHadler from '../../StateHandler';

const VehicleInformation = (props) => {
  const history = useHistory();
  const {data} = StateHadler()
  console.log('data in 2nd page')
 

  return (
    <form >
      <h2>Vehicle Information Page</h2>
      {console.log('@@@@@', data)} 
      <p>{data.plate_number}</p>
      {JSON.stringify((data.vehicle.vin).replace(/.(?=.{4,}$)/g, '*'))}
      <p>{JSON.stringify(data.insurer)}</p>
      <p>{JSON.stringify(data.registration)}</p>
//       {JSON.stringify(data.vehicle)}
      {/* {setData(data)} */}
      </form>
  )
};
export default VehicleInformation;

import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import StateHadler from '../../StateHandler';

const VehicleInformation = (props) => {
  
  // const [detail, setDetail] = useContext(AppContext);
  const history = useHistory();
  const {  dataChange, onChangeData, detailChange, onChangeDetail, data} = StateHadler()
console.log('data in 2nd page')
  // if (loading) {
  //   return <p>Data is loading...</p>;
  // }

  // if (error) {
  //   return <p>There was an error loading your data!</p>;
  // }

      
  
  // const onSubmit = (e) => {
  //   e.preventdefault()
  // }

  return (
    <form >
      <h2>Vehicle Information Page</h2>
      {console.log('@@@@@', data)} 
      {JSON.stringify(data.vehicle)}
      {/* {setData(data)} */}
      </form>
  )
};
export default VehicleInformation;

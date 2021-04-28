import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import VehicleDetails from '../VehicleDetails';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import StateHadler from '../../StateHandler';
import VehicleInformation from '../VehicleInformationPage';

const HomePage = () => {
  const [vehicleData, setVehicleData] = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const {
    data, 
    dataChange,
    onChangeData,
    detailChange,
    onChangeDetail,
  } = StateHadler();
  console.log('Data from state handler', data.length)
  // function usePrevious(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // }
  // const prevData = usePrevious({ vehicleData, setData });
  // console.log('01', prevData);
  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>There was an error loading your data!</p>;
  }

  // const handleClick = (e) => {
  //   setData(e);
  //   console.log('e', e);
  // };
  const onSubmit = (e) => {
    e.preventdefault();
    setVehicleData(vehicleData);
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>All Vehicles</h2>
      <ul>
        {vehicleData.registrations &&
          vehicleData.registrations.map((item, i) => (
            <li key={i}>
              {/* <Link to="/vehicle-details"> */}
              <p>Registration Number: {item.plate_number}</p>
              <p>Car Details: {item.vehicle.type}</p>
              <p>
                Expiry status:{' '}
                {item.registration.expired === false ? 'No' : 'Yes'}
              </p>
              <button
                onClick={(e) => {
                  onChangeData(item);
                  setVehicleData(item);
                  history.push('/vehicle-detail-page');
                  {/* setVehicleData(vehicleData) */}
                }}
              >
                Click hehe for more info
              </button>
            </li>
          ))}
      </ul>
      
    </form>
  );
};
export default HomePage;

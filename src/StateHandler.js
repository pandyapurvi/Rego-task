import { useContext } from 'react';
import { AppContext } from './AppContext';

const StateHandler = () => {
  const [
      data, setData,
      info, setInfo
  ] = useContext(AppContext);

  // const dataChange = (name, value) => {
  //     setData({ ...data, [name]: value });
  // };
  // const onChangeData = (name, value) => {
  //     console.log('Tellus',name, value)
  //     // const { name, value } = e.target;
  //     dataChange(name, value);
  // };

  
  const dataChange = () => {
    setData({ ...data});
  };
  const onChangeData = value => {
    console.log('event', value)
    dataChange(value);
    // setData(data)
    console.log('after on change', data)
  };
  console.log('testing', data)

 

  
  return {
      data,
      dataChange,
      onChangeData,

  };
};

export default StateHandler;

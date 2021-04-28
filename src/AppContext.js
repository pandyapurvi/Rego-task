import React, { useState, useEffect, useRef } from 'react';

const AppContext = React.createContext([]);

const AppProvider = props => {
  const [data, setData] = useState([]);
  

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevData = usePrevious({ data, setData });
  // console.log('01', JSON.stringify(prevData[data]));
    useEffect(() => {
        const getData = async () => {
             await fetch('https://dl.dropboxusercontent.com/s/o9iiprxmkv2um27/snsw_registrations_api.json?dl=1')
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log('data', data.registrations)
                })
                .catch((err) => {
                    console.log(err);
                });
          
        }
        
      getData()
      // if (prevData.data) {
      //   setData(data)
      //   console.log('01', prevData.data);
      // }
    }, []);

    return (
        <AppContext.Provider value={[
            data, setData,
            {/* detail, setDetail */}
        ]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
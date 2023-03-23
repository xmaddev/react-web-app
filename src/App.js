import React, { Component} from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/get')
      .then(response => {
        setData(response.data.results); // this will log the JSON data to the console
      })
      .catch(error => {
        console.error('Error getting data:', error);
      }, []);
  });
    axios.post('http://localhost:5000/api/post',{ username : "Bill"})
        .then(response => {
          console.log('Success inserting data : ', response);
        })
        .catch(error => {
          console.error('Error getting data:', error);
    });

  return (
    <div>
      <h1>Data from MySQL database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

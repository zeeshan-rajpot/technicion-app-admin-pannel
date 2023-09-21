// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";
// const useForceUpdate = () => useState()[1];

// const Customers = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const forceUpdate = useForceUpdate();

//   const changeAccess = (id, newStatus) => {
//     axios.post(`http://localhost:8000/changeAccessUser/${id}`, { newStatus })
//       .then(response => {
//         setUsersData(response.data.users);
//         setRefreshKey(prevKey => prevKey + 1);
//         forceUpdate(); // Force re-render after data is updated
//       })
//       .catch(error => console.error("Error changing access:", error));
//   }

//   useEffect(() => {
//     axios.get("http://localhost:8000/getallUsers")
//       .then(response => {
//         console.log(response.data);
//         setUsersData(response.data.User);
//         setLoading(false);
//       })
//       .catch(error => console.error("Error fetching data:", error));
//   }, [refreshKey]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='mt-4' style={{maxHeight:'82vh' , overflowY:'auto'}}>
      
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col"><b> Sr.</b></th>
//             <th scope="col"><b> Name</b></th>
//             <th scope="col"><b>Home Address</b></th>
//             <th scope="col"><b> Status</b></th>
//           </tr>
//         </thead>
//         <tbody>
//           { usersData && usersData.map((user, index) => (
//             <tr key={user._id}>
//               <th scope="row">{index + 1}</th>
//               <td className="d-flex imagetablehight" >
//                 <img src={proflepic} className="rounded-4 me-2" alt="" width="30px" height='30px' />

//                 <p className="m-0 text-nowrap">{user.firstname +  " " + user.lastname}</p>
//               </td>
//               <td className="text-secondary text-nowrap">{user.city}</td>
//               <td className='text-nowrap'>
//                 <button
//                   href="#"
//                   className={`Block-btn ${user.access === 'Denied' ? 'denied-access' : ''}`}
//                   disabled={user.access === "Denied"}

//                   onClick={() => changeAccess(user._id, 'Accepted')}
//                 >
//                   Block
//                 </button>
//                 <button
//                   href="#"
//                   className={` shadow unBlock-btn ${user.access === 'Accepted' ? 'Accepted-access' : ''}`}
//                   disabled={user.access === "Accepted"}

//                   style={{marginTop:'8px'}}
//                   onClick={() => changeAccess(user._id, 'Denied')}
//                 >
//                   Un Block
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Customers;










import React, { useState, useEffect } from "react";
import axios from "axios";

import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";
// import "./technicion.css";

const Customers = () => {
   const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const changeAccess = (id, newStatus) => {
    axios.post(`http://localhost:8000/changeAccessUser/${id}`, { newStatus })
      .then(response => {
     setUsersData(response.data.User);
        setRefreshKey(prevKey => prevKey + 1); // Increment the key to trigger re-render
      })
      .catch(error => console.error("Error changing access:", error));
  }

  useEffect(() => {
    axios.get("http://localhost:8000/getallUsers")
      .then(response => {
        console.log(response.data.User);
      setUsersData(response.data.User);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [refreshKey]); // Add refreshKey as a dependency

  const getBlobFromBuffer = (buffer) => {
    return new Blob([buffer], { type: 'image/png' });
  }


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className='mt-4' style={{maxHeight:'82vh', overflowY:'auto'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><b> Sr.</b></th>
            <th scope="col"><b> Name</b></th>
            <th scope="col"><b>Home Address</b></th>
            <th scope="col"><b> Status</b></th>
          </tr>
        </thead>
        <tbody>
          {usersData && usersData.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="d-flex imagetablehight" style={{height:'48px'}}>
              {/* <img src={URL.createObjectURL(getBlobFromBuffer(user.image))} className="rounded-4 me-2" alt="" width="30px" height='30px' /> */}
                <p className="m-0 text-nowrap">{user.firstname + " " +user.lastname}</p>
              </td>
              <td className="text-secondary text-nowrap">{user.city}</td>
              <td className="text-nowrap">
                <button
                  href="#"
                  className={`Block-btn ${user.access === 'Denied' ? 'denied-access' : ''}`}
                  disabled={user.access === "Denied"}
                  onClick={() => changeAccess(user._id, 'Accepted')}
                >
                  Block
                </button>
                <button
                  href="#"
                  className={` shadow unBlock-btn ${user.access === 'Accepted' ? 'Accepted-access' : ''}`}
                  style={{marginTop:'8px'}}
                  disabled={user.access === "Accepted"}
                  onClick={() => changeAccess(user._id, 'Denied')}
                >
                  Un Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;

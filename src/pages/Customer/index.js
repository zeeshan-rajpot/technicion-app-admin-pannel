import React from 'react';
import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";

const Customers = () => {
  const customerData = [
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 1, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },
    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    { id: 4, name: "Akbar Sarkar", address: "Otddd3345to" },

    // ... Add more customer data here
  ];

  return (
    <div className='mt-4' style={{maxHeight:'82vh' , overflowY:'auto'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><b> Sr.</b></th>
            <th scope="col"><b> Name</b></th>
            <th scope="col"><b>Home Adress</b></th>
            <th scope="col"><b> Status</b></th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer, index) => (
            <tr key={customer.id}>
              <th scope="row">{index + 1}</th>
              <td className="d-flex imagetablehight" >
                <img src={proflepic} className="rounded-4 me-2" alt="" width="30px" height='30px' />
                <p className="m-0">{customer.name}</p>
              </td>
              <td className="text-secondary">{customer.address}</td>
              <td>
                <button href="#" className="Block-btn">Block</button>
                <button href="#" className="shadow unBlock-btn" style={{marginTop:'8px'}}>Un Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;

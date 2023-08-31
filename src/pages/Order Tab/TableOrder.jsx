import React from 'react';
import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";

const TableOrder = () => {
  const ordersData = [
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },

    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },
    { name: 'Akbar Sarkar', orderID: '#12345', orderType: 'Cooling services', vendorID: '#12345', date: '04-2-2023' },

  ];

  return (
    <div className='mt-4' style={{ maxHeight: '82vh', overflowY: 'auto' }}>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'><b>Sr.</b></th>
            <th scope='col'><b>Name</b></th>
            <th scope='col'><b>Order I'D</b></th>
            <th scope='col'><b>Order Type</b></th>
            <th scope='col'><b>Vendor I'D</b></th>
            <th scope='col'><b>Date</b></th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td className='d-flex '>
                <img src={proflepic} className='rounded-4 me-2' alt="" width='20px' />
                <p className='m-0'>{order.name}</p>
              </td>
              <td className='text-secondary'>{order.orderID}</td>
              <td><b>{order.orderType}</b></td>
              <td className='text-secondary'>{order.vendorID}</td>
              <td className='text-secondary'>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableOrder;

import React from 'react';
import proflepic from "../../src/images/Screenshot from 2023-08-28 16-17-14.png";

const TableComponent = () => {
  const tableData = [
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+', pendingPayment: '38677R+' },
   
  ];

  return (
    <div className='mt-4' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Name</th>
            <th scope="col">Order I'D</th>
            <th scope="col">Total Payment</th>
            <th scope="col">Commission</th>
            <th scope="col">Pending Payment</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className='d-flex '>
                <img src={proflepic} className='rounded-4 mt-1' alt="" width='30px' height="30px" />
                <p className='m-0 pt-1' >{data.name}</p>
              </td>
              <td className='text-secondary'>{data.orderID}</td>
              <td><b>{data.totalPayment}</b></td>
              <td className='text-secondary'>{data.commission}</td>
              <td>{data.pendingPayment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

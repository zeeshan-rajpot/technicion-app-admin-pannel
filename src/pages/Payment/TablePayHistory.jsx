import React from 'react';
import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";

const TablePayHistory = () => {
  const tableData = [
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },
    { name: 'Akbar Sarkar', orderID: '#1234', totalPayment: '2157R', commission: '2221R+' },

  ];

  return (
    <>
      <div className='mt-4' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Order I'D</th>
              <th scope="col">Total Payment</th>
              <th scope="col">Commission</th>
              {/* <th scope="col">Pending Payment</th> */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className='d-flex '>
                  <img src={proflepic} className='rounded-4 me-2' alt="" width='30px' />
                  <p className='m-0 pt-2'>{data.name}</p>
                </td>
                <td className='text-secondary'>{data.orderID}</td>
                <td><b>{data.totalPayment}</b></td>
                <td className='text-secondary'>{data.commission}</td>
                {/* <td>{data.pendingPayment}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablePayHistory;

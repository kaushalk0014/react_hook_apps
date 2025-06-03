import React from 'react';

import { Row, Col, Container , Table } from 'react-bootstrap';
import { useGetAllEmployeesQuery } from './ApiCall'

interface Employee  {
        name:string,
        email:string,
        salary:number

    };

const  EmployeeDetails = () => {


    const { data, error, isLoading } = useGetAllEmployeesQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
      <Container className="mt-4">
      <h4>Employee Details</h4>

      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((emp: Employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{emp?.name}</td>
              <td>{emp?.email}</td>
              <td>{emp?.salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    )
}

export default EmployeeDetails;
import React from 'react';
import './style.scss';
import { Row, Col, Container, Table, Button } from 'react-bootstrap';
import { useGetAllEmployeesQuery } from './ApiCall'
import EditEmployee from './EditEmployee';

interface Employee {
  id: number,
  name: string,
  dept: string,
  gender: string,
  salary: number

};

const EmployeeDetails = () => {

  const [viewEditPage, setViewEditPage] = React.useState(false);

  const editEmployee = (employee: Employee) => {
    console.log("Edit Employee", employee);
    setViewEditPage(true);
  };

  const { data, error, isLoading } = useGetAllEmployeesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <EditEmployee show={viewEditPage} onClose={() => { setViewEditPage(false)}} >
      <div>Hello</div>
    </EditEmployee>
      <Container className="mt-3" >
        <Row className="mt-3">
          <Col>
            <h4>Employee Details</h4>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            Action:
          </Col>
          <Col>
            Name:
          </Col>
          <Col>
            Department Name
          </Col>
          <Col>
            Salary
          </Col>
          <Col>
            Gendar
          </Col>
        </Row>
        {data && data.map((employee: Employee, index: number) => {
          return (
            <Row key={index} className="mt-3">
              <Col>
                <Button variant="primary" className="mx-2" onClick={() => editEmployee(employee)} title={employee?.id + ""}>Edit</Button>
              </Col>
              <Col>{employee?.name}</Col>
              <Col>{employee?.dept}</Col>
              <Col>{employee?.salary}</Col>
              <Col>{employee?.gender}</Col>
            </Row>
          )
        })}

      </Container>
    </>
  )
}

export default EmployeeDetails;
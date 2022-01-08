import React,{useState, useEffect} from 'react'
import api from '../../../api'


function AllEmployees() {

    const [employees, setEmployees] = useState([])

    useEffect( async () => {

        await api.getAllEmployees()
                    .then(employeeList =>{
                        const arrOfEmployees = employeeList.data.data;
                        setEmployees(arrOfEmployees)
                    })
    },[])


    return (
        <div>
            this is all employees
            {
                employees.map((employee)=>(
                    <div>
                        <h1>{employee.name}</h1>
                        <p>{employee.username}</p>
                        <p>{employee.position}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AllEmployees

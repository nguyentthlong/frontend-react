import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

const ListStudent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getAllStudent()
            .then((response) => {
                setStudents(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a
                        href="/"
                        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                    >
                        {/* <svg class="bi me-2" width="40" height="32">
                            <use xlink:href="#bootstrap" />
                        </svg> */}
                        <span class="fs-4">Simple header</span>
                    </a>

                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a href="#" class="nav-link active" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                FAQs
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                About
                            </a>
                        </li>
                    </ul>
                </header>
            </div>
            <h2>Danh S??ch Sinh Vi??n</h2>
            <table class="table table-secondary">
                <thead>
                    <tr>
                        <th scope="col">M?? Sinh Vi??n</th>
                        <th scope="col">H??? T??n</th>
                        <th scope="col">L???p</th>
                        <th scope="col">Email</th>
                        <th scope="col">?????a Ch???</th>
                        <th scope="col">Ng??y Sinh</th>
                        <th scope="col">Gi???i T??nh</th>
                        <th scope="col">S??t</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {students.map((student) => (
                        <tr key={student.msv}>
                            <td>{student.msv}</td>
                            <td>{student.name}</td>
                            <td>{student.class_lop}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td>{student.birthday}</td>
                            <td>{student.gender}</td>
                            <td>{student.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListStudent;

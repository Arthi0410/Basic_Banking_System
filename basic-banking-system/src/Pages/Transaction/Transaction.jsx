import React from 'react'
import Navbar from '../../Components/Navbar/navbar.component'
import Footer from '../../Components/Footer/footer.component'
import axios from 'axios'
import './Transaction.css'
import { useEffect, useState } from 'react';

const Transaction = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("http://localhost:5000/api/users/");
            console.log(res);
            setUsers(res.data);
        }
        fetchUsers();
    }, [])

    const handleTransfer = (id) => {
        console.log("tran")
        window.location.replace("http://localhost:3000/SingleTransfer/" + id)
        //window.location.replace("http://localhost:5000/api/users/"+id)
    }

    return (
        <>
            <div><Navbar /></div>
            <div>
                <h1 className="heading">Transaction</h1>
                <div className="transferCont">
                    <div className="d-flex justify-content-center " >
                        <table className="table text-center align-items-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Balance</th>
                                    <th scope="col">Transfer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id} className='rowUser'>
                                        <td >{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.amount}</td>
                                        <td><button className='transferBtn' onClick={() => handleTransfer(user._id)} >Transfer</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div><Footer /></div>
        </>
    )
}

export default Transaction
import React from 'react'
import Navbar from '../../Components/Navbar/navbar.component'
import Footer from '../../Components/Footer/footer.component'
import axios from 'axios'
import './history.css'
import { useEffect, useState } from 'react';


const History = () => {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/transfers/') // Replace with your API endpoint
            .then(async (response) => {
                const transactionsWithSenderName = await Promise.all(
                    response.data.map(async (transaction) => {
                        const senderName = await fetchUserName(transaction.sender);
                        const receiverName = await fetchUserName(transaction.receiver);
                        return { ...transaction, senderName, receiverName };
                    })
                );
                setTransactions(transactionsWithSenderName);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    // Function to fetch user's name by _id
    const fetchUserName = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
            return response.data.username;
        } catch (error) {
            console.error(`Error fetching sender name for ID ${userId}:`, error);
            return 'Unknown user'; // Handle error gracefully
        }
    };
    return (
        <>
            <div><Navbar /></div>
            <div>
                <h1 className='heading'>Transaction History</h1>
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <div className="historyCont">
                        <div className="d-flex justify-content-center " >
                            <table className="table text-center align-items-center">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Transaction No</th>
                                        <th scope="col">Sender</th>
                                        <th scope="col">Receiver</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transaction._id}>
                                            <td >{transaction.tno}</td>
                                            <td>{transaction.senderName}</td>
                                            <td>{transaction.receiverName}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{new Date(transaction.createdAt).toDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                )}
            </div>
            <div><Footer /></div>
        </>
    )
}

export default History
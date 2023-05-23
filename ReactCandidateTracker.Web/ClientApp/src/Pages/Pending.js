import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PendingRow from '../components/PendingRow';



const Pending = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getPending = async () => {
            const { data } = await axios.get('/api/candidate/getpending');
            setCandidates(data);
        }
        getPending();
    }, []);

    return (

        <div className="container" >
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => <PendingRow candidate={c} key={c.id} />)}


                </tbody>
            </table>
        </div>

    )
}
export default Pending;

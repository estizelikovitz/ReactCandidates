import { Link, useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCount } from '../Context';




const PendingDetails = () => {

    const [candidate, setCandidate] = useState({});
    const history = useHistory();
    const { id } = useParams();
    const { updatePendingCount, updateRefusedCount, updateConfirmedCount } = useCount();


    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidate/getcandidate?id=${id}`);
            console.log(data);
            setCandidate(data);
        }
        getCandidate();
    }, []);

    const onConfirmClick = async () => {
        await axios.post('/api/candidate/addconfirmed', candidate);
        updatePendingCount();
        updateConfirmedCount();
        history.push('/');
    }

   const onRefuseClick = async () => {
       await axios.post('/api/candidate/addrefused', candidate);
       updatePendingCount();
       updateRefusedCount();
        history.push('/');
    }

    const { firstName, lastName, phoneNumber, email, notes } = candidate;

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: Pending</h4>
                        <h4>Notes:</h4>
                        <p>{notes}</p>
                        <div>
                            <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                            <button className="btn btn-danger" onClick={onRefuseClick}>Refuse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PendingDetails;
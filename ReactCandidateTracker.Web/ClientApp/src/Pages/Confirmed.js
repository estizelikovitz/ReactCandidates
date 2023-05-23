import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonRow from '../components/PersonRow';


const Confirmed = () => {
    const [candidates, setCandidates] = useState([]);
    const [hidden, setHidden] = useState(false);

        useEffect(() => {
        const getConfirmed = async () => {
            const { data } = await axios.get('/api/candidate/getconfirmed');
            setCandidates(data);
        }
        getConfirmed();
    }, []);

    const onToggleClick = () => {
        setHidden(!hidden);
    }

    return (

        <div className="container" >
            <div>
                <h1>Confirmed</h1>
                <div>
                    <button className="btn btn-success" onClick={onToggleClick}>Toggle Notes</button>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {!hidden && <th>Notes</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map(c => <PersonRow candidate={c} key={c.id} hidden={hidden} />)}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default Confirmed;

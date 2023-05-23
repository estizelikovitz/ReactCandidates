import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import { produce } from 'immer';
import { useCount } from '../Context';



const AddCandidate = () => {

    const [candidate, setCandidate] = useState({ firsName:'', lastName:'', phoneNumber:'', email:'', notes:'' });
    const history = useHistory();
    const { updatePendingCount } = useCount();


    const onTextChange = (e) => {
        const newCandidate= produce(candidate, draft => {
            draft[e.target.name] = e.target.value;
        });

        setCandidate(newCandidate);
    }

    const onSubmitClick = async () => {
        await axios.post('/api/candidate/addcandidate', candidate);
        updatePendingCount();
        history.push('/');
    }

    const { firstName, lastName, phoneNumber, email, notes } = candidate;

    return (
        <div className="container" >
            <div className="row" >
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form>
                            <input type="text"  name="firstName" placeholder="First Name" className="form-control" onChange={onTextChange}/>
                            <br />
                            <input type="text" value={lastName} name="lastName" placeholder="Last Name" className="form-control" onChange={onTextChange}/>
                            <br />
                            <input type="text" value={email} name="email" placeholder="Email" className="form-control" onChange={onTextChange}/>
                            <br />
                            <input type="text" value={phoneNumber} name="phoneNumber" placeholder="Phone Number" className="form-control" onChange={onTextChange}/>
                            <br />
                            <textarea rows="5" value={notes} className="form-control" name="notes" onChange={onTextChange}></textarea>
                            <br />
                            <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AddCandidate;

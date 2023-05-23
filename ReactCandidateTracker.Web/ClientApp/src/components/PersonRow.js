import React from 'react';
import { Link } from 'react-router-dom';



const PersonRow = ({ candidate, hidden }) => {

    const { firstName, lastName, phoneNumber, email, notes } = candidate;


    return (
        <>
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
                {!hidden && <td>{notes}</td>}
            </tr>
        </>
    )
}


export default PersonRow;
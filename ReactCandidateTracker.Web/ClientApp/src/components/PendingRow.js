﻿import React from 'react';
import { Link } from 'react-router-dom';



const PersonRow = ({ candidate }) => {

    const { id, firstName, lastName, phoneNumber, email } = candidate;


    return (
        <>
            <tr>
                <td>
                <Link to={`/pendingdetails/${id}`}>
                    View Details
                    </Link>
                    </td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
            </tr>

        </>
    )
}


export default PersonRow;
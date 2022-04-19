import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function SearchBox (props) {

    return (
        <>
        <Form.Control type = 'search'
            className='searchBox'
            placeholder={props.hint}
            onChange={props.handleChange}
        />
        </>

    )
    
    
}

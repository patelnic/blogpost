import React, { useState } from 'react'

export default function SearchBox (props) {

    return (
        <>
        <input type = 'search'
            className='searchBox'
            placeholder={props.hint}
            onChange={props.handleChange}
        />
        </>

    )
    
    
}

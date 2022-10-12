import React, { useState } from 'react'

const Dropdown = props => {

    const [selectedValue, setSelectedValue] = useState('');
    
  return (
    <div>
        <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
            {props.options.map((item, idx) => <option key={idx}>{item.name}</option>)}
        </select>
        <p>{selectedValue}</p>
    </div>
  )
}

export default Dropdown
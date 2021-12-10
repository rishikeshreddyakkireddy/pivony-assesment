import React from 'react';


function HeaderInput({setHeaders}) {
    return (
        <div>
            <input type="radio" name="header" className="header"  value="yes" onChange={e => setHeaders(e.target.value)} />
            <label>Yes</label>
            <input type="radio" name="header" className="header"  value="No" onChange={e => setHeaders(e.target.value)} />
            <label>No</label>
        </div>
    )
}

export default HeaderInput;
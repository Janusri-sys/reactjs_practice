import React from 'react'

function InlineCss() {
    const heading={
        fontSize:'70px',
        color:'blue'
    }
  return (
    <div>
        <h1 style={heading}>InlineCss</h1>
    </div>
  )
}

export default InlineCss
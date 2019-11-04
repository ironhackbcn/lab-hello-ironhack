import React from 'react'

const FootBlock = (props) => {
  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + props.URL} alt="Icon" />
      <h2>{process.env.PUBLIC_URL + props.title}</h2>
      <p>{process.env.PUBLIC_URL + props.text}</p>
    </div>
  )
}

export default FootBlock;

import React from 'react'


const MyCard = (props) => {
    return (

      <div className="card border-secondary mb bg-transparent" >
  <div className="card-body">
    <p className="card-text text-center ">{props.info}</p>
  </div>
</div>

    )
}

export default MyCard

import React from 'react'


const MyCard = (props) => {
    return (

      <div class="card border-secondary mb bg-transparent" >
  <div class="card-body">
    <p class="card-text text-center ">{props.info}</p>
  </div>
</div>


    )
}

export default MyCard

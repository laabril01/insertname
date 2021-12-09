import React from 'react'


const MyModal = (props) => {

    const dato = props.btn
    return (

 <div>

<button type="button" class="btn-outline-dark" data-toggle="modal" data-target="#exampleModalCenter">
{props.btn}
     </button>
     
      
     <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLongTitle">{props.titulo}</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body">
           {props.contenido}
           </div>
           <div class="modal-footer">
{/*              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Save changes</button> */}
           </div>
         </div>
       </div>
     </div>

</div>

    )
}

export default MyModal

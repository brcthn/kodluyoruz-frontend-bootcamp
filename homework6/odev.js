window.mockApiUrl = "https://5ff1a6bfdb1158001748b332.mockapi.io/pets/";

window.removePet = (id) => {
    fetch(`${window.mockApiUrl}${id}`,{
    method: "DELETE",
    }).then(setInterval(()=>window.location.reload(false),5000)
    ).catch((err)=>console.log(err.message))
    console.log(id) // remove the pet with given id
};

window.generateDetailModal = (pet) => {
    return ` <div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${pet.name} </h5>
        </div>
        <div class="modal-body">
        
          <p>${pet.description}</p>
        </div>
        <div class = "modal-footer>
          <button type="button" class ="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>`

}

window.openPetDetail = (id) => {
    fetch(`${window.mockApiUrl}${id}`,{
        method: "GET",
        }).then((response) => response.json()).then((data)=>{
            const petModalHTMl =  generateDetailModal(data);
            document.querySelector("body").innerHTML += petModalHTMl;
            $(`#exampleModal${id}`).modal('show');
    })
        .catch((err)=>console.log(err.message))
};
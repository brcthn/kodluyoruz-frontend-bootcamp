window.mockApiUrl = "https://5ff1a6bfdb1158001748b332.mockapi.io/pets/";

window.removePet = (id) => {
    fetch(`${window.mockApiUrl}${id}`,{
    method: "DELETE",
    }).then(setInterval(()=>window.location.reload(false),5000)
    ).catch((err)=>console.log(err.message))
    console.log(id) // remove the pet with given id
};

window.openPetDetail = (id) => {
    fetch(`${window.mockApiUrl}${id}`,{
        method: "GET",
        }).then((response) => response.json()).then((data)=>
        console.log(data))
        .catch((err)=>console.log(err.message))
};
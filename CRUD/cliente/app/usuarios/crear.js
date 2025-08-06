const insertar = (datos) => {

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));   


}

export default insertar
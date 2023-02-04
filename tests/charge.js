Promise.all([...Array(500).keys()]
    .map(() => fetch("http://127.0.0.1:3000/paginas?search=aprender+ingl%C3%A9s")))
    .then(() => console.log("resuelto"))
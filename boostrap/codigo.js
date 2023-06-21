let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .then(json => console.log(json))


  const mostrarData = (data) => {
      console.log(data)
      let body = ''
      for(let i = 0; i<data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
      }
      document.getElementById('datos').innerHTML = body
  
    }

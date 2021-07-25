const form = document.getElementById('form')

 

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
 
  if(nome == ""){
  alert('insira o seu nome');
  return false;
  }
  
  
  if(email == ""){
  alert('insira o seu email');
  return false;
  }
	
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>mandaremos as promoções para seu email!</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})
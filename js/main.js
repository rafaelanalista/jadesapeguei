const addCart = document.querySelectorAll('.add-cart');

const nome = document.getElementsByClassName('prod');

const valor = document.getElementsByClassName('valor');

const cartBtn = document.querySelectorAll('.add-cart');
console.log(cartBtn);

for(let i=0; i<cartBtn.length; i++){
    cartBtn[i].addEventListener('click', function(e){
              
      var n = nome[i].innerHTML;
      var v = valor[i].innerHTML;
        
       console.log(n);
        let data = {
            n,
            v,
          }
          let convertData = JSON.stringify(data);

          localStorage.setItem('lead', convertData)

                  
    })}



for(var i = 0; i < addCart.length; i++){
    addCart[i].addEventListener('click', () => {
        cartCount();
    })
}

function cartCount(){


    let productNumbers = localStorage.getItem('cartNumber');
    productNumbers = parseInt(productNumbers);


    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
        document.querySelector('.nav span').textContent = productNumbers +1;
        


    }else{
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.nav span').textContent = 1;
    }


}

function loadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumber');
    if(productNumbers){
        document.querySelector('.nav span').textContent = productNumbers;
    }
}

loadCartNumbers();



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let descricao = document.getElementById('descricao').value;

    if(nome == ""){
    alert('insira o seu nome');
    return false;
    }
    
    
    if(marca == ""){
    alert('insira a marca');
    return false;
    }
      
    let data = {
      nome,
      marca,
      modelo,
      descricao,
    }
    let convertData = JSON.stringify(data);
  
    localStorage.setItem('lead', convertData)
  
    let content = document.getElementById('content')
  
    let carregando = `<p>carregando...</p>`
  
    let pronto = `<p>produtos cadastrados com sucesso!</p>`
  
    content.innerHTML = carregando
  
  
    setTimeout(() => {
      content.innerHTML = pronto
    }, 1000)
  
  })



  

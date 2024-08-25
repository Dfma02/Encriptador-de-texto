const textarea = document.querySelector (".text-area");
const mensaje = document.querySelector (".mensaje");
const textoInfo = document.querySelector('.texto-info');
const textoInfo2 = document.querySelector('.texto-info-2');


function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";

    const btnCopiar = document.querySelector('.copiar');
    btnCopiar.classList.add('visible');
    
    mensaje.classList.remove('hidden');
    textoInfo.classList.add('hidden');
   
    mensaje.classList.remove('hidden2');
    textoInfo2.classList.add('hidden2');
    
    textarea.value=""
    
}




function encriptar(Encriptada){
    let matrizcodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    Encriptada = Encriptada.toLowerCase()
    

    for(let i = 0; i < matrizcodigo.length; i++){
        if(Encriptada.includes(matrizcodigo[i][0])){
            Encriptada = Encriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    };
return Encriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage= "none";
    // Hacer visible el botón
    const btnCopiar = document.querySelector('.copiar');
    btnCopiar.classList.add('visible');

    mensaje.classList.remove('hidden');
    textoInfo.classList.add('hidden');
   
    mensaje.classList.remove('hidden2');
    textoInfo2.classList.add('hidden2');
    
    textarea.value=""
   
}

function desencriptar(desencriptada){   
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptada = desencriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(desencriptada.includes(matrizcodigo[i][1])){
            desencriptada = desencriptada.replaceAll(matrizcodigo [i][1], matrizcodigo[i][0])
        }
    };
return desencriptada;
}



function btnCopiar(){
    const elemento = document.querySelector('.mensaje');
    const tempElement = document.createElement('textarea');
   
    tempElement.value = elemento.value;
    document.body.appendChild(tempElement);
    tempElement.select();
    tempElement.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempElement);
  
    mensaje.value = "";
    Toastify({
        text: "¡Texto copiado al portapapeles!",
        duration: 3000,
        gravity: "top", // top, bottom
        position: "left", // left, right
        style: {
            background: "linear-gradient(to bottom, #667dff, #9966ff)",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"
        }
    }).showToast();
    setTimeout(() => {
        console.log("Recargando la página...");
        location.reload();
    }, 500);

    btnCopiar.classList.remove('visible');
    
  
}

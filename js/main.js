const formulario= document.querySelector('#formulario')



formulario.addEventListener('submit', function (ev) {
    ev.preventDefault()
    validarFormulario()
})

    const objValidado={
        nombre:false,
        apellidos:false,
        edad:false,
        sexo:false,
        meSientoDelClub: false,
        escribeAlgoSobreTi:false,
        email:false,
        telefono:false,

    }
    
    const regExp = {
    nombre: /[a-z]/i,
    apellidos: /[a-z]/i,
    edad:/[a-z]/i,
    email:/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/,
    telefono:/^\d{10}$/,
    escribeAlgoSobreTi:/value == null || value.length == 0 ||/,
    }

    const nombre = formulario.nombre.value
    const apellidos=formulario.apellidos.value
    const edad=formulario.edad.value
    const sexo=formulario.sexo.value
    const meSientoDelClub= formulario.meSientoDelClub.value
    const escribeAlgoSobreTi=formulario.escribeAlgoSobreTi.value
    const email=formulario.email.value
    const telefono=formulario.telefono.value


function validarFormulario() {

    if (regExp.nombre.test(nombre)) {
        objValidado.nombre = true
    }
    else { objValidado.nombre = false} 

    if (regExp.apellidos.test(apellidos)) {
        objValidado.apellidos = true
    }
    else { objValidado.apellidos = false} 

    if (sexo.checked){
        objValidado.sexo=true
    }
    else{objValidado.sexo=false}

    if (meSientoDelClub.checked){
        objValidado.sexo=true
    }
    else{objValidado.sexo=false
        
    }

    if (regExp.escribeAlgoSobreTi.test(escribeAlgoSobreTi)) {
        objValidado.apellidos = true
    }
    else { objValidado.escribeAlgoSobreTi = false

    } 

    if (regExp.email.test(apellidos)) {
        objValidado.email = true
    }
    else { objValidado.email = false

    } 




    const valoresObjValidados=Object.values(objValidado)
    const validado=valoresObjValidados.includes(false)
    console.log({validado})

    if(!validado){
        console.log('formulario validado')
    }
    else{
        console.log('no pasa validacion')
    }


}


 



  /*valor = document.getElementById("campo").value;if ( !(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/.test(valor)) { return false;}
  
  valor = document.getElementById("campo").value;if ( !(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/.test(valor)) { return false;}
  
  valor = document.getElementById("campo").value;if ( !(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/.test(valor)) { return false;}*/
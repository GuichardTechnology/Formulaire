function sauver (){
    let nom = document.getElementById("name").value
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value
    let type = document.formulaire.type.value

    if(nom ==""){
        alert("vous devez informer le nom")
    }
    
    if(email ==""){
        alert("vous devez informer l´email")
    }
    if(age ==""){
        alert("vous devez l´age")
    }

    if(type ==""){
        alert("vous devez informer le type")
    }
    else{
        alert("vous avez sauvegarder les informations")
    }

    

}
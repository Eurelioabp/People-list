const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Karla", "Lara")
];

function mostrarPersonas(){
    let texto = "";
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido} </li>`
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];

    if(nombre.value != "" && apellido != ""){
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona)
    personas.push(persona);
    mostrarPersonas();
    }
    else{
        alert("The first name or last name placeholder is empty")
    }
}
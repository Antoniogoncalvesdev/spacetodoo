const btn = document.querySelector("#btn");
const ulbar = document.querySelector("#ulbar");
const inputBox = document.querySelector("#inputBox");
const li = document.createElement("li");
const flags = document.querySelector("#flags");
const help = document.querySelector("#help");

    //character limitation / limitação de caracters 
    inputBox.addEventListener("input", function(){
            let inputMax = 17;
    
            if(inputBox.value.length > inputMax){
                inputBox.value = inputBox.value.slice(0, inputMax); 
            };
    });
    
    //Click event when clicking on "?" / Evento de click quando clicar no "?"
    help.addEventListener("click", function(){
        alert("Clique em uma tarefa / Click on a task");
    });

    //Click event on the "ADD" button / Evento de click no botão "ADD"
    btn.addEventListener("click", function(){

        let li = document.createElement("li");
        let deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delet_btn");

        //Validation if the input is empty and dynamic addition of the "li" and the delete button 
        //Validação se o input está vazio e adição dinâmica do "li" e o botão de delete
        if(inputBox.value == ""){
            alert("Digite um valor válido! / Type a valid value!");
            return;
        }else{
            li.innerHTML = inputBox.value;
            ulbar.appendChild(li);
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            ulbar.appendChild(deleteBtn);
            inputBox.value = "";
        }
        
        //Click event when clicking on "li" / Evento de click quando clicar no "li"
        li.addEventListener("click", function row(){
            if(li.style.textDecoration != "line-through"){
                li.style.textDecoration = "line-through";
                li.style.borderRight = "15px solid green";
            }else{
                li.style.textDecoration = "none";
                li.style.borderRight = "15px solid orange";
            };
        });

        //Click event to delete "li" and "delete" button / Evento de click para deleter o "li" e o "delete" button
        deleteBtn.addEventListener("click", function(){
            ulbar.removeChild(li);
            ulbar.removeChild(deleteBtn);
        });
    })

    //Activating the button "Add" when press "Enter" key/Ativando o butão "Add" quando precionado
    document.addEventListener("keypress", (e) => (e.key === "Enter")? btn.click() : false);

    //changing language/mudando idioma 
    var isUsaFlag = true;

    flags.addEventListener("click", function(){ 

        let pending = document.getElementById("pending");
        let done = document.getElementById("done");
        let abbrTitle = document.getElementById("abbrTitle");

        if(isUsaFlag){
            flags.style.backgroundImage = "url('./img/BR.png')";
            done.innerHTML = "Done";
            pending.innerHTML = "Pending";
            abbrTitle.title = "Click on a task to complete it";
            inputBox.placeholder = "How many planets will you move today?";
        }
        else{
            flags.style.backgroundImage = "url('./img/USA.png')";
            done.innerHTML = "Feito";
            pending.innerHTML = "Pendente";
            abbrTitle.title = "Clique em uma tarefa para finalizar ela";
            inputBox.placeholder = "Quantos planetas vai mover hoje?";
        }

        isUsaFlag = !isUsaFlag;
    });
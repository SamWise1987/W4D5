function createForm{
    const form = document.createElement("form");
    form.setAttribute("id", "form")
    fomrInputs.map = (input=> createInput(input, form));
    document.body.append(form);
}
createForm();

function createInput(inputData, inputContainer) {
    const input = document.createElement("input");
    input.setAttribute("text", inputData.type );
    input.setAttribute("id", inputData.id);
    input.setAttribute("placeholder", inputData.placeholder);
    inputContainer.append(input);
}

function collectFormData() {
    const form = document.getElementById("fomr");
    const inputs = form.querySelectorAll("input");
    const arrayOfInputs = Array.from(inputs).map(({input})=>{

        return input.value;
    });

    return arrayOfInputs;
}

const button = document.getElementById("submit");
button.addEventListener("click", function(event){
    event.preventDefault();

})






//{
  //  name: "valore dell'input name",
  //  surneame: "valore input surname",
  //  age: "valore input age",
// }
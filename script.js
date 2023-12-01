const frm = document.querySelector("form")
const btnsubmit = document.querySelector("#inSubmit")
const result = document.querySelector("h3")

btnsubmit.addEventListener("click", (e) => {
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const soma = (nota1 + nota2) / 2

    if (soma >= 7) {
        result.innerText = `Nota foi: ${soma.toFixed(1)} aprovado`
        result.style.color = "green"
    }
    else if (nota1 == "" && nota2 == "") {
        result.innerText = `Campo de nota vazio!`
    }
    else {
        result.innerText = `Nota foi: ${soma.toFixed(1)} reprovado`
        result.style.color = "red"
    }

    e.preventDefault()
})

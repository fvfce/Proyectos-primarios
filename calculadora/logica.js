let numero = document.querySelectorAll(".num");


        let operador = document.querySelectorAll(".operar");

        let igualdad = document.querySelector(".igual");

        let selector = document.querySelector("input");

        let botonLimpiar = document.querySelector(".limpiar");

        
        function numeros(valor) {
            selector.value += valor
        }

        function operadores(valor) {
            if (valor != "x") {
                selector.value += " " + valor + " "
            }else {
                selector.value += " * "
            }
            
        }        

        function temporal() {
            let exprecion = selector.value;

            selector.value = eval(exprecion);
        }


        for (let elemento of numero) {
            elemento.addEventListener("click", () => {numeros(elemento.textContent)})
        }

        for (let oper of operador) {
            oper.addEventListener("click", () => operadores(oper.textContent))
        }


        igualdad.addEventListener("click", temporal);

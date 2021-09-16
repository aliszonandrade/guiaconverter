const fs = require('fs');//file-system

function ModificarUsuario(nome, curso, categoria){
    fs.readFile("./usuario.json",{encoding: 'utf-8'},(erro,dados) => {
        if(erro)
            console.log("erro aconteceu")
        else{
            var conteudo = JSON.parse(dados);
            console.log(conteudo);
            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria
            
            fs.writeFile("./usuario.json", JSON.stringify(conteudo),(erro) => {
                if(erro)
                    console.log("Ocorreu um errãooo!")
            })
        }
    })
}

ModificarUsuario("Alisson","ADS","TI");
let usuarios = new Array();

    function envio(){
        let usuario = new Object();
        usuario.nome= document.getElementById('inputNome').value;;
        usuario.telefone = document.getElementById('inputTelefone').value;
        usuario.email = document.getElementById('inputEmail').value;
        usuario.dataNasc = document.getElementById('inputdataNasc').value;
        usuario.regiao = document.getElementById('selectRegiao').value;

        usuarios.unshift(usuario);
       

        console.log(usuarios);
        alert("Sua mensagem foi enviada com sucesso");
    }





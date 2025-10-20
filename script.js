const form = document.getElementById('enderecoForm');
const cepInput = document.getElementById('cep');
const ufInput = document.getElementById('uf');
const logradouroInput = document.getElementById('logradouro');
const numeroInput = document.getElementById('numero');

function voltar() {
    window.location.href = 'index.html';
}


cepInput.addEventListener('input', () => {
    let value = cepInput.value.replace(/\D/g, ''); // remove tudo que não é número
    if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }
    cepInput.value = value;
});

ufInput.addEventListener('input', () => {
    ufInput.value = ufInput.value.toUpperCase();
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(cepInput.value)) {
        alert('CEP inválido! Formato correto: 00000-000');
        return;
    }

    if (logradouroInput.value.trim().length < 5) {
        alert('Logradouro deve ter no mínimo 5 caracteres.');
        return;
    }

    if (!/^\d+$/.test(numeroInput.value)) {
        alert('Número deve conter apenas dígitos.');
        return;
    }

    const ufRegex = /^[A-Z]{2}$/;
    if (!ufRegex.test(ufInput.value)) {
        alert('UF inválido! Digite duas letras maiúsculas.');
        return;
    }

    alert('Endereço cadastrado com sucesso');
    form.reset();
});

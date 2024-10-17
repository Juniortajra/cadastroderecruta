function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear(); // Ano atual
    return anoAtual - anoNascimento;
  }

  function salvarRecruta() {
    const primeiroNome = document.getElementById("primeiroNome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const campoEstudo = document.getElementById("campoEstudo").value;
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value);

    if (isNaN(anoNascimento)) {
      alert("Por favor, insira um ano válido.");
      return;
    }

    const idade = calcularIdade(anoNascimento);

    // Exibindo as informações
    alert(`Recruta salvo:\n
Nome: ${primeiroNome} ${sobrenome}\n
Campo de Estudo: ${campoEstudo}\n
Ano de Nascimento: ${anoNascimento}\n
Idade: ${idade} anos`);
  }
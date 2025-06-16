export function calcularIdade(dataNascimentoStr: string) {
  const partes = dataNascimentoStr.split("/");
  const dia = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10) - 1;
  const ano = parseInt(partes[2], 10);
  const dataNascimento = new Date(ano, mes, dia);
  const hoje = new Date();

  let anos = hoje.getFullYear() - dataNascimento.getFullYear();
  let meses = hoje.getMonth() - dataNascimento.getMonth();

  if (meses < 0 || (meses === 0 && hoje.getDate() < dataNascimento.getDate())) {
    anos--;
    meses += 12;
  }

  if (hoje.getDate() < dataNascimento.getDate()) {
    meses--;
    if (meses < 0) {
      anos--;
      meses += 12;
    }
  }

  const textoAnos = anos === 1 ? "1 ano" : `${anos} anos`;
  const textoMeses = meses === 1 ? "1 mês" : `${meses} meses`;

  return `${textoAnos} ${textoMeses}`;
}

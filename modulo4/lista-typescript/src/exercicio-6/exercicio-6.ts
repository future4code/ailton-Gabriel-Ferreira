type cliente = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const clienteArr: cliente[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const novoDebito = (arr: cliente[]): cliente[] => {
  const valorInicial: number = 0;
  const clienteMapeado: cliente[] = arr.map((data) => {
    const valorDebito: number = data.debitos.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      valorInicial
    );
    data.debitos = [valorDebito];
    data.saldoTotal = data.saldoTotal - data.debitos[0];
    data.debitos = [];
    return data;
  });
  return clienteMapeado;
};

console.table(novoDebito(clienteArr));

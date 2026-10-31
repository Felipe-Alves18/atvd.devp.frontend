const produtos = [
  { nome: "Camiseta Básica", preco: 79.9, estoque: 20 },
  { nome: "Calça Jeans", preco: 189.9, estoque: 8 },
  { nome: "Jaqueta", preco: 349.9, estoque: 3 },
  { nome: "Boné", preco: 49.9, estoque: 15 },
  { nome: "Tênis", preco: 259.9, estoque: 5 },
];

console.log(produtos);
function precoComDesconto(preco, desconto = 10) {
  return preco - (preco * desconto) / 100;
}

console.log(precoComDesconto(100));      // esperado: 90
console.log(precoComDesconto(100, 25));  // esperado: 75
console.log(precoComDesconto(189.9));    // esperado: 170.91
function classificarPreco(preco) {
  if (preco < 100) {
    return "barato";
  } else if (preco < 250) {
    return "medio";
  } else {
    return "caro";
  }
}

console.log(classificarPreco(49.9));   // esperado: barato
console.log(classificarPreco(189.9));  // esperado: medio
console.log(classificarPreco(349.9));  // esperado: caro
const comDesconto = produtos.map((produto) => {
  return {
    nome: produto.nome,
    preco: precoComDesconto(produto.preco),
    estoque: produto.estoque,
  };
});

const caros = comDesconto.filter((produto) => {
  return classificarPreco(produto.preco) === "caro";
});

const valorTotalEstoque = produtos.reduce((total, produto) => {
  return total + produto.preco * produto.estoque;
}, 0);

console.log(comDesconto);
console.log(caros);
console.log(valorTotalEstoque);
function criarElementoProduto(produto) {
  const item = document.createElement("article");
  item.classList.add("produto", classificarPreco(produto.preco));
  item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)} (estoque: ${produto.estoque})`;
  return item;
}

const areaResultado = document.querySelector("#resultado");

if (areaResultado === null) {
  console.error("Seção #resultado não encontrada");
} else {
  comDesconto.forEach((produto) => {
    areaResultado.append(criarElementoProduto(produto));
  });

  const resumo = document.createElement("p");
  resumo.classList.add("resumo");
  resumo.textContent = `Valor total em estoque: R$ ${valorTotalEstoque.toFixed(2)}`;
  areaResultado.append(resumo);
}

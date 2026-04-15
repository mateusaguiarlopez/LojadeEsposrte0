const botoes = document.querySelectorAll(".btn_comprar");
const carrinho = document.getElementById("carrinho");
const total = document.getElementById("total");

let soma = 0;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

            const nome = botao.getAttribute("data-nome");
                    const preco = parseFloat(botao.getAttribute("data-preco"));

                            // criar item
                                    const item = document.createElement("li");
                                            item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

                                                    carrinho.appendChild(item);

                                                            // atualizar total
                                                                    soma += preco;
                                                                            total.textContent = `Total: R$ ${soma.toFixed(2)}`;
                                                                                });
                                                                                });
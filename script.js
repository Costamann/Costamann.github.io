
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(produto + " foi adicionado ao carrinho!");
}

function mostrarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const msgVazio = document.getElementById("mensagem-vazio");
    if (!lista) return;

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho.length === 0) {
        msgVazio.style.display = "block";
    } else {
        msgVazio.style.display = "none";
        carrinho.forEach(produto => {
            const li = document.createElement("li");
            li.textContent = produto;
            lista.appendChild(li);
        });
    }
}

window.onload = mostrarCarrinho;

function pesquisarProdutos(texto) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(p => {
        const nome = p.querySelector('h3').textContent.toLowerCase();
        p.style.display = nome.includes(texto.toLowerCase()) ? 'block' : 'none';
    });
}

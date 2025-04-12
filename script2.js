onload = () =>{
    document.body.classList.remove("container");
};

window.onload = () => {
    document.body.classList.remove("container");

    // Adicionar um evento de clique em qualquer lugar dentro da página
    document.body.addEventListener('click', () => {
        // Redirecionar para a página "pedido.html"
        window.location.href = "nos.html";
    });

    // Caso queira que o clique nas flores redirecione também, você pode manter esse evento:
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('click', (event) => {
            // Impede o clique nas flores de também redirecionar o restante da página
            event.stopPropagation();  // Impede a propagação do clique
            window.location.href = "nos.html";
        });
    });
};


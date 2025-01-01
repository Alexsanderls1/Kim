document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os links de menu
    const menuLinks = document.querySelectorAll(".menu a, .footer-menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            // Previne o comportamento padrão do link
            event.preventDefault();

            // Obtém o alvo do link (id da seção)
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Faz o scroll suave para a seção alvo
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
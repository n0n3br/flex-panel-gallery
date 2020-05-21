const init = () => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
        panel.addEventListener("transitionend", (event) => {
            if (!event.propertyName.includes("flex")) return;
            event.target.classList.toggle("active");
        });

        panel.addEventListener("click", (event) => {
            let element = event.target;
            if (!Array.from(element.classList).includes("panel"))
                element = element.parentElement;
            element.classList.toggle("open");
        });
    });
};
window.addEventListener("load", init);

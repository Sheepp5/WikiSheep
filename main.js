import { crearHeader } from "./src/components/header.js";
import { crearMain } from "./src/components/mainSection.js";
import { crearFooter } from "./src/components/footer.js";
import { initCategoriasController } from "./src/controllers/categoriaController.js";

window.addEventListener("DOMContentLoaded", async () => {
  const app = document.querySelector("#app");

  const header = crearHeader();
  const footer = crearFooter();

  const mainContainer = document.createElement("main");
  mainContainer.classList.add("content");
  const loader = document.createElement("p");
  loader.textContent = "Cargando contenido, por favor espera…";
  loader.classList.add("loader");
  mainContainer.appendChild(loader);

  app.append(header, mainContainer, footer);

  const dynamicContent = await crearMain();

  // ✅ Limpieza correcta sin innerHTML
  mainContainer.replaceChildren(...dynamicContent.children);

  if (window.location.pathname.includes("categoria.html")) {
    initCategoriasController();
  }
});

import { crearSidebar } from './sidebar.js';

let sidebarAbierto = false;

export function crearHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const logo = document.createElement("a");
  logo.href = "index.html";
  logo.classList.add("logo");
  logo.textContent = "WikiSheep";

  const menuButton = document.createElement("button");
  menuButton.classList.add("hamburger-menu");
  menuButton.setAttribute("aria-label", "Abrir menú");

  const menuIcon = document.createElement("i");
  menuIcon.classList.add("ri-menu-line");
  menuButton.appendChild(menuIcon);

  menuButton.addEventListener("click", async () => {
    if (!sidebarAbierto) {
      await crearSidebar({
        onClose: () => {
          menuIcon.classList.remove("ri-close-line");
          menuIcon.classList.add("ri-menu-line");
          sidebarAbierto = false;
        }
      });

      // Abre manualmente con clase
      document.querySelector('.sidebar')?.classList.add('is_open');
      document.querySelector('.sidebar_overlay')?.classList.add('is_open');

      menuIcon.classList.remove("ri-menu-line");
      menuIcon.classList.add("ri-close-line");
      sidebarAbierto = true;
    }
  });


  const logoWrap = document.createElement("div");
  logoWrap.style.display = "flex";
  logoWrap.style.alignItems = "center";
  logoWrap.style.gap = "1rem";
  logoWrap.appendChild(menuButton);
  logoWrap.appendChild(logo);

  headerContainer.appendChild(logoWrap);
  // headerContainer.appendChild(searchContainer);
  header.appendChild(headerContainer);

  return header;
}
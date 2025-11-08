import { fetchData } from "../utils/fetchData.js";

export const crearSidebar = async ({ onClose } = {}) => {
  if (document.querySelector('.sidebar')) return;

  const overlay = document.createElement('div');
  overlay.classList.add('sidebar_overlay');

  const aside = document.createElement('aside');
  aside.classList.add('sidebar');

  const closeButton = document.createElement('button');
  closeButton.classList.add('sidebar-close');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('ri-close-line');
  closeButton.appendChild(closeIcon);
  aside.appendChild(closeButton);

  const container = document.createElement('div');
  container.classList.add('sidebar-items');

  const inicioLink = document.createElement('a');
  inicioLink.classList.add('sidebar-item');
  inicioLink.href = "index.html";

  const inicioIcon = document.createElement('i');
  inicioIcon.classList.add('ri-home-line');

  const inicioSpan = document.createElement('span');
  inicioSpan.textContent = 'Inicio';

  inicioLink.append(inicioIcon, inicioSpan);
  container.appendChild(inicioLink);

  const dynamicContainer = document.createElement('div');
  dynamicContainer.classList.add('sidebar-dynamic-items');

  document.body.appendChild(aside);

  // Estimamos la altura disponible restando lo que ocupa el botón "Inicio"
  const sidebarHeight = aside.offsetHeight;
  const fixedItemHeight = 48; // altura aproximada de un item (puedes ajustar)
  const inicioOffset = 60; // espacio ocupado por el botón "Inicio" u otros
  
  const maxSidebarItems = Math.floor((sidebarHeight - inicioOffset) / fixedItemHeight);
  
  // Removemos el aside para que no se vea hasta estar listo
  document.body.removeChild(aside);
  try {
    const url = "https://api.jikan.moe/v4/genres/manga";
    const res = await fetchData(url);

    if (res && res.data) {
      res.data.slice(0, maxSidebarItems).forEach(genre => {
        const a = document.createElement('a');
        a.href = `categoria.html?genero=${encodeURIComponent(genre.name)}&tipo=manga`;
        a.classList.add('sidebar-item');

        const i = document.createElement('i');
        i.classList.add('ri-book-line');

        const span = document.createElement('span');
        span.textContent = genre.name;

        a.append(i, span);
        dynamicContainer.appendChild(a);
      });
    }
  } catch (error) {
    console.error("Error fetching manga genres for sidebar:", error);
  }

  container.appendChild(dynamicContainer);
  aside.appendChild(container);

  const closeMenu = () => {
    aside.classList.remove('is_open');
    overlay.classList.remove('is_open');
    setTimeout(() => {
      aside.remove();
      overlay.remove();
      if (typeof onClose === "function") onClose();
    }, 300);
  };

  overlay.addEventListener('click', closeMenu);
  closeButton.addEventListener('click', closeMenu);
  container.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });

  document.body.append(aside, overlay);
};
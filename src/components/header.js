export function crearHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const logo = document.createElement("a");
  logo.href = "index.html";
  logo.classList.add("logo");
  logo.textContent = "WikiSheep";

  const logoWrap = document.createElement("div");
  logoWrap.style.display = "flex";
  logoWrap.style.alignItems = "center";
  logoWrap.style.gap = "1rem";
  logoWrap.appendChild(logo);

  // Contenedor de los iconos
  const iconContainer = document.createElement("div");
  iconContainer.style.display = "flex";
  iconContainer.style.gap = "1rem";

  const icons = [
    { href: "index.html", iconClass: "fa-solid fa-house-chimney", title: "Home"},
    {iconClass: "fa-solid fa-book", title: "Categories"},
    {iconClass: "fa-solid fa-fire", title: "Most Popular"},
  ]
  
  icons.forEach(({ href, iconClass, title }) => {
    const link = document.createElement("a");
    link.href = href;
    link.title = title;
    link.innerHTML = `<i class="${iconClass}"></i>`;
    link.style.color = "var(--second-color)";
    link.style.fontSize = "1.5rem";
    link.style.display = "flex";
    link.style.alignItems = "center";
    iconContainer.appendChild(link);
  });

  // Ensamblar el header
  headerContainer.appendChild(logoWrap);
  headerContainer.appendChild(iconContainer);
  header.appendChild(headerContainer);

  return header;
}
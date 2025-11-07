import { fetchData } from "./fetchData.js";

// Aquí se está manejando el contenido que se muestra en el apartado de "categorias"

export async function obtenerDatosPorGenero(genreId, tipo = "manga") {
  if (!genreId || isNaN(genreId)) {
    console.error("ID de género no válido:", genreId);
    return [];
  }

  const url = tipo === "manga"
    ? `https://api.jikan.moe/v4/manga?genres=${genreId}&order_by=score&sort=desc`
    : ``;

  try {
    const res = await fetchData(url);

    if (!res || !res.data) {
      console.warn("No se encontraron datos para el género:", genreId, tipo);
      return [];
    }

    return res.data.slice(0, 25).map(item => ({
      title: item.title,
      image: item.images?.jpg?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPb9KqZvuoBmf71tYhOzxOCar7lKi1b9sag&s",
      id: item.mal_id,
      tipo: tipo
    }));
  } catch (error) {
    console.error("Error al obtener datos para el género:", genreId, tipo, error);
    return [];
  }
}
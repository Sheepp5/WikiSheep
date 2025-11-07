import { fetchData } from "../utils/fetchData.js";

export async function cargarLectura(tipo, id) {
  try {
    const url = `https://api.jikan.moe/v4/${tipo}/${id}`;
    const res = await fetchData(url);
    if (res && res.data) {
      const d = res.data;
      const titulo = d.title || d.title_english || d.title_japanese || "Sin título";
      const imagen = d.images && d.images.jpg && d.images.jpg.image_url
        ? d.images.jpg.image_url
        : "https://via.placeholder.com/300x400?text=No+Image";
          
        if (tipo === "manga") {
        return {
          tipo,
          titulo,
          url: d.url || "",
          imagen,
          type: d.type || "",
          chapters: d.chapters || "Desconocido",
          volumes: d.volumes || "Desconocido",
          status: d.status || "Desconocido",
          publishing: d.publishing !== undefined ? (d.publishing ? "En publicación" : "Finalizado") : "",
          publishedFrom: d.published && d.published.from ? d.published.from : "No especificado",
          publishedTo: d.published && d.published.to ? d.published.to : "No especificado",
          score: d.score || "No especificado",
          rank: d.rank || "No especificado",
          popularity: d.popularity || "No especificado",
          members: d.members || "No especificado",
          favorites: d.favorites || "No especificado",
          synopsis: d.synopsis || "Sin sinopsis disponible.",
          background: d.background || "",
          authors: d.authors ? d.authors.map(a => a.name).join(", ") : "",
          serializations: d.serializations ? d.serializations.map(s => s.name).join(", ") : "",
          genres: d.genres ? d.genres.map(g => g.name).join(", ") : "",
          explicit_genres: d.explicit_genres ? d.explicit_genres.map(g => g.name).join(", ") : "",
          themes: d.themes ? d.themes.map(t => t.name).join(", ") : "",
          demographics: d.demographics ? d.demographics.map(t => t.name).join(", ") : "",
          relations: d.relations ? d.relations.map(r => `${r.relation}: ${r.entry.map(e => e.name).join(", ")}`).join(" | ") : "",
          external: d.external ? d.external.map(e => `${e.name}: ${e.url}`).join(" | ") : ""
        };
      }
    }
    return null;
  } catch (error) {
    console.error(`Error al cargar lectura para ${tipo} con ID ${id}:`, error);
    return null;
  }
}

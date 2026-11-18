# Generador de direcciones residenciales

Página web sencilla que genera direcciones reales de casas en Estados Unidos y Canadá.

**Versión publicada:** https://mastlecure.github.io/generador-direcciones/

## Funciones

- Direcciones reales de viviendas (casa, dúplex, casa en hilera, edificio residencial); se descartan comercios, bodegas y oficinas.
- Filtro por país (EE.UU., Canadá o ambos) y por ciudad (27 de EE.UU. y 15 de Canadá).
- **Buscar cualquier ciudad o código postal** (ej. `Orlando`, `33101`, `M5V`); si hay varias con el mismo nombre, se ofrecen las otras.
- **Siguiente dirección instantánea:** mientras ves una, la app prepara la siguiente (con sus teléfonos) en segundo plano; el botón muestra ⚡ cuando está lista.
- **Los 3 teléfonos públicos más cercanos:** negocios o lugares públicos con teléfono (nombre, categoría, distancia y código de área local). Siempre son números que los negocios publicaron en OpenStreetMap, nunca el de la vivienda.
- **Copiar con teléfono:** copia la dirección y el teléfono más cercano juntos.
- **Favoritos con notas:** guarda direcciones con ⭐ y escribe notas; no se borran con el historial.
- Mapa satelital (con nombres de calles) o de calles, con zoom, y enlaces para verificar en Google Maps, Street View y OpenStreetMap. El mapa se arma con imágenes (mosaicos), así carga igual en móvil y en PC.
- Se puede instalar en el escritorio del móvil con su propio logo (`icons/` y `manifest.webmanifest`).
- Clic en cualquier dato para copiarlo; botón para copiar la dirección completa.
- Historial de las últimas 15 direcciones (se guarda en el navegador) y exportación a CSV de favoritos (con notas) e historial.
- **Funciona como app instalada:** el service worker (`sw.js`) guarda la página en el móvil; abre sin internet y deja ver favoritos e historial (el mapa y las búsquedas necesitan conexión).
- Atajo de teclado: <kbd>G</kbd> genera otra dirección.

## Fuentes de datos

Todo funciona en el navegador, sin servidor propio ni claves de API:

| Uso | Servicio |
| --- | --- |
| Buscar casas con dirección | [Photon](https://photon.komoot.io) (respaldo: [Nominatim](https://nominatim.org)) |
| Teléfono más cercano | [Overpass API](https://overpass-api.de) con varios espejos (respaldo: Nominatim) |
| Mapa | Mosaicos de [Esri World Imagery](https://www.esri.com) (satélite) y OpenStreetMap (calles) |

Datos © colaboradores de [OpenStreetMap](https://www.openstreetmap.org/copyright) (ODbL).

## Uso

Abrir la versión publicada, o servir la carpeta localmente:

```bash
python -m http.server 8000
```

y entrar en http://localhost:8000. Cada cambio que se sube a la rama `main` se publica solo en GitHub Pages.

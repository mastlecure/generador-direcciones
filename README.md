# Generador de direcciones residenciales

Página web sencilla que genera direcciones reales de casas en Estados Unidos y Canadá.

**Versión publicada:** https://mastlecure.github.io/generador-direcciones/

## Funciones

- Direcciones reales de viviendas (casa, dúplex, casa en hilera, edificio residencial); se descartan comercios, bodegas y oficinas.
- Filtro por país (EE.UU., Canadá o ambos) y por ciudad (27 de EE.UU. y 15 de Canadá).
- **Teléfono público más cercano:** muestra el negocio o lugar público con teléfono más cercano a la dirección (nombre, categoría, distancia y código de área local). Es siempre el número de un negocio que lo publicó en OpenStreetMap, nunca el de la vivienda.
- Mapa satelital (con nombres de calles) o de calles, con zoom, y enlaces para verificar en Google Maps, Street View y OpenStreetMap. El mapa se arma con imágenes (mosaicos), así carga igual en móvil y en PC.
- Se puede instalar en el escritorio del móvil con su propio logo (`icons/` y `manifest.webmanifest`).
- Clic en cualquier dato para copiarlo; botón para copiar la dirección completa.
- Historial de las últimas 15 direcciones (se guarda en el navegador), con exportación a CSV y botón para borrarlo.
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

# Convenciones de desarrollo

Normas compartidas entre **base de datos**, **backend**, **frontend** y **estilos**, para que nombres y archivos sean predecibles en todo el ecosistema. Completa o ajusta cada sección según acuerdos del equipo.

## Base de datos y persistencia

- **Tablas:** convención acordada (p. ej. plural en `snake_case`, prefijos por módulo si aplica).
- **Columnas:** `snake_case` (habitual en MySQL/Laravel); claves foráneas con sufijo `_id`.
- **Índices y restricciones:** patrón de nombres único en el proyecto (p. ej. `tabla_columna_index`).
- **Migraciones:** convención de nombres de archivo y orden.

> Los modelos en esta documentación (`models/...`) deben reflejar los nombres canónicos acordados aquí.

## API, JSON y alineación front / back

- **Payloads JSON:** si el API expone `camelCase` o `snake_case`, documentarlo y **no mezclar** capas sin mapeo explícito.
- **Laravel:** convención de recursos/DTOs respecto a los nombres de columnas.
- **Vue / TypeScript:** interfaces y props alineadas con el contrato del API (mismos nombres o capa de adaptación clara).

Para **forma de valores** (email, teléfono, etc.), ver [formatos](./formats).

## Estilos (SASS y BEM)

- **Preprocesador:** SASS (sintaxis acordada: SCSS indented vs `.scss`).
- **Metodología de clases:** [BEM](https://getbem.com/) (Bloque, Elemento, Modificador); convención de separadores (`__`, `--`) unificada en el proyecto.
- **Archivos de estilo:** convención de un archivo por componente, parciales, variables y mixins globales (rutas y prefijos `_` si se usan).

## Nombres de archivos y carpetas

- **Componentes Vue:** convención (p. ej. `PascalCase.vue` o `kebab-case` según estándar del repo de código).
- **Vistas, composables, stores:** mismo criterio en todo el monorepo o app.
- **Tests:** sufijo o carpeta (`*.spec.ts`, `__tests__/`, etc.).

## Otros (ampliar según necesidad)

- Ramas Git y mensajes de commit.
- Variables de entorno y prefijos.
- Internacionalización: claves `i18n` (p. ej. `modulo.seccion.clave`).
- Nombres de rutas y permisos.

---

*Esta página es la referencia viva de convenciones; enlázala desde el README del código o desde la wiki del equipo si hace falta.*

# GitFlow, entornos y gestión en GitHub

Cómo movemos el código desde la máquina del desarrollador hasta producción, y cómo enlazamos ese flujo con **GitHub Issues** y **GitHub Projects** para que cada cambio sea trazable y revisable.

## Cadena de entornos

El flujo acordado de despliegue y validación es:

**local → dev → QA → prod**

| Entorno | Rol |
| --- | --- |
| **Local** | Desarrollo y pruebas del desarrollador; aquí nacen las ramas de trabajo. |
| **Dev** | Integración continua del equipo: detecta conflictos y regresiones tempranas. |
| **QA** | Validación funcional y de calidad antes de liberar a usuarios finales. |
| **Prod** | Entorno estable y visible al negocio o al cliente. |

Las promociones entre entornos deben ser **explícitas** (merge o despliegue acordado), no saltarse pasos salvo excección documentada y aprobada.

## Gestión de tareas con GitHub

- **Issues** son la unidad de trabajo: cada cambio significativo debería poder rastrearse hasta un issue (o estar explícitamente ligado en el PR).
- **GitHub Projects** organiza el tablero (columnas, prioridades, hitos). Es la vista compartida de “qué está en curso” y “qué sigue”.
- **Iteraciones cortas:** no planificar “sprints” de más de **dos semanas**; cada ciclo debe tener **objetivos claros y medibles** (qué se entrega, qué queda fuera).
- **Alcance realista:** mejor cerrar menos ítems con calidad que arrastrar bloques grandes sin entrega.
- **Transparencia:** mantener el proyecto actualizado (estado del issue, bloqueos, dependencias) para que dev, QA y producto vean el mismo tablero.

## Ramas, PRs y una tarea por rama

- **Una rama = una tarea concreta** (un issue o una unidad de trabajo equivalente acordada). Evita mezclar varios temas en la misma rama o en el mismo PR.
- **Nombre de rama alineado con la tarea:** el patrón exacto (prefijos, slug, número de issue) está en [Convenciones de desarrollo — Git: ramas y commits](./conventions#git-ramas-y-commits).
- Los **pull requests** deben referenciar el issue (`Closes #123`, `Refs #123`, etc.) para cerrar el ciclo entre código y seguimiento.

## Flujo típico (resumen)

1. Se define o toma la tarea en **Issues / Projects**.
2. Se crea una **rama** desde la base acordada (p. ej. `develop` o `main`, según política del repo de código) con nombre ligado al issue.
3. Trabajo y commits en **local**; PR hacia la rama de integración que alimenta **dev**.
4. Tras validación en **dev**, el cambio avanza a **QA** según el proceso de release del equipo.
5. Tras sign-off en **QA**, se promociona a **prod**.

Los detalles de ramas largas (`main`, `develop`, `release/*`, `hotfix/*`) los fija cada repositorio de aplicación; esta página define el **marco común** (entornos, GitHub y reglas de una-rama-por-tarea).

---

*Para convenciones de nombres (ramas, commits, archivos), ver [convenciones](./conventions).*

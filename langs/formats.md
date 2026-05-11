# Formatos

Referencia de **formatos comunes** en APIs y modelos de dominio. Los límites concretos (longitudes, obligatoriedad) siguen definiéndose en cada entidad; aquí solo el **criterio de forma** del valor.

## Correo electrónico (`email`) {#correo-electrónico-email}

- Formato acorde a **RFC 5322** en su forma práctica de uso en productos (dirección `local@domain`).
- En payload JSON suele representarse como **cadena UTF-8**.
- Normalización recomendada en servidor: **trim**, comparación **case-insensitive** del dominio según política del producto.

## Teléfono (`phone`) {#teléfono-phone}

- Cadena con número en formato acordado por el producto; **E.164** es el estándar habitual en APIs (`+[código país][número]`, sin espacios).
  - Ejemplo: `+34900123456`

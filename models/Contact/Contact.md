# Contacto (Contact)

## 📋 Campos

| # | Etiqueta | Campo | Reglas |
|---|----------|-------|--------|
| 1 | ID | `id` | Requerido |
| 2 | ID del usuario | `user_id` | Requerido<br>[`User.id`](../User/User.md) |
| 3 | Usuario | `user` | Requerido<br>Modelo: [`User`](../User/User.md) |
| 4 | Tipo | `type_val` | Requerido<br>Enum: [`TypeEnum.value`](./TypeEnum.md) |
| 5 | Tipo | `type` | Requerido<br>Enum: [`TypeEnum`](./TypeEnum.md) |
| 6 | Valor | `value` | Requerido<br>Formato:<br>- type_val = [`TypeEnum.EMAIL`](TypeEnum.md): [`Email`](../../Formats.md#teléfono-phone)<br>- type_val = [`TypeEnum.PHONE`](./TypeEnum.md): [`Phone`](../../Formats.md#correo-electrónico-email) |
| 7 | Fecha de creación | `created_at` | Requerido<br>Momento (fecha/hora) |
| 8 | Fecha de actualización | `updated_at` | Requerido<br>Momento (fecha/hora) |
| 9 | Fecha de eliminación | `deleted_at` | Momento (fecha/hora) |

## 🔗 Relaciones

| # | Nombre | Entidad | Enlace | Cardinalidad |
|---|--------|---------|--------|---------------|
| 1 | Usuario | [`Usuario`](../User/User.md) | `Contact.user_id` → `User.id` | `N` → `1` |

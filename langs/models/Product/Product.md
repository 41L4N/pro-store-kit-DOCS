# Producto (Product)

## 📋 Campos

| # | Etiqueta | Campo | Reglas |
|---|----------|-------|--------|
| 1 | ID | `id` | Requerido |
| 2 | Archivos | `attachments` | Modelo: [`Adjunto`](../Attachment/Attachment.md)<br>Cardinalidad: `1` → `0..5`<br>Enlace:<br>(`Product.id` = [`Attachment.owner_id`](../Attachment/Attachment.md))<br>& ([`Attachment.owner_type_val`](../Attachment/Attachment.md) = [`OwnerTypeEnum.PRODUCT`](../Attachment/OwnerTypeEnum.md))<br>& (([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.COVER`](../Attachment/TypeEnum.md)) ∨ ([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.VIDEO`](../Attachment/TypeEnum.md)) ∨ ([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.IMAGE`](../Attachment/TypeEnum.md)) ∨ ([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.PDF`](../Attachment/TypeEnum.md))) |
| 3 | ID del usuario | `user_id` | Requerido<br>Modelo: [`Usuario`](../User/User.md)<br>Cardinalidad: `N` → `1`<br>Enlace:<br>(`Product.user_id` = [`User.id`](../User/User.md)) |
| 4 | Usuario | `user` | Requerido<br>Modelo: [`Usuario`](../User/User.md)<br>Cardinalidad: `N` → `1`<br>Enlace:<br>(`Product.user_id` = [`User.id`](../User/User.md)) |
| 5 | Nombre | `name` | Requerido<br>Texto<br>Longitud: 1-255 |
| 6 | Descripción | `description` | Texto<br>Longitud: 0-4000 |
| 7 | Fecha de creación | `created_at` | Requerido<br>Momento (fecha/hora) |
| 8 | Fecha de actualización | `updated_at` | Requerido<br>Momento (fecha/hora) |
| 9 | Fecha de eliminación | `deleted_at` | Momento (fecha/hora) |

## ⚡ Acciones

| # | Nombre | Acción | Permiso | Método | Ruta | DTO |
|---|--------|--------|---------|--------|------|-----|
| 1 | Crear | `create` | `Product.create` | `POST` | `/products` | `user_id`, `name`, `description` |
| 2 | Actualizar | `update` | `Product.update` | `PUT` | `/products/{id}` | `name`, `description` |
| 3 | Leer | `read` | `Product.read` | `GET` | `/products/{id}` | `id`, `user_id`, `name`, `description`, `created_at`, `updated_at`, `deleted_at` |
| 4 | Eliminar | `delete` | `Product.delete` | `DELETE` | `/products/{id}` | — |

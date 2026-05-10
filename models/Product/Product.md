# Producto (Product)

## 📋 Campos

| # | Etiqueta | Campo | Reglas |
|---|----------|-------|--------|
| 1 | ID | `id` | Requerido. |
| 2 | ID del usuario | `user_id` | Requerido.<br>[`User.id`](../User/User.md). |
| 3 | Usuario | `user` | Requerido.<br>Modelo: [`User`](../User/User.md). |
| 4 | Nombre | `name` | Requerido.<br>Texto.<br>Longitud: 1-255. |
| 5 | Descripción | `description` | Texto.<br>Longitud: 0-4000. |
| 6 | Fecha de creación | `created_at` | Requerido.<br>Momento (fecha/hora). |
| 7 | Fecha de actualización | `updated_at` | Requerido.<br>Momento (fecha/hora). |
| 8 | Fecha de eliminación | `deleted_at` | Momento (fecha/hora). |

## ⚡ Acciones

| # | Nombre | Acción | Permiso | Método | Ruta | DTO |
|---|--------|--------|---------|--------|------|-----|
| 1 | Crear | `create` | `Product.create` | `POST` | `/products` | `user_id`, `name`, `description` |
| 2 | Actualizar | `update` | `Product.update` | `PUT` | `/products/{id}` | `name`, `description` |
| 3 | Leer | `read` | `Product.read` | `GET` | `/products/{id}` | `id`, `user_id`, `name`, `description`, `created_at`, `updated_at`, `deleted_at` |
| 4 | Eliminar | `delete` | `Product.delete` | `DELETE` | `/products/{id}` | — |

## 🔗 Relaciones

| # | Nombre | Entidad | Enlace | Cardinalidad |
|---|--------|---------|--------|---------------|
| 1 | Usuario | [`Usuario`](../User/User.md) | `Product.user_id` → `User.id` | `N` → `1` |
| 2 | Archivos | [`Adjunto`](../Attachment/Attachment.md) | `Product.id` → `Attachment.owner_id` | `1` → `0..5` |

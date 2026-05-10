# Usuario (User)

## 📋 Campos

| # | Etiqueta | Campo | Reglas |
|---|----------|-------|--------|
| 1 | ID | `id` | Requerido. |
| 2 | Correo electrónico | `email` | Requerido.<br>Formato email válido.<br>Longitud: 3-254.<br>Único. |
| 3 | Nombre | `name` | Requerido.<br>Texto.<br>Longitud: 1-100. |
| 4 | Apellido | `last_name` | Requerido.<br>Texto.<br>Longitud: 1-100. |
| 5 | Teléfono | `phone` | Requerido.<br>Texto.<br>Longitud: 6-32.<br>Único. |
| 6 | Estado | `status_val` | Requerido.<br>Enum: [`StatusEnum.value`](./StatusEnum.md). |
| 7 | Estado | `status` | Requerido.<br>Enum: [`StatusEnum`](./StatusEnum.md). |
| 8 | Fecha de creación | `created_at` | Requerido.<br>Momento (fecha/hora). |
| 9 | Fecha de actualización | `updated_at` | Requerido.<br>Momento (fecha/hora). |
| 10 | Fecha de eliminación | `deleted_at` | Momento (fecha/hora). |

## ⚡ Acciones

| # | Nombre | Acción | Permiso | Método | Ruta | DTO |
|---|--------|--------|---------|--------|------|-----|
| 1 | Crear | `create` | `User.create` | `POST` | `/users` | `email`, `name`, `last_name`, `phone`, `status_val` |
| 2 | Actualizar | `update` | `User.update` | `PUT` | `/users/{id}` | `email`, `name`, `last_name`, `phone`, `status_val` |
| 3 | Leer | `read` | `User.read` | `GET` | `/users/{id}` | `id`, `email`, `name`, `last_name`, `phone`, `status_val`, `status`, `created_at`, `updated_at`, `deleted_at` |
| 4 | Eliminar | `delete` | `User.delete` | `DELETE` | `/users/{id}` | — |

## 🔗 Relaciones

| # | Nombre | Entidad | Enlace | Cardinalidad |
|---|--------|---------|--------|---------------|
| 1 | Avatar | [`Archivo adjunto`](../Attachment/Attachment.md) | [`Attachment.owner_type_val`](../Attachment/Attachment.md) = [`AttachmentOwnerTypeEnum.USER`](../Attachment/OwnerTypeEnum.md) <br> [`Attachment.owner_id`](../Attachment/Attachment.md) → `User.id` | `1` → `0..1` |
| 2 | Contactos | `Contacto` | `User.id` → `Contact.user_id` | `1` → `N` |
| 3 | Productos | `Producto` | `User.id` → `Product.user_id` | `1` → `N` |


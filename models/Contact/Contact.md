# Contacto (Contact)

Representa un **medio de comunicación** del usuario (teléfono o correo como canal), no una persona de referencia.

## 📋 Campos

| # | Etiqueta | Campo | Reglas |
|---|----------|-------|--------|
| 1 | ID | `id` | Requerido. |
| 2 | ID del usuario | `user_id` | Requerido.<br>[`User.id`](../User/User.md). |
| 3 | Usuario | `user` | Requerido.<br>Modelo: [`User`](../User/User.md). |
| 4 | Tipo | `type_val` | Requerido.<br>Enum: [`TypeEnum.value`](./TypeEnum.md). |
| 5 | Tipo | `type` | Requerido.<br>Enum: [`TypeEnum`](./TypeEnum.md). |
| 6 | Valor | `value` | Requerido.<br>Formato:<br>- type_val = [`TypeEnum.PHONE`](./TypeEnum.md): Phone<br>- type_val = [`TypeEnum.EMAIL`](TypeEnum.md): Email |
| 7 | Fecha de creación | `created_at` | Requerido.<br>Momento (fecha/hora). |
| 8 | Fecha de actualización | `updated_at` | Requerido.<br>Momento (fecha/hora). |
| 9 | Fecha de eliminación | `deleted_at` | Momento (fecha/hora). |

## ⚡ Acciones

| # | Nombre | Acción | Permiso | Método | Ruta | DTO |
|---|--------|--------|---------|--------|------|-----|
| 1 | Listar por usuario | `listByUser` | `Contact.listByUser` | `GET` | `/users/{user_id}/contacts` | — |
| 2 | Crear | `create` | `Contact.create` | `POST` | `/users/{user_id}/contacts` | `type_val`, `value` |
| 3 | Leer | `read` | `Contact.read` | `GET` | `/contacts/{id}` | `id`, `user_id`, `user`, `type_val`, `type`, `value`, `created_at`, `updated_at`, `deleted_at` |
| 4 | Actualizar | `update` | `Contact.update` | `PUT` | `/contacts/{id}` | `type_val`, `value` |
| 5 | Eliminar | `delete` | `Contact.delete` | `DELETE` | `/contacts/{id}` | — |

## 🔗 Relaciones

| # | Nombre | Entidad | Enlace | Cardinalidad |
|---|--------|---------|--------|---------------|
| 1 | Usuario | [`Usuario`](../User/User.md) | `Contact.user_id` → `User.id`<br>`Contact.user` → [`User`](../User/User.md) | `N` → `1` |

Desde **Usuario** hacia **Contacto:** `1` → `0..2` (véase [`Usuario`](../User/User.md) · Relaciones).

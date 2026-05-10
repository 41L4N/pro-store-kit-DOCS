# Adjunto (Attachment)

## 📋 Campos

| # | Etiqueta | Campo | Reglas |
|---|----------|-------|--------|
| 1 | ID | `id` | Requerido. |
| 2 | Tipo de dueño | `owner_type_val` | Requerido.<br>Enum: [`OwnerTypeEnum.value`](./OwnerTypeEnum.md). |
| 3 | Tipo de dueño | `owner_type` | Requerido.<br>Enum: [`OwnerTypeEnum`](./OwnerTypeEnum.md). |
| 4 | ID del dueño | `owner_id` | Requerido.<br> Enum: [`OwnerTypeEnum.entidad.id`](./OwnerTypeEnum.md) |
| 5 | Dueño | `owner` | Requerido.<br> Enum: [`OwnerTypeEnum.entidad`](./OwnerTypeEnum.md) |
| 6 | Tipo de adjunto | `attachment_type_val` | Requerido.<br>Enum: [`TypeEnum.value`](./TypeEnum.md). |
| 7 | Tipo de adjunto | `attachment_type` | Requerido.<br>Enum: [`TypeEnum`](./TypeEnum.md). |
| 8 | Nombre | `name` | Requerido.<br>Texto.<br>Longitud: 1-255. |
| 9 | Tipo MIME | `mime_type` | Texto.<br>Longitud: 1-100. |
| 10 | Ruta | `path` | Texto. |
| 11 | Tamaño (bytes) | `byte_size` | Requerido.<br>Entero: ≥ 0. |
| 12 | Fecha de creación | `created_at` | Requerido.<br>Momento (fecha/hora). |
| 13 | Fecha de actualización | `updated_at` | Requerido.<br>Momento (fecha/hora). |
| 14 | Fecha de eliminación | `deleted_at` | Momento (fecha/hora). |

## 🔗 Relaciones

| # | Nombre | Entidad | Enlace | Cardinalidad |
|---|--------|---------|--------|---------------|
| 1 | Dueño | [`Tipo de dueño.entidad`](./OwnerTypeEnum.md) | `Attachment.owner_id` → [`OwnerTypeEnum.entidad.id`](./OwnerTypeEnum.md) | `N` → `1` |

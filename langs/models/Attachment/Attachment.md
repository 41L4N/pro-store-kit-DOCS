# Archivo adjunto (Attachment)

## 📋 Campos

| # | Etiqueta | Campo | Reglas |
|---|----------|-------|--------|
| 1 | ID | `id` | Requerido |
| 2 | Tipo de dueño | `owner_type_val` | Requerido<br>Enum: [`OwnerTypeEnum.value`](./OwnerTypeEnum.md) |
| 3 | Tipo de dueño | `owner_type` | Requerido<br>Enum: [`OwnerTypeEnum`](./OwnerTypeEnum.md) |
| 4 | ID del dueño | `owner_id` | Requerido<br> Enum: [`OwnerTypeEnum.entidad.id`](./OwnerTypeEnum.md) |
| 5 | Tipo de adjunto | `type_val` | Requerido<br>Enum: [`TypeEnum.value`](./TypeEnum.md) |
| 6 | Tipo de adjunto | `type` | Requerido<br>Enum: [`TypeEnum`](./TypeEnum.md) |
| 7 | Nombre | `name` | Requerido<br>Texto<br>Longitud: 1-255 |
| 8 | Tipo MIME | `mime_type` | Texto<br>Longitud: 1-100 |
| 9 | Ruta | `path` | Texto |
| 10 | Tamaño (bytes) | `byte_size` | Requerido<br>Entero: ≥ 0 |
| 11 | Fecha de creación | `created_at` | Requerido<br>Momento (fecha/hora) |
| 12 | Fecha de actualización | `updated_at` | Requerido<br>Momento (fecha/hora) |
| 13 | Fecha de eliminación | `deleted_at` | Momento (fecha/hora) |

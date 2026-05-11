# Attachment

## 📋 Fields

| # | Label | Field | Rules |
|---|-------|-------|-------|
| 1 | ID | `id` | Required |
| 2 | Owner type | `owner_type_val` | Required<br>Enum: [`OwnerTypeEnum.value`](./OwnerTypeEnum.md) |
| 3 | Owner type | `owner_type` | Required<br>Enum: [`OwnerTypeEnum`](./OwnerTypeEnum.md) |
| 4 | Owner ID | `owner_id` | Required<br>Enum: [`OwnerTypeEnum.entity.id`](./OwnerTypeEnum.md) |
| 5 | Attachment type | `type_val` | Required<br>Enum: [`TypeEnum.value`](./TypeEnum.md) |
| 6 | Attachment type | `type` | Required<br>Enum: [`TypeEnum`](./TypeEnum.md) |
| 7 | Name | `name` | Required<br>Text<br>Length: 1-255 |
| 8 | MIME type | `mime_type` | Text<br>Length: 1-100 |
| 9 | Path | `path` | Text |
| 10 | Size (bytes) | `byte_size` | Required<br>Integer ≥ 0 |
| 11 | Created at | `created_at` | Required<br>Date/time |
| 12 | Updated at | `updated_at` | Required<br>Date/time |
| 13 | Deleted at | `deleted_at` | Date/time |

# Product

## 📋 Fields

| # | Label | Field | Rules |
|---|-------|-------|-------|
| 1 | ID | `id` | Required |
| 2 | Attachments | `attachments` | Model: [`Attachment`](../Attachment/Attachment.md)<br>Cardinality: `1` → `0..5`<br>Link:<br>(`Product.id` = [`Attachment.owner_id`](../Attachment/Attachment.md))<br>& ([`Attachment.owner_type_val`](../Attachment/Attachment.md) = [`OwnerTypeEnum.PRODUCT`](../Attachment/OwnerTypeEnum.md))<br>& (([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.COVER`](../Attachment/TypeEnum.md)) ∨ ([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.VIDEO`](../Attachment/TypeEnum.md)) ∨ ([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.IMAGE`](../Attachment/TypeEnum.md)) ∨ ([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.PDF`](../Attachment/TypeEnum.md))) |
| 3 | User ID | `user_id` | Required<br>Model: [`User`](../User/User.md)<br>Cardinality: `N` → `1`<br>Link:<br>(`Product.user_id` = [`User.id`](../User/User.md)) |
| 4 | User | `user` | Required<br>Model: [`User`](../User/User.md)<br>Cardinality: `N` → `1`<br>Link:<br>(`Product.user_id` = [`User.id`](../User/User.md)) |
| 5 | Name | `name` | Required<br>Text<br>Length: 1-255 |
| 6 | Description | `description` | Text<br>Length: 0-4000 |
| 7 | Created at | `created_at` | Required<br>Date/time |
| 8 | Updated at | `updated_at` | Required<br>Date/time |
| 9 | Deleted at | `deleted_at` | Date/time |

## ⚡ Actions

| # | Name | Action | Permission | Method | Route | DTO |
|---|------|--------|------------|--------|-------|-----|
| 1 | Create | `create` | `Product.create` | `POST` | `/products` | `user_id`, `name`, `description` |
| 2 | Update | `update` | `Product.update` | `PUT` | `/products/{id}` | `name`, `description` |
| 3 | Read | `read` | `Product.read` | `GET` | `/products/{id}` | `id`, `user_id`, `name`, `description`, `created_at`, `updated_at`, `deleted_at` |
| 4 | Delete | `delete` | `Product.delete` | `DELETE` | `/products/{id}` | — |

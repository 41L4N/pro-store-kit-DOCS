# User

## 📋 Fields

| # | Label | Field | Rules |
|---|-------|-------|-------|
| 1 | ID | `id` | Required |
| 2 | Email | `email` | Required<br>Valid email format<br>Length: 3-254<br>Unique |
| 3 | First name | `name` | Required<br>Text<br>Length: 1-100 |
| 4 | Last name | `last_name` | Required<br>Text<br>Length: 1-100 |
| 5 | Phone | `phone` | Required<br>Text<br>Length: 6-32<br>Unique |
| 6 | Status | `status_val` | Required<br>Enum: [`StatusEnum.value`](./StatusEnum.md) |
| 7 | Status | `status` | Required<br>Enum: [`StatusEnum`](./StatusEnum.md) |
| 8 | Avatar | `avatar` | Model: [`Attachment`](../Attachment/Attachment.md)<br>Cardinality: `1` → `0..1`<br>Link:<br>(`User.id` = [`Attachment.owner_id`](../Attachment/Attachment.md))<br>& ([`Attachment.owner_type_val`](../Attachment/Attachment.md) = [`OwnerTypeEnum.USER`](../Attachment/OwnerTypeEnum.md))<br>& ([`Attachment.type_val`](../Attachment/Attachment.md) = [`TypeEnum.AVATAR`](../Attachment/TypeEnum.md)) |
| 9 | Contacts | `contacts` | Model: [`Contact`](../Contact/Contact.md)<br>Cardinality: `1` → `0..2`<br>Link:<br>(`User.id` = [`Contact.user_id`](../Contact/Contact.md)) |
| 10 | Products | `products` | Model: [`Product`](../Product/Product.md)<br>Cardinality: `1` → `0..N`<br>Link:<br>(`User.id` = [`Product.user_id`](../Product/Product.md)) |
| 11 | Created at | `created_at` | Required<br>Date/time |
| 12 | Updated at | `updated_at` | Required<br>Date/time |
| 13 | Deleted at | `deleted_at` | Date/time |

## ⚡ Actions

| # | Name | Action | Permission | Method | Route | DTO |
|---|------|--------|------------|--------|-------|-----|
| 1 | Create | `create` | `User.create` | `POST` | `/users` | `email`, `name`, `last_name`, `phone`, `status_val` |
| 2 | Update | `update` | `User.update` | `PUT` | `/users/{id}` | `email`, `name`, `last_name`, `phone`, `status_val` |
| 3 | Read | `read` | `User.read` | `GET` | `/users/{id}` | `id`, `email`, `name`, `last_name`, `phone`, `status_val`, `status`, `created_at`, `updated_at`, `deleted_at` |
| 4 | Delete | `delete` | `User.delete` | `DELETE` | `/users/{id}` | — |

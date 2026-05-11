# Contact

## 📋 Fields

| # | Label | Field | Rules |
|---|-------|-------|-------|
| 1 | ID | `id` | Required |
| 2 | User ID | `user_id` | Required<br>[`User.id`](../User/User.md) |
| 3 | User | `user` | Required<br>Model: [`User`](../User/User.md) |
| 4 | Type | `type_val` | Required<br>Enum: [`TypeEnum.value`](./TypeEnum.md) |
| 5 | Type | `type` | Required<br>Enum: [`TypeEnum`](./TypeEnum.md) |
| 6 | Value | `value` | Required<br>Format:<br>- type_val = [`TypeEnum.EMAIL`](./TypeEnum.md): [`Email`](../../formats.md#email)<br>- type_val = [`TypeEnum.PHONE`](./TypeEnum.md): [`Phone`](../../formats.md#phone) |
| 7 | Created at | `created_at` | Required<br>Date/time |
| 8 | Updated at | `updated_at` | Required<br>Date/time |
| 9 | Deleted at | `deleted_at` | Date/time |

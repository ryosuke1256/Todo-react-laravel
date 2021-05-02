**1 対 1**

## users

|  カラム名  |   データ型   | NULL | Default |
| :--------: | :----------: | :--: | :-----: |
|     id     |  bigint(20)  |  No  |  None   |
|    name    | varchar(255) |  No  |  None   |
|  password  | varchar(255) |  No  |  None   |
| created_at |  timestamp   |  No  |  NULL   |
| deleted_at |  timestamp   |  No  |  NULL   |

## tasks

|  カラム名  |   データ型   | NULL | Default |
| :--------: | :----------: | :--: | :-----: |
|     id     |  bigint(20)  |  No  |  None   |
|   title    | varchar(255) |  No  |  None   |
|  is_done   |  tinyint(1)  |  No  |  None   |
| created_at |  timestamp   |  No  |  NULL   |
| updated_at |  timestamp   |  No  |  NULL   |

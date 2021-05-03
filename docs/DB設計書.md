## リレーション: 1 対 多

## users

|  カラム名  |   データ型   | NULL | Default |
| :--------: | :----------: | :--: | :-----: |
|     id     |  bigint(20)  |  No  |  None   |
|    name    | varchar(255) |  No  |  None   |
|  password  | varchar(255) |  No  |  None   |
| created_at |  timestamp   |  No  |  NULL   |
| deleted_at |  timestamp   |  No  |  NULL   |

## tasks

|  カラム名  |   データ型   | NULL | Default |              Description               |
| :--------: | :----------: | :--: | :-----: | :------------------------------------: |
|  user_id   |  bigint(20)  |  No  |  None   |   外部キー、ログイン機能作る時に作る   |
|     id     |  bigint(20)  |  No  |  None   |            プライマリーキー            |
|   title    | varchar(255) |  No  |  None   |           タスクのタイトル名           |
|  is_done   |  tinyint(1)  |  No  |  None   | タスクが完了したかどうか、打ち消し線用 |
| created_at |  timestamp   |  No  |  NULL   |                 作成日                 |
| updated_at |  timestamp   |  No  |  NULL   |                 更新日                 |

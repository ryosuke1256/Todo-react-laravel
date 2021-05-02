## 1 対 1

## users

|  カラム名  |   データ型   | NULL | Default |
| :--------: | :----------: | :--: | :-----: |
|     id     |  bigint(20)  |  No  |  None   |
|    name    | varchar(255) |  No  |  None   |
|  password  | varchar(255) |  No  |  None   |
| created_at |  timestamp   |  No  |  NULL   |
| deleted_at |  timestamp   |  No  |  NULL   |

## tasks

|  カラム名  |   データ型   | NULL | Default |               Description                |
| :--------: | :----------: | :--: | :-----: | :--------------------------------------: |
|     id     |  bigint(20)  |  No  |  None   |             プライマリーキー             |
|   title    | varchar(255) |  No  |  None   |            タスクのタイトル名            |
|  is_done   |  tinyint(1)  |  No  |  None   | タスクが完了したかどうか、打ち消し線の用 |
| created_at |  timestamp   |  No  |  NULL   |                  作成日                  |
| updated_at |  timestamp   |  No  |  NULL   |                  更新日                  |

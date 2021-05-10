## リレーション: 1 対 多

## users

|     カラム名      |   データ型   | NULL | Default |
| :---------------: | :----------: | :--: | :-----: |
|        id         |  bigint(20)  |  No  |  None   |
|       name        | varchar(255) |  No  |  None   |
|       email       | varchar(255) |  No  |  None   |
| email_verified_at |  timestamp   | Yes  |  NULL   |
|     password      | varchar(255) |  No  |  None   |
|  remember_token   | varchar(100) | Yes  |  NULL   |
|    created_at     |  timestamp   | Yes  |  NULL   |
|    deleted_at     |  timestamp   | Yes  |  NULL   |

## tasks

|  カラム名  |   データ型   | NULL | Default |              Description               |
| :--------: | :----------: | :--: | :-----: | :------------------------------------: |
|     id     |  bigint(20)  |  No  |  None   |            プライマリーキー            |
|  user_id   |  bigint(20)  |  No  |  None   |   外部キー、ログイン機能作る時に作る   |
|   title    | varchar(255) |  No  |  None   |           タスクのタイトル名           |
|  is_done   |  tinyint(1)  |  No  |  None   | タスクが完了したかどうか、打ち消し線用 |
| created_at |  timestamp   |  No  |  NULL   |                 作成日                 |
| updated_at |  timestamp   |  No  |  NULL   |                 更新日                 |

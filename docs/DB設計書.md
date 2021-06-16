### ※　migrationファイルを作成してあるのでmigrationを実行して作成してください

## users

※ Laravel/uiをインストールしてマイグレーションを実行して作成しました

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
|  user_id   |  bigint(20)  |  No  |  None   |                外部キー                |
|   title    | varchar(255) |  No  |  None   |           タスクのタイトル名           |
|  is_done   |  tinyint(1)  |  No  |  None   | タスクが完了したかどうか、打ち消し線用 |
| created_at |  timestamp   |  No  |  NULL   |                 作成日                 |
| updated_at |  timestamp   |  No  |  NULL   |                 更新日                 |

## tags

|  カラム名    |   データ型     | NULL | Default |              Description               |
| :--------: | :----------: | :--: | :-----: | :------------------------------------: |
|     id     |  bigint(20)  |  No  |  None   |            プライマリーキー            |
|  task_id   |  bigint(20)  |  No  |  None   |                外部キー                |
|checked_red | tinyint(1) |  Yes  |  None   |           赤色のタグがチェック済みかどうか          |
|checked_blue |  tinyint(1)  |  Yes  |  None   | 青色のタグがチェック済みかどうか  |
|checked_yellow | tinyint(1) |  Yes  |  None   |           黄色のタグがチェック済みかどうか           |
|checked_green |  tinyint(1)  |  Yes  |  None   | 緑色のタグがチェック済みかどうか  |
| created_at |  timestamp   |  No  |  NULL   |                 作成日                 |
| updated_at |  timestamp   |  No  |  NULL   |                 更新日                 |

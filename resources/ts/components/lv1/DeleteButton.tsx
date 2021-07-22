import React from "react";
import { Button } from "./Button";
import { DeleteIcon } from "./_index";
import MediaQuery from "react-responsive";

type Props = {
    deleteTask: () => Promise<void>;
    setIs_done: (param: boolean) => void;
};

const DeleteButton: React.VFC<Props> = ({ deleteTask, setIs_done }: Props) => {
    return (
        <>
            <MediaQuery query="(max-width: 599px)">
                <div style={{ paddingLeft: "10px" }}>
                    <DeleteIcon
                        deleteTask={deleteTask}
                        setIs_done={setIs_done}
                    />
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 599px)">
                <Button
                    onClick={() => {
                        deleteTask();
                        setIs_done(false);
                    }}
                    backgroundColor="#da6161"
                    style={{ border: "1px solid #db5e5e" }}
                >
                    削除
                </Button>
            </MediaQuery>
        </>
    );
};

export default DeleteButton;

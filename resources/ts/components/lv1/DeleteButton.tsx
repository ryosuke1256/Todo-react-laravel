import React from "react";
import { ButtonStyle } from "../../style/ButtonStyle";
import MediaQuery from "react-responsive";

type Props = {
    deleteTask: () => Promise<void>;
    setIs_done: (param: 0 | 1) => void;
};

const DeleteButton: React.VFC<Props> = ({ deleteTask, setIs_done }: Props) => {
    return (
        <>
            <MediaQuery query="(max-width: 599px)">
                <div style={{ paddingLeft: "10px" }}>
                    <svg
                        onClick={() => {
                            deleteTask();
                            setIs_done(0);
                        }}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="trash"
                        className="svg-inline--fa fa-trash fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="25"
                        height="25"
                        fill="#da6161"
                    >
                        <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                    </svg>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 599px)">
                <ButtonStyle
                    onClick={() => {
                        deleteTask();
                        setIs_done(0);
                    }}
                    backgroundColor="#da6161"
                    style={{ border: "1px solid #db5e5e" }}
                >
                    削除
                </ButtonStyle>
            </MediaQuery>
        </>
    );
};

export default DeleteButton;

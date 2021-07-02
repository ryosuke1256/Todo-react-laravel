import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; //prettier-ignore
import Header from "./components/lv2/Header";
import {LoginContent,RegisterContent,TodoContent,TopPageContent} from "./components/lv3/_index"; //prettier-ignore

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState<boolean>(false);
    const [userID, setUserID] = useState<number | null>(null);
    const [userName, setUserName] = useState<string>("");
    const [is_began, setIs_began] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async (): Promise<void> => {
        await axios
            .get("api/users")
            .then((res) => {
                if (res.data) {
                    setUserName(res.data.name);
                    setIs_authenticated(true);
                } else {
                    setIs_authenticated(false);
                }
                setIs_began(true);
                setUserID(res.data.id);
            })
            .catch((err) => {
                console.log(err);
                setIs_began(true);
            });
    };

    const GetTopPageContent = (): JSX.Element | null => {
        if (is_began && is_authenticated) {
            return <TodoContent userID={userID} />;
        } else if (is_began && !is_authenticated) {
            return <TopPageContent />;
        } else {
            return null;
        }
    };

    return (
        <>
            <Router>
                <Header
                    setIs_authenticated={setIs_authenticated}
                    is_authenticated={is_authenticated}
                    setUserID={setUserID}
                    userName={userName}
                />
                <Switch>
                    <Route path="/register">
                        <RegisterContent
                            setIs_authenticated={setIs_authenticated}
                            setUserID={setUserID}
                            getUser={getUser}
                        />
                    </Route>
                    <Route path="/login">
                        <LoginContent
                            setIs_authenticated={setIs_authenticated}
                            setUserID={setUserID}
                            getUser={getUser}
                        />
                    </Route>
                    <Route path="/">
                        <GetTopPageContent />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;

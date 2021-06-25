import React, { useState, useEffect } from "react";
import Header from "./components/lv2/Header";
import {LoginContent,RegisterContent,TodoContent,TopPageContent} from "./components/lv3/_index"; //prettier-ignore
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; //prettier-ignore
import axios from "axios";

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState<boolean>();
    const [userID, setUserID] = useState("");
    console.log(is_authenticated);

    useEffect(() => {
        getUser();
    }, [setIs_authenticated]);

    const getUser = async () => {
        await axios
            .get("api/users")
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    setIs_authenticated(true);
                } else {
                    setIs_authenticated(false);
                }
                setUserID(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Router>
                <Header setIs_authenticated={setIs_authenticated} />
                <Switch>
                    <Route path="/register">
                        <RegisterContent />
                    </Route>
                    <Route path="/login">
                        <LoginContent
                            setIs_authenticated={setIs_authenticated}
                            setUserID={setUserID}
                        />
                    </Route>
                    <Route path="/">
                        {is_authenticated ? (
                            <TodoContent
                                userID={userID}
                                setUserID={setUserID}
                            />
                        ) : !(is_authenticated === undefined) ? (
                            <TopPageContent />
                        ) : null}
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;

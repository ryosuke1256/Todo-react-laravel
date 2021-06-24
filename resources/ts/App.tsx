import React, { useState, useEffect } from "react";
import Header from "./components/lv2/Header";
import {LoginContent,RegisterContent,TodoContent,TopPageContent} from "./components/lv3/_index"; //prettier-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState(false);
    const [userID, setUserID] = useState("");

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await axios
            .get("api/users")
            .then((res) => {
                console.log(res.data);
                // if (!(res.data === undefined)) {
                //     setIs_authenticated(true);
                // }
                setUserID(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Router>
                <Header />
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
                        ) : (
                            <TopPageContent />
                        )}
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;

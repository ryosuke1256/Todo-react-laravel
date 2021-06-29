import React, { useState, useEffect } from "react";
import Header from "./components/lv2/Header";
import {LoginContent,RegisterContent,TodoContent,TopPageContent} from "./components/lv3/_index"; //prettier-ignore
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; //prettier-ignore
import axios from "axios";

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState<boolean>(false);
    const [userID, setUserID] = useState("");
    const [is_began, setIs_began] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await axios
            .get("api/users")
            .then((res) => {
                if (res.data) {
                    setIs_authenticated(true);
                } else {
                    setIs_authenticated(false);
                }
                setIs_began(true);
                setUserID(res.data);
            })
            .catch((err) => {
                console.log(err);
                setIs_began(true);
            });
    };

    const GetTopPageContent = (): JSX.Element | null => {
        if (is_began) {
            if (is_authenticated) {
                return <TodoContent userID={userID} />;
            } else if (is_authenticated === false) {
                return <TopPageContent />;
            } else {
                return null;
            }
        } else {
            return null;
        }
    };

    return (
        <>
            <Router>
                <Header setIs_authenticated={setIs_authenticated} />
                <Switch>
                    <Route path="/register">
                        <RegisterContent 
                            setIs_authenticated={setIs_authenticated}
                            setUserID={setUserID}
                        />
                    </Route>
                    <Route path="/login">
                        <LoginContent
                            setIs_authenticated={setIs_authenticated}
                            setUserID={setUserID}
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

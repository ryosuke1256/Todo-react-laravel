import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; //prettier-ignore
import { Header } from "./components/lv2/_index";
import { LoginContent,RegisterContent,TodoContent,TopPageContent } from "./components/lv3/_index"; //prettier-ignore
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../ts/styles/styledcomponents/GlobalStyle";

type User = {
    userID: number | null;
    userName: string;
};

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState<boolean>(false);
    const [userData, setUserData] = useState<Readonly<User>>({
        userID: null,
        userName: "",
    });
    const [is_began, setIs_began] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async (): Promise<void> => {
        await axios
            .get("api/users")
            .then((res) => {
                if (res.data) {
                    setIs_authenticated(true);
                    setUserData({
                        userID: res.data.id,
                        userName: res.data.name,
                    });
                } else {
                    setIs_authenticated(false);
                }
            })
            .catch((err) => {
                console.error(err.response.data.message);
            })
            .finally(() => {
                setIs_began(true);
            });
    };

    const GetTopPageContent = (): JSX.Element | null => {
        if (is_began && is_authenticated) {
            return <TodoContent userID={userData.userID} />;
        } else if (is_began && !is_authenticated) {
            return <TopPageContent />;
        } else {
            return null;
        }
    };

    return (
        <ThemeProvider theme={{}}>
            <Router>
                <GlobalStyle />
                <Header
                    setIs_authenticated={setIs_authenticated}
                    is_authenticated={is_authenticated}
                    setUserData={setUserData}
                    userName={userData.userName}
                />
                <Switch>
                    <Route path="/register">
                        <RegisterContent
                            setIs_authenticated={setIs_authenticated}
                            getUser={getUser}
                        />
                    </Route>
                    <Route path="/login">
                        <LoginContent
                            setIs_authenticated={setIs_authenticated}
                            getUser={getUser}
                        />
                    </Route>
                    <Route path="/">
                        <GetTopPageContent />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;

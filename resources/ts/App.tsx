import React, { useState } from "react";
import Header from "./components/lv2/Header";
import {LoginContent,RegisterContent,TodoContent,TopPageContent} from "./components/lv3/_index"; //prettier-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState(false);
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/register">
                        <RegisterContent />
                    </Route>
                    <Route path="/login">
                        <LoginContent />
                    </Route>
                    <Route path="/">
                        {is_authenticated ? (
                            <TodoContent />
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

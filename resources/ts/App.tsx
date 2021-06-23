import React, { useState } from "react";
import TodoContent from "./components/lv3/TodoContent";
import TopPageContent from "./components/lv3/TopPageContent";
import LoginContent from "./components/lv3/LoginContent";
import RegisterContent from "./components/lv3/RegisterContent";
import Header from "./components/lv2/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState(false);
    return (
        <>
            <Header />
            <Router>
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

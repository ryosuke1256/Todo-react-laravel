import React, { useState } from "react";
import TodoContent from "./components/lv3/TodoContent";
import TopPageContent from "./components/lv3/TopPageContent";
import Header from "./components/lv2/Header";

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState(false);
    return (
        <>
            <Header />
            {is_authenticated ? <TodoContent /> : <TopPageContent />}
        </>
    );
};

export default App;

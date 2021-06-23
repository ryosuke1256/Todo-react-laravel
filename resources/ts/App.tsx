import React, { useState } from "react";
import TodoContent from "./components/lv3/TodoContent";
import TopPageContent from "./components/lv3/TopPageContent";

const App: React.VFC = () => {
    const [is_authenticated, setIs_authenticated] = useState(false);
    return <>{is_authenticated ? <TodoContent /> : <TopPageContent />}</>;
};

export default App;

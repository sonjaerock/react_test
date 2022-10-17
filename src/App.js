import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./Pages/MainPage";
import TestPage from "./Pages/TestPage";
import NotFoundPage from "./Pages/NotFoundPage";
import TodoListPage from "./Pages/TodoListPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/test/:testId" element={<TestPage/>}></Route>
                    <Route path="*" element={<NotFoundPage/>}></Route>
                    <Route path="/todolist" element={<TodoListPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

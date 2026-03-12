import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import HomePage from '../pages/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './provider';
import PageLayout from '@/components/ui/PageLayout';
import HomehelpyPage from '@/pages/HomehelpyPage';
import OptistaffPage from '@/pages/OptistaffPage';
import CentsiblePage from '@/pages/CentsiblePage';
function App() {
    return (_jsx(_Fragment, { children: _jsx(Provider, { children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(PageLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/homehelpy", element: _jsx(HomehelpyPage, {}) }), _jsx(Route, { path: "/optistaff", element: _jsx(OptistaffPage, {}) }), _jsx(Route, { path: "/centsible", element: _jsx(CentsiblePage, {}) })] }) }) }) }) }));
}
export default App;

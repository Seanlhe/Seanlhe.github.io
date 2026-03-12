import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavBar from "@/components/ui/NavBar";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function PageLayout() {
    return _jsxs(Flex, { w: "100vw", flexDir: "column", children: [_jsx(NavBar, {}), _jsx(Outlet, {})] });
}

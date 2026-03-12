import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, HStack, Button, Text, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import cv from '/assets/pdfs/cv.pdf'; 
export default function NavBar() {
    var navigate = useNavigate();
    return _jsxs(Flex, { w: "100vw", py: "2xl", px: "5xl", flexDir: "row", justifyContent: "space-between", position: "sticky", bg: "greyscale.surface.subtle", top: "0", right: "0", children: [_jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.title", children: "Sean Leng" }), _jsxs(HStack, { gap: "l", children: [_jsx(Button, { textStyle: "bodyRegular.base", bg: "none", color: "greyscale.text.title", rounded: "md", p: "l", onClick: function () { return navigate("/"); }, children: "Home" }), _jsx(Link, { textStyle: "bodyRegular.base", bg: "greyscale.black", color: "greyscale.text.negative", rounded: "md", p: "l", as: "a", target: "_blank", rel: "noopener noreferrer", children: "Resume" })] })] });
}

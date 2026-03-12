import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { VStack, Flex, Heading, Text, Image, List, HStack, Box } from "@chakra-ui/react";
export default function CentsiblePage() {
    return _jsxs(VStack, { w: "100vw", px: "5xl", bg: "greyscale.surface.subtle", children: [_jsx(IntroductionSection, {}), _jsx(BackgroundSection, {}), _jsx(ProblemStatement, {}), _jsx(ProcessSection, {}), _jsx(PagesSection, {}), _jsx(SolutionSection, {})] });
}
function IntroductionSection() {
    return (_jsxs(Flex, { w: "full", py: "5xl", alignItems: "center", justifyContent: "space-between", children: [_jsxs(VStack, { maxW: "31.25rem", gap: "md", alignItems: "flex-start", children: [_jsx(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.subtitle", children: "Frontend Developer Intern" }), _jsx(Heading, { textStyle: "h1.bold", color: "greyscale.text.title", mb: "md", children: "Centsible" }), _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: "The project aimed to develop a group-based expense tracking mobile application targetted at multi-generational families to reduce impulsive spending and foster better financial habits (eg. budgetting) through mutual accountability and supervision." })] }), _jsx(Image, { src: "/assets/images/centsible_dashboard.svg", shadow: "s", rounded: "l" })] }));
}
function BackgroundSection() {
    var audiences = [
        {
            imageURL: "/assets/images/mum_avatar.svg",
            name: "Natasha, 30",
            description: ["Mother of two",
                "Sole breadwinner of the family",
                "Manages household finance"]
        },
        {
            imageURL: "/assets/images/son_avatar.svg",
            name: "Kevin, 15",
            description: [
                "Secondary 3 student",
                "Receives a weekly allowance",
                "Tends to spend a lot on video game transactions"
            ]
        },
        {
            imageURL: "/assets/images/grandma_avatar.svg",
            name: "Susan, 68",
            description: [
                "Has recurring medical expenses and bills",
                "Wants to know her monthly budget",
                "Past victim of scams"
            ]
        }
    ];
    var statistics = [
        {
            stat: "$1.1 billion",
            body: "lost in scams in 2024"
        },
        {
            stat: "20%",
            body: "increase in household spending from 2018-2023"
        }
    ];
    return (_jsxs(Flex, { w: "100vw", p: "5xl", flexDir: "row", gap: "5xl", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(01) Background" }), _jsxs(VStack, { gap: "2xl", alignItems: "flex-start", flex: 1, children: [_jsx(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", children: "In today\u2019s consumer-driven environment, social media and advertising heavily shape spending habits, often weakening financial discipline and personal responsibility. In Singapore, rising impulsive spending and scam exposure show that poor financial decisions can affect people of all ages, making it especially important for breadwinners to ensure their dependants use allowances wisely." }), _jsxs(VStack, { alignItems: "flex-start", children: [_jsx(Text, { textStyle: "h5.bold", color: "greyscale.text.title", children: "Target Audience" }), _jsx(HStack, { gap: "3xl", alignItems: "flex-start", children: audiences.map(function (a) { return (_jsx(Audience, { imageURL: a.imageURL, name: a.name, description: a.description })); }) })] }), _jsxs(VStack, { alignItems: "flex-start", children: [_jsx(Text, { textStyle: "h5.bold", color: "greyscale.text.title", children: "Key Statistics" }), _jsx(HStack, { gap: "3xl", alignItems: "flex-start", children: statistics.map(function (s) { return (_jsx(Statistics, { stat: s.stat, body: s.body })); }) })] })] })] }));
}
function Audience(_a) {
    var imageURL = _a.imageURL, name = _a.name, description = _a.description;
    return _jsxs(VStack, { gap: "md", w: "full", mt: "md", children: [_jsx(Image, { src: imageURL, w: "10rem", h: "10rem", p: "l", rounded: "full", objectFit: "fit", border: "1px solid", borderColor: "greyscale.border.default" }), _jsx(Text, { textStyle: "h6.bold", color: "greyscale.text.title", children: name }), _jsx(List.Root, { listStylePos: "inside", children: description.map(function (d) { return (_jsx(List.Item, { children: _jsx(Text, { display: "inline", textStyle: "bodyLarge.base", color: "greyscale.text.body", children: d }) })); }) })] });
}
function Statistics(_a) {
    var stat = _a.stat, body = _a.body;
    return _jsxs(Flex, { w: "full", maxW: "14rem", flexDir: "column", alignItems: "center", gap: "md", children: [_jsx(Text, { textStyle: "h2.bold", color: "greyscale.text.title", children: stat }), _jsx(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", textAlign: "center", children: body })] });
}
function ProblemStatement() {
    return _jsxs(Flex, { w: "100vw", p: "5xl", flexDir: "column", gap: "md", alignItems: "center", bg: "greyscale.surface.default", children: [_jsx(Heading, { textStyle: "h5.light", color: "greyscale.text.title", children: "Problem Statement" }), _jsx(Text, { textStyle: "h2.bold", color: "greyscale.text.title", textAlign: "center", children: "\u201CHow might we reduce overspending, improve transparency and strengthen shared decision making for multi-generational families?\u201D" })] });
}
function ProcessSection() {
    var behaviouralResearch = [
        {
            title: "Hawthorne Effect: ",
            body: "People improve their behaviour when there’s an assumption of being monitored"
        },
        {
            title: "Gamification: ",
            body: "Leads to longer lasting change with the ideas of progress and friendly competition"
        },
        {
            title: "Temporal Discounting: ",
            body: "Rewards for desired behaviour lose effectiveness if they are delayed, rather than immediate"
        }
    ];
    var solutionsResearch = [
        {
            title: "High user friction: ",
            body: "If logging feels tedious, users are less likely to stay consistent."
        },
        {
            title: "Alerts drive habit formation: ",
            body: "Reminders prompt users to record expenses on time."
        },
        {
            title: "Speed matters for scams: ",
            body: "The earlier suspicious activity is flagged, the better the chance of preventing loss."
        }
    ];
    return (_jsxs(Flex, { w: "100vw", flexDir: "row", justifyContent: "space-between", gap: "5xl", p: "5xl", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(02) Process" }), _jsxs(VStack, { gap: "3xl", alignItems: "flex-start", flex: 1, children: [_jsxs(VStack, { alignItems: "flex-start", children: [_jsx(Heading, { textStyle: "h5.bold", color: "greyscale.text.title", children: "Behavioural Psychology Research" }), _jsx(List.Root, { listStylePos: "inside", children: behaviouralResearch.map(function (r) { return (_jsx(List.Item, { children: _jsx(Research, { title: r.title, body: r.body }) })); }) })] }), _jsxs(VStack, { alignItems: "flex-start", children: [_jsx(Heading, { textStyle: "h5.bold", color: "greyscale.text.title", children: "Current Solutions Research" }), _jsx(List.Root, { listStylePos: "inside", children: solutionsResearch.map(function (r) { return (_jsx(List.Item, { children: _jsx(Research, { title: r.title, body: r.body }) })); }) })] })] })] }));
}
function Research(_a) {
    var title = _a.title, body = _a.body;
    return _jsxs(Text, { display: "inline", textStyle: "bodyLarge.base", color: "greyscale.text.body", children: [_jsxs(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.title", as: "span", children: [title, " "] }), body] });
}
function PagesSection() {
    return (_jsxs(Flex, { w: "100vw", flexDir: "column", alignItems: "center", gap: "2xl", children: [_jsx(Box, { w: "100vw", px: "5xl", py: "l", bg: "greyscale.surface.default", children: _jsx(Image, { w: "full", src: "/assets/images/centsible_pages.svg" }) }), _jsxs(VStack, { children: [_jsx(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.title", children: "Final  Designs for Centsible" }), _jsxs(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: ["Left to right (Top): Dashboard, Budget, Leaderboard, Streaks, Family ", _jsx("br", {}), "Left to right (Bottom): Alerts, Transactions, Log Expense, Sign in, Sign up"] })] })] }));
}
function SolutionSection() {
    var techStack = [
        {
            title: "Frontend",
            technologies: ["Java", "XML"],
        },
        {
            title: "Backend",
            technologies: ["Java", "MongoDB", "Springboot", "Cloudinary"],
        },
    ];
    var achievements = [
        {
            title: "Maintainable, scalable code: ",
            body: "Through the use of SOLID OOP principles and well as design patterns such as singleton, builder and observer design pattern, we built a codebase that is easy to understand, extend, and maintain.",
        },
        {
            title: "Smart fraud detection system: ",
            body: "Through statistical analysis of user expenditure data, we are able to detect outliers in spending behaviour and send timely notifications to family members for intervention. ",
        },
        {
            title: "Behavioural reinforcement mechanisms: ",
            body: "Implemented a leaderboard, streaks functionality to encourage the consistent logging of financial data through friendly competition among family members.",
        },
    ];
    return (_jsxs(Flex, { w: "100vw", flexDir: "row", justifyContent: "space-between", gap: "5xl", p: "5xl", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(03) Solution" }), _jsxs(VStack, { gap: "4xl", alignItems: "flex-start", flex: 1, children: [_jsxs(VStack, { alignItems: "flex-start", gap: "xl", children: [_jsx(Heading, { textStyle: "h4.bold", color: "greyscale.text.title", children: "Tech Stack" }), _jsx(HStack, { gap: "md", alignItems: "flex-start", children: techStack.map(function (stack) { return (_jsx(Technology, { title: stack.title, technologies: stack.technologies })); }) })] }), _jsxs(VStack, { alignItems: "flex-start", gap: "xl", children: [_jsx(Heading, { textStyle: "h4.bold", color: "greyscale.text.title", children: "Achievements" }), _jsx(List.Root, { gap: "l", children: achievements.map(function (a) { return (_jsx(Achievement, { title: a.title, body: a.body })); }) })] })] })] }));
}
function Technology(_a) {
    var title = _a.title, technologies = _a.technologies;
    return (_jsxs(VStack, { alignItems: "flex-start", w: "12rem", children: [_jsx(Heading, { textStyle: "h6.base", color: "greyscale.text.title", children: title }), _jsx(List.Root, { listStyle: "none", children: technologies.map(function (t) { return (_jsx(List.Item, { children: _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: t }) })); }) })] }));
}
function Achievement(_a) {
    var title = _a.title, body = _a.body;
    return (_jsxs(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", children: [_jsxs(Text, { as: "span", textStyle: "bodyLarge.bold", color: "greyscale.text.title", children: [title, " "] }), body] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, VStack, Image, Heading, Text, List, HStack, Circle, Box, Link, } from "@chakra-ui/react";
export default function HomehelpyPage() {
    return (_jsxs(VStack, { w: "100vw", px: "5xl", bg: "greyscale.surface.subtle", children: [_jsx(IntroductionSection, {}), _jsx(ChallengesSection, {}), _jsx(ProcessSection, {}), _jsx(PagesSection, {}), _jsx(SolutionSection, {})] }));
}
function IntroductionSection() {
    return (_jsxs(Flex, { w: "full", py: "5xl", alignItems: "center", justifyContent: "space-between", children: [_jsxs(VStack, { maxW: "31.25rem", gap: "md", alignItems: "flex-start", children: [_jsx(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.subtitle", children: "Frontend Developer Intern" }), _jsx(Heading, { textStyle: "h1.bold", color: "greyscale.text.title", mb: "md", children: "HomeHelpy" }), _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: "The project aimed to create a scalable, conversion-focused website with integrated customer and staff interfaces, enabling autonomous booking, streamlined operations, and effective capture of marketing-driven traffic." }), _jsx(Link, { textStyle: "bodyRegular.base", bg: "greyscale.black", color: "greyscale.text.negative", rounded: "md", p: "l", mt: "md", href: "https://www.homehelpy.com/", as: "a", children: "Live Site" })] }), _jsx(Image, { src: "/assets/images/hhlanding.png", shadow: "s", rounded: "l" })] }));
}
function ChallengesSection() {
    var challenges = [
        { index: "01", challenge: "Poor user experience" },
        { index: "02", challenge: "Fragmented and disconnected booking systems" },
        { index: "03", challenge: "High maintenance costs" },
    ];
    return (_jsxs(Flex, { w: "100vw", p: "5xl", flexDir: "column", gap: "5xl", bg: "greyscale.surface.default", children: [_jsx(Text, { textStyle: "h2.bold", color: "greyscale.text.title", maxW: "57.5rem", children: "\u201CWe collated bookings from multiple platforms, including the website, a call-center and external brokers, leading to scheduling conflicts.\u201D" }), _jsxs(Flex, { flexDir: "row", justifyContent: "space-between", gap: "5xl", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(01) Challenges Faced" }), _jsxs(VStack, { gap: "2xl", alignItems: "flex-start", flex: 1, children: [_jsx(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", children: "Previously, HomeHelpy outsourced the development of their website to external vendors, which resulted in several challenges:" }), _jsx(List.Root, { listStyle: "none", my: "l", gap: "xl", children: challenges.map(function (c) { return (_jsx(ChallengeItem, { index: c.index, challenge: c.challenge })); }) }), _jsx(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", children: "This project aimed to address these challenges by developing a scalable, conversion-focused web application with integrated customer and staff interfaces, enabling autonomous bookings, streamlined operations, and a unified platform for all services." })] })] })] }));
}
function ChallengeItem(_a) {
    var index = _a.index, challenge = _a.challenge;
    return (_jsxs(HStack, { gap: "2xl", children: [_jsx(Circle, { bg: "greyscale.white", w: "3rem", h: "3rem", textStyle: "h5.bold", color: "greyscale.text.title", children: index }), _jsx(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.title", children: challenge })] }));
}
function ProcessSection() {
    var research = [
        {
            title: "6 Qualitative User Interviews",
            subtitle: "UX Research",
            insights: [
                "Target demographic is mainly working adults who juggle both professional and household responsibilities.",
                "Crucial information such as invoices is not readily discoverable.",
                "Form loading times can be long (up to 3 seconds).",
            ],
        },
        {
            title: "9+ Competitor Analyses",
            subtitle: "Competitor and Industry Research",
            insights: [
                "Difficult to navigate platforms due to large number of services and overlapping information.",
                "Heavy reliance on vector and AI-generated assets, which may reduce users’ ability to form a realistic understanding of the services offered.",
            ],
        },
    ];
    return (_jsxs(Flex, { w: "100vw", flexDir: "row", justifyContent: "space-between", gap: "5xl", p: "5xl", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(02) Process" }), _jsx(VStack, { gap: "4xl", alignItems: "flex-start", flex: 1, children: research.map(function (r) { return (_jsx(Research, { title: r.title, subtitle: r.subtitle, insights: r.insights })); }) })] }));
}
function Research(_a) {
    var title = _a.title, subtitle = _a.subtitle, insights = _a.insights;
    return (_jsxs(Flex, { flexDir: "column", gap: "md", children: [_jsx(Heading, { textStyle: "h5.bold", color: "greyscale.text.title", children: title }), _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.subtitle", mb: "md", children: subtitle }), _jsx(List.Root, { listStylePos: "inside", gap: "md", children: insights.map(function (i) { return (_jsx(List.Item, { children: _jsx(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", display: "inline", children: i }) })); }) })] }));
}
function PagesSection() {
    return (_jsxs(Flex, { w: "100vw", flexDir: "column", alignItems: "center", gap: "2xl", children: [_jsx(Box, { w: "100vw", px: "5xl", py: "l", bg: "greyscale.surface.default", children: _jsx(Image, { w: "full", src: "/assets/images/hhpages.svg" }) }), _jsxs(VStack, { children: [_jsx(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.title", children: "Approved Website Designs for HomeHelpy" }), _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: "Left to right: Landing Page, General Cleaning Marketing Page, User Dashboard, Booking Form, Manage Bookings Page, Booking Success Page." })] })] }));
}
function SolutionSection() {
    var techStack = [
        {
            title: "Frontend",
            technologies: ["React.js", "ChakraUI", "Vercel"],
        },
        {
            title: "Backend",
            technologies: ["Express.js", "PostgreSQL", "Azure"],
        },
        {
            title: "External APIs",
            technologies: ["Firebase (oAuth)", "Stripe", "Twilio"],
        },
    ];
    var achievements = [
        {
            title: "Branding and Visual Identity: ",
            body: "We implemented design systems to create coherent designs, improved copywriting to highlight value proposition and enhanced social proof using testimonials and trusted brands.",
        },
        {
            title: "Improved Information Accessibillity: ",
            body: "We added access to crucial documents at different touchpoints (confirmation emails and the “My Appointments” page), to increase discoverability.",
        },
        {
            title: "Reduced Friction: ",
            body: "We made booking actions the most prominent right after the user signs in, keeping the booking flow streamlined and intuitive.",
        },
        {
            title: "Faster Form Load Times:",
            body: "By reducing the number of database queries and redesigning processing algorithms, we significantly improved the average load times of booking forms from 3.5 seconds down to 0.6 seconds.",
        },
    ];
    return (_jsxs(Flex, { w: "100vw", flexDir: "row", justifyContent: "space-between", gap: "5xl", p: "5xl", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(03) Solution" }), _jsxs(VStack, { gap: "4xl", alignItems: "flex-start", flex: 1, children: [_jsxs(VStack, { alignItems: "flex-start", gap: "xl", children: [_jsx(Heading, { textStyle: "h4.bold", color: "greyscale.text.title", children: "Tech Stack" }), _jsx(HStack, { gap: "md", children: techStack.map(function (stack) { return (_jsx(Technology, { title: stack.title, technologies: stack.technologies })); }) })] }), _jsxs(VStack, { alignItems: "flex-start", gap: "xl", children: [_jsx(Heading, { textStyle: "h4.bold", color: "greyscale.text.title", children: "Achievements" }), _jsx(List.Root, { gap: "l", children: achievements.map(function (a) { return (_jsx(Achievement, { title: a.title, body: a.body })); }) })] })] })] }));
}
function Technology(_a) {
    var title = _a.title, technologies = _a.technologies;
    return (_jsxs(VStack, { alignItems: "flex-start", w: "12rem", children: [_jsx(Heading, { textStyle: "h6.base", color: "greyscale.text.title", children: title }), _jsx(List.Root, { listStyle: "none", children: technologies.map(function (t) { return (_jsx(List.Item, { children: _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: t }) })); }) })] }));
}
function Achievement(_a) {
    var title = _a.title, body = _a.body;
    return (_jsxs(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", children: [_jsxs(Text, { as: "span", textStyle: "bodyLarge.bold", color: "greyscale.text.title", children: [title, " "] }), body] }));
}

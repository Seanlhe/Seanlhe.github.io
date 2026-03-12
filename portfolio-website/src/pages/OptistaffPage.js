import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, VStack, Image, Heading, Text, List, HStack, Box, } from "@chakra-ui/react";
export default function OptistaffPage() {
    return (_jsxs(VStack, { gap: "0rem", w: "100vw", px: "5xl", bg: "greyscale.surface.subtle", children: [_jsx(IntroductionSection, {}), _jsx(ChallengesSection, {}), _jsx(ProcessSection, {}), _jsx(PagesSection, {}), _jsx(SolutionSection, {})] }));
}
function IntroductionSection() {
    return (_jsxs(Flex, { w: "full", py: "5xl", alignItems: "center", justifyContent: "space-between", children: [_jsxs(VStack, { maxW: "31.25rem", gap: "md", alignItems: "flex-start", children: [_jsx(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.subtitle", children: "Frontend Development/ UIUX Design" }), _jsx(Heading, { textStyle: "h1.bold", color: "greyscale.text.title", mb: "md", children: "OptiStaff" }), _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: "The project aimed to develop a scalable, user-centric job matching platform with integrated employer and candidate interfaces, enabling flexible access to ad hoc opportunities for workers while streamlining workforce sourcing for businesses." })] }), _jsx(Image, { src: "/assets/images/optistaff_landing.svg", shadow: "s", rounded: "l" })] }));
}
function ChallengesSection() {
    var challenges = [
        {
            title: "For Job Seekers",
            content: [
                {
                    bold: "Continuous manual monitoring",
                    body: "for available job opportunities"
                },
                {
                    bold: "Repetitive application processes",
                    body: "for individual listings"
                },
                {
                    bold: "Lack of effective filtering",
                    body: "based on skills, availability, and preferences"
                }
            ]
        },
        {
            title: "For Employers",
            content: [
                {
                    bold: "Absence of a centralized platform",
                    body: "for publishing and managing job listings"
                },
                {
                    bold: "Excessive time and manpower",
                    body: "spent vetting unsuitable applicants"
                },
                {
                    bold: "Limited visibility and reach",
                    body: "of job postings"
                }
            ]
        },
    ];
    return (_jsxs(Flex, { w: "100vw", flexDir: "row", justifyContent: "space-between", gap: "5xl", p: "5xl", bg: "greyscale.surface.default", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(01) Challenges" }), _jsxs(VStack, { flex: 1, gap: "2xl", alignItems: "flex-start", children: [_jsx(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", children: "Currently, traditional gig-work and temporary staffing platforms often rely on a \"first-come, first-served\" job allocation model. This results in several issues for both employers and potential employees." }), _jsx(HStack, { gap: "4xl", alignItems: "flex-start", w: "full", children: challenges.map(function (c) { return (_jsx(Challenge, { title: c.title, content: c.content })); }) }), _jsxs(VStack, { gap: "md", alignItems: "flex-start", mt: "l", children: [_jsx(Image, { src: "/assets/images/telegram_image.svg", rounded: "l", w: "24rem" }), _jsx(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: "Example: A telegram group used to share job postings" })] })] })] }));
}
function Challenge(_a) {
    var title = _a.title, content = _a.content;
    return _jsxs(VStack, { gap: "l", alignItems: "flex-start", w: "full", children: [_jsx(Heading, { textStyle: "h5.bold", color: "greyscale.text.title", children: title }), _jsx(List.Root, { gap: "md", listStylePos: "inside", children: content.map(function (c) { return (_jsx(List.Item, { children: _jsxs(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", display: "inline", children: [_jsxs(Text, { as: "span", textStyle: "bodyLarge.bold", color: "greyscale.text.title", display: "inline", children: [c.bold, " "] }), c.body] }) })); }) })] });
}
function ProcessSection() {
    var processes = [
        {
            title: "Key Use Cases",
            body: "We began by defining and mapping the core features for our minimum viable product (MVP) using use case diagrams, deliberately prioritising speed to market to enable early user testing and rapid feedback.  Employees could set job preferences and availability, and manage or cancel assigned shifts, while employers were able to create and manage job listings and rate workers upon assignment completion. ",
            imageURL: "/assets/images/use_case_diagram.svg"
        },
        {
            title: "Sequence Diagrams",
            body: "For each core feature, we developed sequence diagrams to map interactions across system components and define behaviour across different states, including error handling. This process aligned team expectations, clarified architectural decisions, and provided a clear foundation for unit, integration, and end-to-end testing",
            imageURL: "/assets/images/seq_diagram.svg"
        },
        {
            title: "System Diagrams",
            body: "We modelled the relevant attributes, methods, relationships and multiplicities of each entity within the system using a class diagram. This ensured data integrity, separation of responsibilities, and aligned backend development with business logic.",
            imageURL: "/assets/images/system_diagram.svg"
        }
    ];
    return (_jsxs(Flex, { w: "100vw", flexDir: "row", justifyContent: "space-between", gap: "5xl", p: "5xl", bg: "greyscale.surface.subtle", children: [_jsx(Heading, { textStyle: "h5.light", w: "18rem", color: "greyscale.text.title", children: "(02) Process" }), _jsx(VStack, { flex: 1, gap: "2xl", alignItems: "flex-start", children: processes.map(function (p) { return (_jsx(Process, { title: p.title, body: p.body, imageURL: p.imageURL })); }) })] }));
}
function Process(_a) {
    var title = _a.title, body = _a.body, imageURL = _a.imageURL;
    return _jsxs(VStack, { gap: 'md', alignItems: "flex-start", children: [_jsx(Heading, { textStyle: "h5.bold", color: "greyscale.text.title", children: title }), _jsx(Text, { textStyle: "bodyLarge.base", color: "greyscale.text.body", mb: "md", children: body }), _jsx(Image, { w: "24rem", src: imageURL, rounded: 'l' })] });
}
function PagesSection() {
    return (_jsxs(Flex, { w: "100vw", flexDir: "column", alignItems: "center", gap: "2xl", children: [_jsx(Box, { w: "100vw", px: "5xl", py: "l", bg: "greyscale.surface.default", children: _jsx(Image, { w: "full", src: "/src/assets/images/optistaffpages.svg" }) }), _jsxs(VStack, { children: [_jsx(Text, { textStyle: "bodyLarge.bold", color: "greyscale.text.title", children: "Final  Designs for Optistaff" }), _jsxs(Text, { textStyle: "bodyRegular.base", color: "greyscale.text.body", children: ["Left to right (Top): Landing Page, Upload Job Page, Upload Job Bulk CSV", _jsx("br", {}), "Left to right (Bottom): History Page, Dashboard Page, Customer Schedule Page."] })] })] }));
}
function SolutionSection() {
    var techStack = [
        {
            title: "Frontend",
            technologies: ["React.js", "TailwindCSS"],
        },
        {
            title: "Backend",
            technologies: ["Supabase"],
        },
    ];
    var achievements = [
        {
            title: "Dual-role Authentication: ",
            body: "Developed a dual-role authentication with automatic profile creation based on supabase’s built-in database triggers, and role-based routing using react-router-navigation",
        },
        {
            title: "Data integrity:  ",
            body: "Enforced backend business logic using PostgreSQL triggers and SECURITY DEFINER functions to maintain data integrity, enforce shift status consistency, and prevent race conditions in concurrent operations.We added access to crucial documents at different touchpoints (confirmation emails and the “My Appointments” page), to increase discoverability.",
        },
        {
            title: "Bulk Uploading Functionality: ",
            body: "Created a CSV bulk upload system for employers, enabling rapid shift creation with validation, parsing, and error reporting, significantly improving platform scalability for enterprise users.We made booking actions the most prominent right after the user signs in, keeping the booking flow streamlined and intuitive.",
        },
        {
            title: "Enhanced user trust:  ",
            body: "Implemented a reliability-based rating algorithm incorporating cancellation and no-show penalties with experience-based scaling to promote fair workforce accountability.",
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

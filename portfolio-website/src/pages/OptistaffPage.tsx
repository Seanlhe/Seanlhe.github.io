import {
    Flex,
    VStack,
    Image,
    Heading,
    Text,
    List,
    HStack,
    Box,
} from "@chakra-ui/react";

export default function OptistaffPage() {
return (
    <VStack gap="0rem" w="100vw" px="5xl" bg="greyscale.surface.subtle">
        <IntroductionSection />
        <ChallengesSection/>
        <ProcessSection/>
        <PagesSection/>
        <SolutionSection/>
    </VStack>
    );
}

function IntroductionSection() {
    return (
    <Flex w="full" py="5xl" alignItems="center" justifyContent="space-between">
    <VStack maxW="31.25rem" gap="md" alignItems="flex-start">
        <Text textStyle="bodyLarge.bold" color="greyscale.text.subtitle">
        Frontend Development/ UIUX Design
        </Text>
        <Heading textStyle="h1.bold" color="greyscale.text.title" mb="md">
        OptiStaff
        </Heading>
        <Text textStyle="bodyRegular.base" color="greyscale.text.body">
        The project aimed to develop a scalable, user-centric job matching platform with integrated employer and candidate interfaces, enabling flexible access to ad hoc opportunities for workers while streamlining workforce sourcing for businesses. 
        </Text>
    </VStack>
    <Image 
        src="/src/assets/images/optistaff_landing.svg" 
        shadow="s"
        rounded="l"
    />
    </Flex>
);
}


function ChallengesSection() {
    const challenges: ChallengeProps[]=[
        {
            title:"For Job Seekers",
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
            title:"For Employers",
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

    ]
    return (
    <Flex
        w="100vw"
        flexDir="row"
        justifyContent="space-between"
        gap="5xl"
        p="5xl"
        bg="greyscale.surface.default"
    >
    <Heading textStyle="h5.light" w="18rem" color="greyscale.text.title">
        (01) Challenges
    </Heading>
    <VStack
        flex={1}
        gap="2xl"
        alignItems="flex-start"
    >
        <Text
            textStyle="bodyLarge.base"
            color="greyscale.text.body"
        >
            Currently, traditional gig-work and temporary staffing platforms often rely on a "first-come, first-served" job allocation model. This results in several issues for both employers and potential employees.
        </Text>
        <HStack
            gap="4xl"
            alignItems="flex-start"
            w="full"
        >
            {challenges.map(c=>(
                <Challenge
                    title={c.title}
                    content={c.content}
                />
            ))}
        </HStack>
        <VStack
            gap="md"
            alignItems="flex-start"
            mt="l"
        >
            <Image
                src="/src/assets/images/telegram_image.svg"
                rounded="l"
                w="24rem"
            />
            <Text
                textStyle="bodyRegular.base"
                color="greyscale.text.body"
            >
                Example: A telegram group used to share job postings
            </Text>
        </VStack>
    </VStack>
    </Flex>
    );
}

interface ChallengeProps{
    title: string,
    content: ContentProps[]
}

interface ContentProps{
    bold: string,
    body: string
}

function Challenge({title, content}: ChallengeProps){
    return <VStack
        gap="l"
        alignItems="flex-start"
        w="full"
    >
        <Heading
            textStyle="h5.bold"
            color="greyscale.text.title"
        >
            {title}
        </Heading>
        <List.Root
            gap="md"
            listStylePos="inside"
        >
            {content.map(c=>(
                <List.Item>
                    <Text
                        textStyle="bodyLarge.base"
                        color="greyscale.text.body"
                        display="inline"
                    >
                        <Text
                            as="span"
                            textStyle="bodyLarge.bold"
                            color="greyscale.text.title"
                            display="inline"
                        >
                            {c.bold} </Text>
                        {c.body}
                    </Text>
                </List.Item>
            ))}
        </List.Root>
    </VStack>
}

function ProcessSection() {
    const processes: ProcessProps[]=[
        {
            title: "Key Use Cases",
            body: "We began by defining and mapping the core features for our minimum viable product (MVP) using use case diagrams, deliberately prioritising speed to market to enable early user testing and rapid feedback.  Employees could set job preferences and availability, and manage or cancel assigned shifts, while employers were able to create and manage job listings and rate workers upon assignment completion. ",
            imageURL: "/src/assets/images/use_case_diagram.svg"
        },
        {
            title: "Sequence Diagrams",
            body: "For each core feature, we developed sequence diagrams to map interactions across system components and define behaviour across different states, including error handling. This process aligned team expectations, clarified architectural decisions, and provided a clear foundation for unit, integration, and end-to-end testing",
            imageURL: "/src/assets/images/seq_diagram.svg"
        },
        {
            title: "System Diagrams",
            body: "We modelled the relevant attributes, methods, relationships and multiplicities of each entity within the system using a class diagram. This ensured data integrity, separation of responsibilities, and aligned backend development with business logic.",
            imageURL: "/src/assets/images/system_diagram.svg"
        }
    ]
    return (
    <Flex
        w="100vw"
        flexDir="row"
        justifyContent="space-between"
        gap="5xl"
        p="5xl"
        bg="greyscale.surface.subtle"
    >
        <Heading 
            textStyle="h5.light" 
            w="18rem" 
            color="greyscale.text.title"
        >
            (02) Process
        </Heading>
        <VStack
            flex={1}
            gap="2xl"
            alignItems="flex-start"
        >
            {processes.map(p=>(
                <Process title={p.title} body={p.body} imageURL={p.imageURL}/>
            ))}
        </VStack>
    </Flex>
    );
}

interface ProcessProps {
    title: string,
    body: string,
    imageURL: string
}

function Process({title, body, imageURL}: ProcessProps){
    return <VStack
        gap='md'
        alignItems="flex-start"
    >
        <Heading
            textStyle="h5.bold"
            color="greyscale.text.title"
        >
            {title}
        </Heading>
        <Text
            textStyle="bodyLarge.base"
            color="greyscale.text.body"
            mb="md"
        >
            {body}
        </Text>
        <Image
            w="24rem"
            src={imageURL}
            rounded='l'
        />
    </VStack>
}

function PagesSection() {
return (
    <Flex w="100vw" flexDir="column" alignItems="center" gap="2xl">
    <Box w="100vw" px="5xl" py="l" bg="greyscale.surface.default">
        <Image w="full" src="/src/assets/images/optistaffpages.svg" />
    </Box>
    <VStack>
        <Text textStyle="bodyLarge.bold" color="greyscale.text.title">
            Final  Designs for Optistaff
        </Text>
        <Text textStyle="bodyRegular.base" color="greyscale.text.body">
            Left to right (Top): Landing Page, Upload Job Page, Upload Job Bulk CSV
            <br/>
            Left to right (Bottom): History Page, Dashboard Page, Customer Schedule Page.
        </Text>
    </VStack>
    </Flex>
);
}

function SolutionSection() {
    const techStack = [
      {
        title: "Frontend",
        technologies: ["React.js", "TailwindCSS"],
      },
      {
        title: "Backend",
        technologies: ["Supabase"],
      },
    ];
    const achievements = [
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
    return (
      <Flex
        w="100vw"
        flexDir="row"
        justifyContent="space-between"
        gap="5xl"
        p="5xl"
      >
        <Heading textStyle="h5.light" w="18rem" color="greyscale.text.title">
          (03) Solution
        </Heading>
        <VStack gap="4xl" alignItems="flex-start" flex={1}>
          <VStack alignItems="flex-start" gap="xl">
            <Heading textStyle="h4.bold" color="greyscale.text.title">
              Tech Stack
            </Heading>
            <HStack gap="md" alignItems="flex-start">
              {techStack.map((stack) => (
                <Technology
                  title={stack.title}
                  technologies={stack.technologies}
                />
              ))}
            </HStack>
          </VStack>
          <VStack alignItems="flex-start" gap="xl">
            <Heading textStyle="h4.bold" color="greyscale.text.title">
              Achievements
            </Heading>
            <List.Root gap="l">
              {achievements.map((a) => (
                <Achievement title={a.title} body={a.body} />
              ))}
            </List.Root>
          </VStack>
        </VStack>
      </Flex>
    );
  }
  
  interface TechnologiesProps {
    title: string;
    technologies: string[];
  }
  
  function Technology({ title, technologies }: TechnologiesProps) {
    return (
      <VStack alignItems="flex-start" w="12rem">
        <Heading textStyle="h6.base" color="greyscale.text.title">
          {title}
        </Heading>
        <List.Root listStyle="none">
          {technologies.map((t) => (
            <List.Item>
              <Text textStyle="bodyRegular.base" color="greyscale.text.body">
                {t}
              </Text>
            </List.Item>
          ))}
        </List.Root>
      </VStack>
    );
  }
  
  interface AchievementProps {
    title: string;
    body: string;
  }
  
  function Achievement({ title, body }: AchievementProps) {
    return (
      <Text textStyle="bodyLarge.base" color="greyscale.text.body">
        <Text as="span" textStyle="bodyLarge.bold" color="greyscale.text.title">
          {title}{" "}
        </Text>
        {body}
      </Text>
    );
  }
  
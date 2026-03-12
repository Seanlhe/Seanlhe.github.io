import { VStack, Flex, Heading, Text, Image, List, HStack, Box } from "@chakra-ui/react";

export default function CentsiblePage(){
    return <VStack w="100vw" px="5xl" bg="greyscale.surface.subtle">
        <IntroductionSection/>
        <BackgroundSection/>
        <ProblemStatement/>
        <ProcessSection/>
        <PagesSection/>
        <SolutionSection/>
    </VStack>
}

function IntroductionSection() {
    return (
      <Flex w="full" py="5xl" alignItems="center" justifyContent="space-between">
        <VStack maxW="31.25rem" gap="md" alignItems="flex-start">
          <Text textStyle="bodyLarge.bold" color="greyscale.text.subtitle">
            Frontend Developer Intern
          </Text>
          <Heading textStyle="h1.bold" color="greyscale.text.title" mb="md">
            Centsible
          </Heading>
          <Text textStyle="bodyRegular.base" color="greyscale.text.body">
          The project aimed to develop a group-based expense tracking mobile application targetted at multi-generational families to reduce impulsive spending and foster better financial habits (eg. budgetting) through mutual accountability and supervision.
          </Text>
        </VStack>
        <Image 
          src="/src/assets/images/centsible_dashboard.svg" 
          shadow="s"
          rounded="l"
        />
      </Flex>
    );
}

function BackgroundSection() {
    const audiences: AudienceProps[]= [
        {
            imageURL:"",
            name:"Natasha, 30",
            description: ["Mother of two",
            "Sole breadwinner of the family",
            "Manages household finance"]
        },
        {
            imageURL:"",
            name:"Kevin, 15",
            description: [
            "Secondary 3 student",
            "Receives a weekly allowance",
            "Tends to spend a lot on video game transactions"
            ]
        },
        {
            imageURL:"",
            name:"Susan, 68",
            description: [
            "Has recurring medical expenses and bills",
            "Wants to know her monthly budget",
            "Past victim of scams"
            ]
        }
    ]
    const statistics: StatisticsProps[] = [
        {
            stat: "$1.1 billion",
            body: "lost in scams in 2024"
        },
        {
            stat: "20%",
            body: "increase in household spending from 2018-2023"
        }
    ]
    return (
      <Flex
        w="100vw"
        p="5xl"
        flexDir="row"
        gap="5xl"
      >
        <Heading textStyle="h5.light" w="18rem" color="greyscale.text.title">
        (01) Background
        </Heading>
        <VStack 
            gap="2xl" 
            alignItems="flex-start" 
            flex={1}
        >
            <Text textStyle="bodyLarge.base" color="greyscale.text.body">
            In today’s consumer-driven environment, social media and advertising heavily shape spending habits, often weakening financial discipline and personal responsibility. In Singapore, rising impulsive spending and scam exposure show that poor financial decisions can affect people of all ages, making it especially important for breadwinners to ensure their dependants use allowances wisely.
            </Text>
            <VStack
                alignItems="flex-start"
            >
                <Text
                    textStyle="h5.bold"
                    color="greyscale.text.title"
                >
                    Target Audience
                </Text>
                <HStack
                    gap="3xl"
                    alignItems="flex-start"
                >
                    {audiences.map(a=>(
                        <Audience 
                            imageURL={a.imageURL} 
                            name={a.name} 
                            description={a.description}
                        />
                    ))}
                </HStack>
            </VStack>
            <VStack
                alignItems="flex-start"
            >
                <Text
                    textStyle="h5.bold"
                    color="greyscale.text.title"
                >
                    Key Statistics
                </Text>
                <HStack
                    gap="3xl"
                    alignItems="flex-start"
                >
                    {statistics.map(s=>(
                        <Statistics
                            stat={s.stat}
                            body={s.body}
                        />
                    ))}
                </HStack>
            </VStack>
        </VStack>
      </Flex>
    );
  }

interface AudienceProps{
    imageURL: string,
    name: string,
    description: string[]
}

function Audience({imageURL, name, description}: AudienceProps){
    return <VStack
        gap="md"
        w="full"
        mt="md"
    >
        <Image 
            src={imageURL}
            w="10rem"
            h="10rem"
            p="l"
            rounded="full"
            border="1px solid"
            borderColor="greyscale.border.default"
        />
        <Text
            textStyle="h6.bold"
            color="greyscale.text.title"
        >
            {name}
        </Text>
        <List.Root
            listStylePos="inside"
        >
            {description.map(d=>(
                <List.Item
                >
                    <Text
                        display="inline"
                        textStyle="bodyLarge.base" 
                        color="greyscale.text.body"
                    >
                        {d}
                    </Text>
                </List.Item>
            ))}
        </List.Root>
    </VStack>
}

interface StatisticsProps{
    stat: string;
    body: string
}

function Statistics({stat, body}: StatisticsProps){
    return <Flex
        w="full"
        maxW="14rem"
        flexDir="column"
        alignItems="center"
        gap="md"
    >
        <Text
            textStyle="h2.bold"
            color="greyscale.text.title"
        >
            {stat}
        </Text>
        <Text
            textStyle="bodyLarge.base"
            color="greyscale.text.body"
            textAlign="center"
        >
            {body}
        </Text>
    </Flex>
}

function ProblemStatement(){
    return <Flex
    w="100vw"
    p="5xl"
    flexDir="column"
    gap="md"
    alignItems="center"
    bg="greyscale.surface.default"
    >
        <Heading
            textStyle="h5.light"
            color="greyscale.text.title"
        >
            Problem Statement
        </Heading>
        <Text
            textStyle="h2.bold"
            color="greyscale.text.title"
            textAlign="center"
        >
            “How might we reduce overspending, improve transparency and strengthen shared decision making for multi-generational families?”
        </Text>
  </Flex>
}


function ProcessSection() {
    const behaviouralResearch: ResearchProps[] = [
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
    ]

    const solutionsResearch: ResearchProps[] = [
        {
            title: "High user friction: ",
            body: "If logging feels tedious, users are less likely to stay consistent."
        },
        {
            title: "Alerts drive habit formation: ",
            body:"Reminders prompt users to record expenses on time."
        },
        {
            title: "Speed matters for scams: ",
            body: "The earlier suspicious activity is flagged, the better the chance of preventing loss."
        }
    ]
    return (
      <Flex
        w="100vw"
        flexDir="row"
        justifyContent="space-between"
        gap="5xl"
        p="5xl"
      >
        <Heading textStyle="h5.light" w="18rem" color="greyscale.text.title">
          (02) Process
        </Heading>
        <VStack gap="3xl" alignItems="flex-start" flex={1}>
            <VStack
                alignItems="flex-start"
            >
                <Heading
                    textStyle="h5.bold"
                    color="greyscale.text.title"
                >
                    Behavioural Psychology Research
                </Heading>
                <List.Root
                    listStylePos="inside"
                >
                    {behaviouralResearch.map(r=>(
                        <List.Item>
                            <Research
                                title={r.title}
                                body={r.body}
                            />
                        </List.Item>
                    ))}
                </List.Root>
          </VStack>
          <VStack
            alignItems="flex-start"
          >
                <Heading
                    textStyle="h5.bold"
                    color="greyscale.text.title"
                >
                    Current Solutions Research
                </Heading>
                <List.Root
                    listStylePos="inside"
                >
                    {solutionsResearch.map(r=>(
                        <List.Item>
                            <Research
                                title={r.title}
                                body={r.body}
                            />
                        </List.Item>
                    ))}
                </List.Root>
          </VStack>
        </VStack>
      </Flex>
    );
}

interface ResearchProps{
    title: string,
    body: string
}

function Research({title, body}: ResearchProps){
    return <Text
        display="inline"
        textStyle="bodyLarge.base"
        color="greyscale.text.body"
    >
        <Text
            textStyle="bodyLarge.bold"
            color="greyscale.text.title"
            as="span"
        >
        {title} </Text>
        {body}
    </Text>
}

function PagesSection() {
    return (
      <Flex w="100vw" flexDir="column" alignItems="center" gap="2xl">
        <Box w="100vw" px="5xl" py="l" bg="greyscale.surface.default">
          <Image w="full" src="/src/assets/images/centsible_pages.svg" />
        </Box>
        <VStack>
          <Text textStyle="bodyLarge.bold" color="greyscale.text.title">
            Final  Designs for Centsible
          </Text>
          <Text textStyle="bodyRegular.base" color="greyscale.text.body">
            Left to right (Top): Dashboard, Budget, Leaderboard, Streaks, Family <br/>
            Left to right (Bottom): Alerts, Transactions, Log Expense, Sign in, Sign up
          </Text>
        </VStack>
      </Flex>
    );
  }

function SolutionSection() {
const techStack = [
    {
    title: "Frontend",
    technologies: ["Java", "XML"],
    },
    {
    title: "Backend",
    technologies: ["Java", "MongoDB", "Springboot", "Cloudinary"],
    },
];
const achievements = [
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
  
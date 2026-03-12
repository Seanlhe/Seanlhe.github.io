import {
  Flex,
  VStack,
  Image,
  Heading,
  Text,
  List,
  HStack,
  Circle,
  Box,
} from "@chakra-ui/react";

export default function HomehelpyPage() {
  return (
    <VStack w="100vw" px="5xl" bg="greyscale.surface.subtle">
      <IntroductionSection />
      <ChallengesSection />
      <ProcessSection />
      <PagesSection />
      <SolutionSection />
    </VStack>
  );
}

function IntroductionSection() {
  return (
    <Flex w="full" py="5xl" alignItems="center" justifyContent="space-between">
      <VStack maxW="31.25rem" gap="md" alignItems="flex-start">
        <Text textStyle="bodyLarge.bold" color="greyscale.text.subtitle">
          Frontend Developer Intern
        </Text>
        <Heading textStyle="h1.bold" color="greyscale.text.title" mb="md">
          HomeHelpy
        </Heading>
        <Text textStyle="bodyRegular.base" color="greyscale.text.body">
          The project aimed to create a scalable, conversion-focused website
          with integrated customer and staff interfaces, enabling autonomous
          booking, streamlined operations, and effective capture of
          marketing-driven traffic.
        </Text>
      </VStack>
      <Image 
        src="/src/assets/images/hhlanding.png" 
        shadow="s"
        rounded="l"
      />
    </Flex>
  );
}

function ChallengesSection() {
  const challenges: ChallengeItemProps[] = [
    { index: "01", challenge: "Poor user experience" },
    { index: "02", challenge: "Fragmented and disconnected booking systems" },
    { index: "03", challenge: "High maintenance costs" },
  ];
  return (
    <Flex
      w="100vw"
      p="5xl"
      flexDir="column"
      gap="5xl"
      bg="greyscale.surface.default"
    >
      <Text textStyle="h2.bold" color="greyscale.text.title" maxW="57.5rem">
        “We collated bookings from multiple platforms, including the website, a
        call-center and external brokers, leading to scheduling conflicts.”
      </Text>
      <Flex flexDir="row" justifyContent="space-between" gap="5xl">
        <Heading textStyle="h5.light" w="18rem" color="greyscale.text.title">
          (01) Challenges Faced
        </Heading>
        <VStack gap="2xl" alignItems="flex-start" flex={1}>
          <Text textStyle="bodyLarge.base" color="greyscale.text.body">
            Previously, HomeHelpy outsourced the development of their website to
            external vendors, which resulted in several challenges:
          </Text>
          <List.Root listStyle="none" my="l" gap="xl">
            {challenges.map((c) => (
              <ChallengeItem index={c.index} challenge={c.challenge} />
            ))}
          </List.Root>
          <Text textStyle="bodyLarge.base" color="greyscale.text.body">
            This project aimed to address these challenges by developing a
            scalable, conversion-focused web application with integrated
            customer and staff interfaces, enabling autonomous bookings,
            streamlined operations, and a unified platform for all services.
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}

interface ChallengeItemProps {
  index: string;
  challenge: string;
}

function ChallengeItem({ index, challenge }: ChallengeItemProps) {
  return (
    <HStack gap="2xl">
      <Circle
        bg="greyscale.white"
        w="3rem"
        h="3rem"
        textStyle="h5.bold"
        color="greyscale.text.title"
      >
        {index}
      </Circle>
      <Text textStyle="bodyLarge.bold" color="greyscale.text.title">
        {challenge}
      </Text>
    </HStack>
  );
}

function ProcessSection() {
  const research: ResearchProps[] = [
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
      <VStack gap="4xl" alignItems="flex-start" flex={1}>
        {research.map((r) => (
          <Research
            title={r.title}
            subtitle={r.subtitle}
            insights={r.insights}
          />
        ))}
      </VStack>
    </Flex>
  );
}

interface ResearchProps {
  title: string;
  subtitle: string;
  insights: string[];
}

function Research({ title, subtitle, insights }: ResearchProps) {
  return (
    <Flex flexDir="column" gap="md">
      <Heading textStyle="h5.bold" color="greyscale.text.title">
        {title}
      </Heading>
      <Text textStyle="bodyRegular.base" color="greyscale.text.subtitle" mb="md">
        {subtitle}
      </Text>
      <List.Root listStylePos="inside" gap="md">
        {insights.map((i) => (
          <List.Item>
            <Text
              textStyle="bodyLarge.base"
              color="greyscale.text.body"
              display="inline"
            >
              {i}
            </Text>
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  );
}

function PagesSection() {
  return (
    <Flex w="100vw" flexDir="column" alignItems="center" gap="2xl">
      <Box w="100vw" px="5xl" py="l" bg="greyscale.surface.default">
        <Image w="full" src="/src/assets/images/hhpages.svg" />
      </Box>
      <VStack>
        <Text textStyle="bodyLarge.bold" color="greyscale.text.title">
          Approved Website Designs for HomeHelpy
        </Text>
        <Text textStyle="bodyRegular.base" color="greyscale.text.body">
          Left to right: Landing Page, General Cleaning Marketing Page, User
          Dashboard, Booking Form, Manage Bookings Page, Booking Success Page.
        </Text>
      </VStack>
    </Flex>
  );
}

function SolutionSection() {
  const techStack = [
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
  const achievements = [
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
          <HStack gap="md">
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

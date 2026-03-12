import {Flex, Text,Heading, VStack, HStack, List, Image, IconButton, Grid, GridItem, Input, Button} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
export default function HomePage(){
    return <Flex
        bg="greyscale.surface.subtle"
        w="full"
        flexDir="column"
        alignItems="center"
        px="5xl"
    >
        <IntroductionSection/>
        <ProjectsSection/>
        <AboutSection/>
        <ContactSection/>
    </Flex>
}

function IntroductionSection(){
    return <Flex 
            flexDir="row"
            justify="space-between"
            w="full"
            py="5xl"
        >
        <VStack
            w="794px"
            gap="2xl"
        >
            <Heading 
                textStyle="h1.bold" 
                color="greyscale.text.title"
            >
                Hi, I’m Sean, a software engineer. 
            </Heading>
            <Text 
                textStyle="h5.base" 
                color="greyscale.text.body"
            >
                I build websites that communicate your values and deliver customer satisfaction.
            </Text>
        </VStack>
        <ContactDetails/>
    </Flex>
}

function ContactDetails(){
    return <VStack
        alignItems="start"
    >
        <Heading 
            textStyle="h6.bold" 
            color="greyscale.text.title"
        >
            Contact Details
        </Heading>
        <List.Root
            mt="l"
            listStyle="none"
            gap="md"
        >
            <List.Item>
                <Text 
                    textStyle="bodyLarge.base"
                    color="greyscale.text.body"
                >
                    seanlenghaoen@gmail.com
                </Text>
            </List.Item>
            <List.Item>
                <Text
                    textStyle="bodyLarge.base"
                    color="greyscale.text.body"
                >
                    +65 82209031
                </Text>
            </List.Item>
        </List.Root>
        <Heading 
            textStyle="h6.bold" 
            color="greyscale.text.title"
            mt="2xl"
        >
            Other Links
        </Heading>
        <List.Root
            mt="l"
            listStyle="none"
            flexDir="row"
            gap="md"
        >
            <List.Item>
                <IconButton
                    rounded="full"
                    w="3rem"
                    h="3rem"
                    bg="none"
                    border="1px solid"
                    borderColor="greyscale.border.default"
                    as="a"
                    onClick={()=>{window.location.href="https://www.linkedin.com/in/sean-leng-ab44322b1/"}}
                >
                    <Image src="/assets/icons/linkedin.svg"/>
                </IconButton>
            </List.Item>
            <List.Item>
                <IconButton
                    rounded="full"
                    w="3rem"
                    h="3rem"
                    bg="none"
                    border="1px solid"
                    borderColor="greyscale.border.default"
                    onClick={()=>{window.location.href="https://github.com/Seanlhe"}}
                >
                    <Image src="/assets/icons/githubIcon.svg"/>
                </IconButton>
            </List.Item>
        </List.Root>
    </VStack>
}

function ProjectsSection(){
    const navigate = useNavigate()
    return <VStack
        w="full"
        alignItems="start"
        py="5xl"
        gap="2xl"
    >
        <Heading
            textStyle="h1.bold" 
            color="greyscale.text.title"
        >
            Projects
        </Heading>
        <Grid
            templateColumns="repeat(12, 1fr)"
            gap="2xl"
            w="full"
        >
            <GridItem
                display="flex"
                flexDir="column"
                colSpan={7}
                cursor="pointer"
                onClick={()=>{navigate("/homehelpy")}}
            >
                <Image 
                    h="25rem"
                    w="full"
                    rounded="l"
                    mb="l"
                    src="/assets/images/homehelpy_mockup.svg"
                />
                <Text
                    textStyle="h6.bold"
                    color="greyscale.text.title"
                    mb="md"
                >
                    HOMEHELPY
                </Text>
                <Text
                    textStyle="bodyLarge.base"
                    color="greyscale.text.body"
                >
                    UIUX design, web development
                </Text>
            </GridItem>
            <GridItem
                display="flex"
                flexDir="column"
                colSpan={5}
                w="full"
                cursor="pointer"
                onClick={()=>{navigate("/centsible")}}
            >
                <Image 
                    bg="black"
                    h="25rem"
                    w="full"
                    rounded="l"
                    mb="l"
                    src="/assets/images/centsible_mockup.svg"
                />
                <Text
                    textStyle="h6.bold"
                    color="greyscale.text.title"
                    mb="md"
                >
                    CENTSIBLE
                </Text>
                <Text
                    textStyle="bodyLarge.base"
                    color="greyscale.text.body"
                >
                    UIUX design, mobile app development
                </Text>
            </GridItem>
            <GridItem
                display="flex"
                flexDir="column"
                colSpan={5}
                w="full"
                cursor="pointer"
                onClick={()=>{navigate("/optistaff")}}
            >
                <Image 
                    bg="black"
                    h="25rem"
                    w="full"
                    rounded="l"
                    mb="l"
                    src="/assets/images/optistaff_mockup.svg"
                />
                <Text
                    textStyle="h6.bold"
                    color="greyscale.text.title"
                    mb="md"
                >
                    OPTISTAFF
                </Text>
                <Text
                    textStyle="bodyLarge.base"
                    color="greyscale.text.body"
                >
                    UIUX design, web development
                </Text>
            </GridItem>
            <GridItem
                display="flex"
                flexDir="column"
                colSpan={7}
            >
                <Image 
                    bg="black"
                    h="25rem"
                    w="full"
                    rounded="l"
                    mb="l"
                />
                <Text
                    textStyle="h6.bold"
                    color="greyscale.text.title"
                    mb="md"
                >
                    EVENT HORIZON (COMING SOON)
                </Text>
                <Text
                    textStyle="bodyLarge.base"
                    color="greyscale.text.body"
                >
                    UIUX design, web development
                </Text>
            </GridItem>
        </Grid>
    </VStack>
}

function AboutSection(){
    return <Flex
        w="100vw"
        py="5xl"
        px="5xl"
        bg="greyscale.surface.default"
        flexDir="column"
        gap="2xl"
    >
        <Heading
            textStyle="h1.bold" 
            color="greyscale.text.title"
        >
            About Me
        </Heading>
        <HStack
            w="full"
            justifyContent="space-between"
        >
            <Image 
                w="39.5rem"
                h="38rem"
                rounded="l"
                bg="greyscale.black"
                src="/assets/images/profile_pic.svg"
            />
            <VStack
                w="31rem"
                alignItems="start"
                gap="l"
            >
                <Text
                    textStyle="h4.bold"
                    color="greyscale.text.subtitle"
                >
                    Who Am I?
                </Text>
                <Text
                    textStyle="h5.base"
                    color="greyscale.text.body"
                >
                I’m a UI/UX designer and software engineer in Singapore who loves collaborating with different brands. Each project pushes me to experiment with new design styles and create work that truly reflects a brand’s personality.
                When I’m not designing or coding, you’ll probably find me reading about marketing or design, dancing street styles like locking and hip hop, or getting a workout in.
                </Text>
            </VStack>
        </HStack>
    </Flex>
}

function ContactSection(){
    return <Flex
        w="100vw"
        py="5xl"
        px="5xl"
        bg="greyscale.surface.darker"
        flexDir="row"
        alignItems="flex-end"
        justifyContent="space-between"
        gap="2xl"
    >
        <VStack
            w="full"
            maxW="35rem"
            gap="l"
            alignItems="start"
        >
            <Heading
                textStyle="h1.bold" 
                color="greyscale.text.title"
            >
                Contact Me
            </Heading>
            <Text
                textStyle="bodyLarge.base"
                color="greyscale.text.body"
            >
                Have an opportunity and want to connect? Leave me a message.
            </Text>
            <Grid
                templateColumns="repeat(2, 1fr)"
                gap="2xl"
                my="xl"
                w="full"
            >
                <GridItem>
                    <Input
                        px="0rem"
                        placeholder="FIRST NAME *"
                        textStyle="bodyRegular.base"
                        color="greyscale.text.body"
                        border="none"
                        borderBottom="1px solid"
                        borderColor="greyscale.border.default"
                        rounded="0rem"
                        _placeholder={{
                            color: "greyscale.text.body",
                            opacity: 1, 
                        }}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        px="0rem"
                        placeholder="LAST NAME *"
                        textStyle="bodyRegular.base"
                        color="greyscale.text.body"
                        border="none"
                        borderBottom="1px solid"
                        borderColor="greyscale.border.default"
                        rounded="0rem"
                        _placeholder={{
                            color: "greyscale.text.body",
                            opacity: 1, 
                        }}
                    />
                </GridItem>
                <GridItem
                    colSpan={2}
                >
                    <Input
                        px="0rem"
                        placeholder="EMAIL *"
                        textStyle="bodyRegular.base"
                        color="greyscale.text.body"
                        border="none"
                        borderBottom="1px solid"
                        borderColor="greyscale.border.default"
                        rounded="0rem"
                        _placeholder={{
                            color: "greyscale.text.body",
                            opacity: 1, 
                        }}
                    />
                </GridItem>
                <GridItem
                    colSpan={2}
                >
                    <Input
                        px="0rem"
                        placeholder="ENQUIRY *"
                        textStyle="bodyRegular.base"
                        color="greyscale.text.body"
                        border="none"
                        borderBottom="1px solid"
                        borderColor="greyscale.border.default"
                        rounded="0rem"
                        _placeholder={{
                            color: "greyscale.text.body",
                            opacity: 0.8, 
                        }}
                    />
                </GridItem>
            </Grid>
            <Button
                textStyle="bodyRegular.base"
                bg="greyscale.black"
                color="greyscale.text.negative"
                rounded="md"
                p="l"
            >
                Send Message
            </Button>
        </VStack>
        <ContactDetails/>
    </Flex>
}
import {Flex, HStack, Button, Text, Link} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import cv from '/assets/pdfs/cv.pdf'; 
export default function NavBar(){
    const navigate = useNavigate()
    return <Flex
        w="100vw"
        py="2xl"
        px="5xl"
        flexDir="row"
        justifyContent="space-between"
        position="sticky"
        bg="greyscale.surface.subtle"
        top="0"
        right="0"
    >
        <Text
            textStyle="bodyRegular.base"
            color="greyscale.text.title"
        >
            Sean Leng
        </Text>
        <HStack
            gap="l"
        >
            <Button
                textStyle="bodyRegular.base"
                bg="none"
                color="greyscale.text.title"
                rounded="md"
                p="l"
                onClick={()=>navigate("/")}
            >
                Home
            </Button>
            <Link
                textStyle="bodyRegular.base"
                bg="greyscale.black"
                color="greyscale.text.negative"
                rounded="md"
                p="l"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={cv}
            >
                Resume
            </Link>
        </HStack>
    </Flex>
}
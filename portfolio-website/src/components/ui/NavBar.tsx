import {Flex, HStack, Button, Text, DownloadTrigger} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import pdf from '@/assets/pdfs/CV_Sean.pdf'; 
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
            <Button
                textStyle="bodyRegular.base"
                bg="greyscale.black"
                color="greyscale.text.negative"
                rounded="md"
                p="l"
            >
                Resume
            </Button>
        </HStack>
    </Flex>
}
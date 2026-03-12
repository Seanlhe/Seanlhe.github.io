import NavBar from "@/components/ui/NavBar"
import {Flex} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function PageLayout(){
    return <Flex
        w="100vw"
        flexDir="column"
    >
        <NavBar/>
        <Outlet/>
    </Flex>
}
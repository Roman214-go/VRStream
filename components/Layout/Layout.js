import { Box } from "@chakra-ui/react"
import SideBar from "../SideBar/SideBar"

const Layout = ({ children }) => {
    return (
        <Box>
            <SideBar />
            <Box as="main">
                {children}
            </Box>
        </Box>
    )
}

export default Layout
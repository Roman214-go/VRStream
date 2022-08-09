import {
    Box,
    Grid
} from "@chakra-ui/react"

const BackGround = () => {
    const viewColors = [
        {name: "red"},
        {name: "white"},
        {name: "black"},
        {name: "purple"},
        {name: "pink"},
        {name: "yellow"},
        {name: "blue"},
        {name: "gold"},
        {name: "lime"},
        {name: "green"},
        {name: "wheat"},
    ] 
    return (
        <Box>
            <h2>Backgrounds</h2>
            <Grid gridTemplateColumns={"1fr 1fr"} gap="10px" justifyContent={"center"} mt="10px">
                {
                    viewColors.map((item, index) => (
                        <Box w="100%" h="90px" bg={item.name} borderRadius={10} border="2px solid black"></Box>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default BackGround
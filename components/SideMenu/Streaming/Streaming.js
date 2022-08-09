import {
    Grid,
    Box, 
    Flex,
    Spinner
} from "@chakra-ui/react"
import styles from "./Streaming.module.scss"

const Streaming = () => {
    const viewStreams = [
        {id: 1, streamName: "Play games", streamUser: "Petya"},
        {id: 1, streamName: "Vasya", streamUser: "Vasya"},
        {id: 1, streamName: "Shoot the night", streamUser: "Pushka228"},
        {id: 1, streamName: "Dig a hole", streamUser: "Krot109"},
        {id: 1, streamName: "Minecrafteeee", streamUser: "Lololoshka"},
    ]
    return (
        <>
            <h2>Streaming</h2>
            <Grid gridTemplateColumns={"1fr 1fr"} gap="20px" mt={"10px"}>
                {
                    viewStreams.map((item) => (
                        <Grid gridTemplateRows={"2fr 1fr"} key={item.id} bg="gray.200" borderRadius={5}>
                            <Flex bgColor={"wheat"} justifyContent={"center"} alignItems={"center"}><Spinner size='lg'/></Flex>
                            <Flex flexDirection={"column"} p={"5px"}>
                                <span className={styles.streamname}>{item.streamName}</span>
                                <sapn className={styles.username}>{item.streamUser}</sapn>
                            </Flex>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Streaming
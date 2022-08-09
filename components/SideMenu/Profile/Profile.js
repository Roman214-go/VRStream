import { Box, Grid, Editable, EditableInput, EditablePreview } from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg"

const Profile = () => {
    return (
        <>
            <h2>Profile</h2>
            <Grid mt={"10px"} gridTemplateColumns={"1fr 2fr"}>
                <CgProfile size="100px"/>
                <Box>
                    Profile name
                    <Editable defaultValue='Write your profile name...' color={"gray.100"}>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                    Email
                    <Editable defaultValue='Write your email...' color="gray.100">
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Box>

            </Grid>
        </>
    )
}

export default Profile
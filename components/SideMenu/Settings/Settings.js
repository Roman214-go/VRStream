import {
    FormControl,
    Switch,
    FormLabel,
    Button,
    Flex
} from "@chakra-ui/react"
import {MdCall} from "react-icons/md"
const Settings = () => {
    return (
        <>
            <h2>Settings</h2>
            <Flex flexDirection={"column"} gap="20px">
                <FormControl display='flex' alignItems='center' justifyContent="space-between" mt="10px">
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        Enable email alerts:
                    </FormLabel>
                    <Switch id='email-alerts' />
                </FormControl>
                <Button rightIcon={<MdCall />} colorScheme='gray.100' variant='outline'>
                    Contact us
                </Button>
            </Flex>
        </>
    )
}

export default Settings
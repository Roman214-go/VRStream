import { Button, Flex, Icon, Input } from "@chakra-ui/react"
import { 
    GiBearFace, 
    GiCyborgFace,
    GiDwarfFace,
    GiDoubleFaceMask,
    GiDoctorFace,
    GiMonkFace,
    GiNunFace,
    GiInvisibleFace,
    GiTreeFace,
    GiWitchFace,
    GiWizardFace
 } from "react-icons/gi"

const AvatarInventory = () => {
    const viewAvatars = [
        {name: GiCyborgFace},
        {name: GiBearFace},
        {name: GiDwarfFace},
        {name: GiDoubleFaceMask},
        {name: GiDoctorFace},
        {name: GiNunFace},
        {name: GiInvisibleFace},
        {name: GiTreeFace},
        {name: GiWitchFace},
        {name: GiWizardFace}
    ]
    return (
        <>
        <h2>Avatar Inventory</h2>
        <Input placeholder='Search' mt="10px"/>
        <Flex flexWrap={"wrap"} gap="14px" mt="20px">
            <Button w="90px" h="90px" bg={"gray.500"}>
                Add avatar
            </Button>
            {
                viewAvatars.map((item, index) => (
                    <Icon w="90px" h="90px" as={item.name} key={index}/>
                ))
            }
        </Flex>
        </>
    )
}

export default AvatarInventory
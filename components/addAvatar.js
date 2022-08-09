import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Flex
  } from '@chakra-ui/react'
import { 
    GiDwarfFace,
    GiBearFace,
    GiCyborgFace,
    GiInvisibleFace,
    GiMonkFace,
    GiNunFace,
    GiPigFace,
    GiWomanElfFace
 } from "react-icons/gi"

export default function AddAvatar() {

    return (
        <>
        <Popover >
                <PopoverTrigger>
                    <Button h={20} w={20}>Add item</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Choose avatar!</PopoverHeader>
                    <PopoverBody>
                    <Flex gap={5} flexWrap="wrap">
                        <GiDwarfFace size={30}/>
                        <GiBearFace size={30}/>
                        <GiCyborgFace size={30}/>
                        <GiInvisibleFace size={30}/>
                        <GiMonkFace size={30}/>
                        <GiNunFace size={30}/>
                        <GiPigFace size={30}/>
                        <GiWomanElfFace size={30}/>
                    </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}
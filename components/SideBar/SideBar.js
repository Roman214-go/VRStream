import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { ImHome, ImImage } from "react-icons/im"
import { BsCameraReelsFill } from "react-icons/bs" 
import { MdOutlineScreenShare } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { Icon } from "@chakra-ui/react"
import { Input} from "@chakra-ui/react"
import { GiRabbitHead } from "react-icons/gi"
import style from './SideBar.module.scss';
import AvatarInventory from '../SideMenu/AvatarInventory';
import BackGround from '../SideMenu/Background';
import Link from 'next/link';
import Profile from '../SideMenu/Profile';
import Settings from '../SideMenu/Settings';
import Streaming from '../SideMenu/Streaming';
import Recording from '../SideMenu/Record';

const SideBar = () => {
    return (
        <ProSidebar collapsed={true} className={style.sidebar}>
            <SidebarHeader>
                <Menu>
                    <MenuItem icon={<ImHome size="40px"/>}>
                        Home
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <SubMenu title="Avatars" icon={<GiRabbitHead size="40px"/>}>
                            <MenuItem className={style.collapsed}>
                                
                                <AvatarInventory />
                            </MenuItem>
                    </SubMenu>
                    <SubMenu title="Record" icon={<BsCameraReelsFill size="40px"/>}>
                        <MenuItem className={style.collapsed}>
                            <Recording />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<MdOutlineScreenShare size="40px"/>}>
                        <MenuItem className={style.collapsed}>
                            <Streaming />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Background" icon={<ImImage size="40px"/>}>
                        <MenuItem className={style.collapsed}>
                            <BackGround />
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu>
                    <SubMenu icon={<FaUserAlt size="40px"/>}>
                        <MenuItem className={style.collapsed}>
                            <Profile />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<IoMdSettings size="40px"/>}>
                        <MenuItem className={style.collapsed}>
                            <Settings />
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default SideBar
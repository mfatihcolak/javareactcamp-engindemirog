import React from 'react'
import { Dropdown, DropdownMenu, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced = "right" src = "https://pbs.twimg.com/profile_images/1449546655733268482/A_p3Jr-X_400x400.jpg"/>
                <Dropdown pointing = "top right" text = "Fatih" >
                    <DropdownMenu>
                        <Dropdown.Item text = "Bilgilerim" icon = "info"/>
                        <Dropdown.Item onClick={signOut} text = "Çıkış Yap" icon = "Sign Out"/>
                    </DropdownMenu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

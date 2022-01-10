import React, {useState} from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const {cartItems} = useSelector(state => state.cart)

    const [isAuthenticated, setisAuthenticated] = useState(true)
    
    const navigate = useNavigate()
    function handlesSignOut() {
        setisAuthenticated(false)
        navigate('/')
    }
    function handlesSignIn() {
        setisAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed = 'top'>
                <Container>
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />
                    <Menu.Menu position='right'>
                        {cartItems.length> 0 && <CartSummary/>}
                        {isAuthenticated?<SignedIn signOut = {handlesSignOut}/>:<SignedOut signIn ={handlesSignIn}/>}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}

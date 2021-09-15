import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <HeaderContainer>
            {/* Header left */}
            <HeaderLeft>
                <Avatar />
            </HeaderLeft>
            {/* Header Search */}
            <HeaderSearch>

            </HeaderSearch>
            {/* Header Right */}
            <HeaderRight>

            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;


const HeaderContainer = styled.div`
color: red;
`

const HeaderLeft = styled.div``

const HeaderAvatar = styled

const HeaderSearch = styled.div``

const HeaderRight = styled.div``
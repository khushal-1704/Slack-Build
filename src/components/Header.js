import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <HeaderContainer>
            {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar
                //TODO Add onclick
                />
                <AccessTimeIcon />
            </HeaderLeft>
            {/* Header Search */}
            <HeaderSearch>
                <input type="text" placeholder='Search here' />
                <SearchIcon />
            </HeaderSearch>
            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;


const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0 ;
background-color: var(--slack-color);
color: white;
`

const HeaderLeft = styled.div`
flex: 0%.3;
display: flex;
align-items: center;
margin-left: 20px;

 > .MuiSvgIcon-root {
     margin-left: auto;
     margin-right: 30px;
 }
`

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.8;
}
`

const HeaderSearch = styled.div`
flex: 0.6;
display: flex;
align-items: center;

 > input {
     border: none;
     outline: none;
     height: 20px;
     border-radius: 20px;
     padding: 5px 10px;
     width: 40%;
     margin-left: 150px;
     transition: all 0.5s;

     :focus{
         width: 80%;
         margin-left: 20px;
         background-color: lightgray;
     }
 }

 > .MuiSvgIcon-root{
     margin-left: -30px;
     color: gray;
     z-index: 100;
     cursor: pointer;

     :hover{
        color: #302d2d;
     }
 }
`

const HeaderRight = styled.div`
flex: 0%.3;
display: flex;
align-items: flex-end;
> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
    position: relative;

}
`
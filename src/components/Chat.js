import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput'
import Message from './Message'

function Chat() {
    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#ROOM-name</strong></h4>
                        <StarBorderOutlinedIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon />Details
                        </p>
                    </HeaderRight>
                </Header>
                <ChatMessages>
                    <Message userImg='/images/user-1.jfif' message='Hey thanks for reading' />
                    <Message userImg='/images/user-2.jfif' message='Again thanks for reading' />
                    <Message userImg='/images/user-3.jfif' message='Guys please focus on work' />
                    <Message userImg='/images/user-4.jfif' message='I want pizza' />
                    <Message userImg='/images/user-5.jfif' message='I want Ande wala Burger' />
                </ChatMessages>
                <ChatInput />
            </>
        </ChatContainer>
    )
}

export default Chat

const ChatBottom = styled.div`
padding-bottom: 200px;
`

const Header = styled.div`
display:flex ;
justify-content: space-between ;
padding: 20px;
border-bottom: 1px solid lightgray ;
`

const ChatMessages = styled.div`

`

const HeaderLeft = styled.div`
display: flex;
align-items: center;

> h4 {
    display: flex;
    text-transform: uppercase ;
    margin-right: 10px ;
 >h4 > .MuiSvgIcon-root{
     margin-left: 10px ;
     font-size: 10px ;
 }
}
`

const HeaderRight = styled.div`
 > p {
     display: flex;
     align-items: center;
     font-size: 14px; 
 }
 >h4 > .MuiSvgIcon-root{
     margin-right: 5px !important;
     font-size: 16px ;
 }
`

const ChatContainer = styled.div`
flex: 0.7 ;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
`

const New = styled.div``
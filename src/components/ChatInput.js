import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function ChatInput() {

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return (
        <ChatInputContainer>
            <form>
                <input type="text" placeholder={`Message #ROOM`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
    position: relative;
    display:flex ;
    justify-content: center;
}

> form > input {
    position: fixed;
    bottom: 30px ;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px ;
    padding: 20px;
    outline: none;
}

> form > button {
    display: none !important;
}
`
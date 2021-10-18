import React from 'react'
import styled from 'styled-components'

function Message({ message, timeStamp, user, userImg }) {
    return (
        <MessageContainer>
            <img src={userImg} alt="" />
            <MessageInfo>
                <h4>
                    <span>Fir , 24 Sep 2021 19:40 </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message


const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;
border: 1px solid lightgray;
>img {
    height: 50px ;
    border-radius: 8px;
    width: 50px;
}
`
const MessageInfo = styled.div`
padding-left: 10px;
h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
}
`


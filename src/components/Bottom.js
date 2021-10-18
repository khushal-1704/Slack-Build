import React from 'react'
import styled from 'styled-components';
import Sidebar from './Sidebar'
import Chat from './Chat'

function Bottom() {
    return (
        <Container>
            <Sidebar />
            <Chat />
        </Container>
    )
}

export default Bottom


const Container = styled.div`
display: flex;
min-width: 100vw;
`
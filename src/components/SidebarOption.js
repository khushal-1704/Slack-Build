import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase';

function SidebarOption({ Icon, title, rotate, addChannelOption }) {



    return (
        <SidebarOptionContainer

        >
            {Icon && <Icon fontSize="small" styled={{ padding: '10px' }} />}
            {Icon ? (
                <h4>{title}</h4>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span><h4>{title}</h4>
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption



const SidebarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding: 12px;



 > h4 {
     padding-left: 10px;
 }

 :hover{
     opacity: 0.9;
     background-color:#340e36 ;
 }
`

const SidebarOptionChannel = styled.div``
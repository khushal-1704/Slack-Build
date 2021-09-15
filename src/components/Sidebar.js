import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreatIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/Add'
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Dev HQ</h2>
                    <h4>
                        <FiberManualRecordIcon />
                        Khushal
                    </h4>
                </SidebarInfo>
                <CreatIcon />
            </SidebarHeader>
            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Mention & reaction' />
            <SidebarOption Icon={DraftsIcon} title='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SidebarOption Icon={AddIcon} title='Add Channels' rotate />
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
color: #fff;
background-color: var(--slack-color);
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;

> hr {
margin-top: 10px;
margin-bottom: 10px;
border: 1px solid #49274b;
}
`

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;
/* justify-content: space-between; */

 >.MuiSvgIcon-root{
     padding: 8px;
     border-radius: 999px;
     background-color: white;
     color: #39274b ;
     font-size: 18px;
     margin-left: auto ;
     margin-right: 15px;
 }
`


const SidebarInfo = styled.div`
flex: 1;


 > h2{
font-size: 15px;
font-weight: 900;
margin-bottom: 5px;
}
> h4 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}
> h4 > .MuiSvgIcon-root{
    font-size: 14px ;
    margin-top:1px ;
    margin-right: 2px;
    color: green;

}
`
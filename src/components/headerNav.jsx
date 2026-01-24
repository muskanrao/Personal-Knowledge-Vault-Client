import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NoteCardItem from './notes/cardItem';
import LinkCardItem from './links/cardItem';
import IdeaCardItem from './ideas/cardItem';
import SnippetCardItem from './snippets/snippetCardItem';

function HeaderNav() {
  let [activeTab, setActiveTab] = useState("")

  function handleRefClick(event){
    const {name,value} = event.target;
    console.log("event: ",name)

    switch (name){
      case "notes":
        setActiveTab("notes")
        break
      case "links":
        setActiveTab("links")
        break
      case "ideas":
        setActiveTab("ideas")
        break
      case "snippets":
        setActiveTab("snippets")
        break
      default:
        break;
    }
  }

  return (
    <>
      <Navbar className='bg-white navbar navbar-expand-lg navbar-light'  bg="light" data-bs-theme="light">
        <div className='container-fluid'>
          <Nav className="me-auto" style={{marginLeft: "300px"}}>
            <Nav.Link style={{marginRight:"50px"}} onClick={(e) => handleRefClick(e)} value="0" name="notes" href="#notes">Notes</Nav.Link>
            <Nav.Link style={{marginRight:"50px"}} onClick={(e) => handleRefClick(e)} value="1" name="links" href="#links">Links</Nav.Link>
            <Nav.Link style={{marginRight:"50px"}} onClick={(e) =>handleRefClick(e)} value="2" name="snippets" href="#snippets">Snippets</Nav.Link>
            <Nav.Link style={{marginRight:"50px"}} onClick={(e) =>handleRefClick(e)} value="3" name="ideas" href="#ideas">Ideas</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className='content'>
        <h1>ActiveTab {activeTab}</h1>
        {activeTab === "notes"&& <NoteCardItem item={activeTab}/>}
        {activeTab === "links"&& <LinkCardItem/>}
        {activeTab === "snippets"&& <SnippetCardItem item={activeTab}/>}
        {activeTab === "ideas"&& <IdeaCardItem/>}
      </div>
    </>
  );
}

export default HeaderNav;
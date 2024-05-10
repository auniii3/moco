import Navbar from "../components/navbar";
import React from 'react'
import SideMenu from "../components/SideMenu";
import HomeContent from "../components/HomeContent";
import SideNav from "../components/SideNav";

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <SideMenu></SideMenu>
        <SideNav></SideNav>
        {/* <HomeContent></HomeContent> */}
    </div>
  )
}


export default Home
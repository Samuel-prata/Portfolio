import React from "react";

import styled from "styled-components";

const Nav = styled.nav`

    display: flex;
    justify-content: space-around;
    background-color:rgb(107, 8, 153) ;
    color: white;
    font-weight: bold;
    list-style: none;

    height: 10vh;

    #left {
        width: 20vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    #right{
        width: 30vw;
        display: flex;
        align-items: center;
        justify-content: space-around;

    }
    h1{
        color: red;
    }

`;

export default function Header() {
    return (
        <>
            <Nav>
                <div id="left">

                    <h2>SS</h2>
                    <li>
                        <ul>
                            About
                        </ul>
                    </li>
                </div>

                <li id="right">
                    <ul>Projects</ul>
                    <ul>Technologies</ul>
                    <ul>Contact</ul>
                </li>
            </Nav>
        </>
    );
}
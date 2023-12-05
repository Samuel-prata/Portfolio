import React from "react";
import styled from "styled-components";

const Principal = styled.main`

main{
    background-color: #0B0B0B;
    height: 70vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
    .phrase{
        width: 30vw;
        color: white;
        font-family: 'Bebas Neue', sans-serif;
        font-family: 'Roboto', sans-serif;
        font-family: 'Roboto Serif', serif;
    }
    .image-space{
        width: 30vw;
    }

`;

export default function Main() {
    return (
        <>
            <Principal>
                <main>
                    <img src="src/assets/Line 1line1.png" alt="" />
                    <div className="phrase">
                        <h2>Hello, i'm Samuel Silverio</h2>
                        <p>A Back-end dev that like to surfing into world of front</p>
                    </div>
                    <div className="image-space">
                        <img src="src/assets/image-space.png" alt="" />
                    </div>

                </main>

            </Principal>

        </>
    )
}
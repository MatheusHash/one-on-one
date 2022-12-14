import styled from "styled-components";

export const GridGuestLayout = styled.div`
    display: grid;
    grid-template-columns: calc(100vw - 500px) 500px;
    grid-template-rows: 100vh;

    /* height: 100vh; */
    /* width: 100vw; */
    grid-column: auto;
`
export const Space = styled.div`
    display: grid;
    width: 100%;
    background-color: #ccc;
    `
export const Content = styled.div`
    width: 100%;
    display: grid;
    background-color: purple;
`



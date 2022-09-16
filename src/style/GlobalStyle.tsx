import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        line-height: 1.5;

        p {
            margin-block-start: 0;
            margin-block-end: 0;
        }
    }
`;

export default GlobalStyle;

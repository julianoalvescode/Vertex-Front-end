import { createGlobalStyle } from 'styled-components';
import colors from './settings';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    html, body, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    body, button, a {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    a {
        text-decoration: none;

            text-decoration: none;
            color: ${colors.grey};
            transition: all 0.2s ease-in-out;

            &:hover {
                color: ${colors.primary};
          }

    }

`;

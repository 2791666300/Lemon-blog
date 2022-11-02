import { createGlobalStyle } from 'styled-components'

import Colors from './constants/Colors'

export const GlobalStyle = createGlobalStyle`
    body {
    box-sizing: border-box;
    font-family: 'Open Sans Condensed';
    }


    a{
    text-decoration: none;
    color: black;
    }

    *,
    *::after,
    *::before{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    }
    // 当选择文本时，文本背景和文本的颜色
*::selection {
    background-color: ${Colors.color_green_1};
    color: white;
}
`

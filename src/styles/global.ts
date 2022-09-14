import { createGlobalStyle } from "styled-components";

import circularStdMedium from '../fonts/CircularStd-Medium.woff'
import circularStdMediumItalic from '../fonts/CircularStd-MediumItalic.woff'
import circularStdBold from '../fonts/CircularStd-Bold.woff'
import circularStdBoldItalic from '../fonts/CircularStd-BoldItalic.woff'
import circularStdBlack from '../fonts/CircularStd-Black.woff'
import circularStdBlackItalic from '../fonts/CircularStd-BlackItalic.woff'
import circularStdBook from '../fonts/CircularStd-Book.woff'
import circularStdBookItalic from '../fonts/CircularStd-BookItalic.woff'
import poppinsThin from '../fonts/Poppins-Thin.woff'
import poppinsRegular from '../fonts/Poppins-Regular.woff'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: all ease 0.2s;
    }

    button {
        background-color: white;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    @font-face {
        font-family: 'Circular Std Medium';
        src:  url(${circularStdMedium}) format('woff');
    }

    @font-face {
        font-family: 'Circular Std Medium Italic';
        src:  url(${circularStdMediumItalic}) format('woff');
    }

    @font-face {
        font-family: 'Circular Std Bold';
        src:  url(${circularStdBold}) format('woff');
    }

    @font-face {
        font-family: 'Circular Std Bold Italic';
        src:  url(${circularStdBoldItalic}) format('woff');
    }

    @font-face {
        font-family: 'Circular Std Black';
        src:  url(${circularStdBlack}) format('woff');
    }

    @font-face {
        font-family: 'Circular Std Black Italic';
        src:  url(${circularStdBlackItalic}) format('woff');
    }

    @font-face {
        font-family: 'Circular Std Book';
        src:  url(${circularStdBook}) format('woff');
    }

    @font-face {
        font-family: 'Circular Std Book Italic';
        src:  url(${circularStdBookItalic}) format('woff');
    }

    @font-face {
        font-family: 'Poppins Thin';
        src:  url(${poppinsThin}) format('woff');
    }

    @font-face {
        font-family: 'Poppins Regular';
        src:  url(${poppinsRegular}) format('woff');
    }
`

export default globalStyle;
import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    background: ${props => props.bg ? "#DF59AA" : "#6735B8"};

    border-radius: 10px;
    width: 250px;
    height: 40px;
    font-size: 20px;
    color: #fff;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000000;
    }
`

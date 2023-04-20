import styled from '@emotion/styled';

const NavigationHeaderStyled = styled.header`
    background-color: lightblue;
    nav {
        ul {
            border-left: 1px solid black;
            margin-left: 24px;
            padding: 12px 0;
            display: flex;
            justify-content: flex-start;
            list-style: none;
            li {
                span {
                    color: #111;
                    border-right: 1px solid black;
                    padding: 12px 24px;
                    text-decoration: none;
                    transition: all .3s;
                    &:hover {
                        background-color: #70c2de;
                    }
                    &.active {
                        padding-bottom: 6px;
                        border-bottom: 6px solid #16a0ce;
                        &:hover {
                            background-color: #16a0ce;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
`;

export default NavigationHeaderStyled;
import styled from '@emotion/styled';

const NavigationHeaderStyled = styled.header`
    background-color: lightblue;
    nav {
        ul {
            border-left: 1px solid black;
            margin-left: 24px;
            padding: 4px 0;
            display: flex;
            justify-content: flex-start;
            list-style: none;
            li {
                span {
                    color: #111;
                    border-right: 1px solid black;
                    padding: 4px 24px;
                    text-decoration: none;
                    font-weight: var(--thin);
                    transition: all .3s;
                    &:hover {
                        background-color: #70c2de;
                    }
                    &.active {
                        padding-bottom: 0;
                        border-bottom: 4px solid #16a0ce;
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
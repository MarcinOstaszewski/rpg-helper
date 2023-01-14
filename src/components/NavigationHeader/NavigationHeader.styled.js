import styled from '@emotion/styled';

const NavigationHeaderStyled = styled.header`
    nav {
        ul {
            list-style: none;
            display: flex;
            justify-content: flex-start;
            padding-left: 24px;
            li {
                padding: 6px 24px;
                border-right: 1px solid black;
            }
        }
    }
`;

export default NavigationHeaderStyled;
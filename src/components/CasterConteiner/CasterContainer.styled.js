import styled from "@emotion/styled";

const StyledCasterContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 12px;

    span {
        border: 1px solid #ddd;
        padding: 6px;
        text-align: center;
    }
    
    .character-header {
        border-top: 1px solid #ccc;
        display: grid;

        &.wizard {
            grid-template-columns: 2fr 6fr 2fr 6fr;
            .highlighted {
                background-color: #abe;
                border-bottom: 3px solid #9ad;
            }
        }
        &.apprentice {
            grid-template-columns: 2fr 14fr;
        }

        .highlighted {
            color: #111;
            background-color: #bce;
            border-bottom: 3px solid #abd;
            padding-bottom: 3px;
        }

        input, select {
            width: 100%;
            text-transform: uppercase;
            font-weight: bold;
            padding: 0px 12px;
        }

        select {
            outline: none;
            border: 0;
            height: 100%;
        }
    }
    .stats-line {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
        span {
            font-weight: bold;
            display: flex;
            flex-direction: column;
        }
        .stats-field {
            border: 0;
            padding: 0;
            
            span:last-child {
                height: 20px;
            }
        }
    }
`
export default StyledCasterContainer;
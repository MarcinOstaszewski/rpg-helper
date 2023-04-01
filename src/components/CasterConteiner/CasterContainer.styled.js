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
        }
        &.apprentice {
            grid-template-columns: 2fr 6fr 8fr;
        }

        .highlighted {
            background-color: #cde;
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
    .character-stats-names {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
        span {
            font-weight: bold;
        }
    }
    .character-stats-values {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
    }
`
export default StyledCasterContainer;
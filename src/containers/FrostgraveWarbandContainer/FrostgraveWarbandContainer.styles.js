import styled from "@emotion/styled";

const StyledFrostgraveWarbandContainer = styled.main`
    padding: 24px;
    max-width: 1200px;
    h1 {
        margin: 0;
    }
    .top-container {
        display: flex;
        margin: 12px 0;
        justify-content: space-between;
        align-items: center;
        button {
            margin-right: 24px;
            padding: 12px;
            font-weight: bold;
            border-radius: 6px;
            border: 0;
            background-color: #79c3f0;
        }
    }
    .warband-cost {

    }
    .font-bold {
        font-weight: bold;
    }
    /* .character-container {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        span {
            border: 1px solid #ddd;
            padding: 6px;
            text-align: center;
        }
    }
    .character-header {
        display: grid;
        grid-template-columns: 2fr 6fr 2fr 6fr;

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
    } */
`

export default StyledFrostgraveWarbandContainer;
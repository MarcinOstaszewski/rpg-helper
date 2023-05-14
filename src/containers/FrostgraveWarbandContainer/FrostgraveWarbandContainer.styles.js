import styled from "@emotion/styled";

const StyledFrostgraveWarbandContainer = styled.main`
    padding: 6px;
    max-width: 1000px;
    overflow: auto;
    
    header, main {
        font-size: .75rem;
        margin: 0;
        width: 100%;
    }

    .top-container {
        &-header {
            font-size: 1.2rem;
            font-weight: var(--bold);
        }
        main {
            display: flex;
            margin: 12px 0;
            justify-content: space-between;
            align-items: center;
            font-weight: var(--bold);

            .add-soldier {
                padding: 6px 12px;
                font-size: 1em;
                border-radius: 6px;
                border: 0;
                background-color: #79c3f0;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                svg {
                    margin-right: 8px;
                    font-size: 1.2rem;
                }
            }
            .warband-cost {
                .text-danger {
                    color: #d22;
                }
            }
        }
    }

    @media only screen and (min-width: 600px) {
        padding: 24px;

        header, main {
            font-size: 1rem;
        }
        .add-soldier, 
        .add-soldier svg {
            font-size: 1.2em;
        }
    }
`

export default StyledFrostgraveWarbandContainer;

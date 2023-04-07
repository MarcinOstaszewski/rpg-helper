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
        .add-soldier {
            margin-right: 24px;
            padding: 12px;
            font-weight: 700;
            border-radius: 6px;
            border: 0;
            background-color: #79c3f0;

            svg {
                width: 20px;
                height: 20px;
                margin-right: 12px;
                margin-bottom: -4px;
            }
        }
        .wizards-gold {
            font-weight: 700;
        }
        .warband-cost {
            font-weight: 700;

            .text-danger {
                color: #d22;
            }
        }
    }

    .font-bold {
        font-weight: 700;
    }
`

export default StyledFrostgraveWarbandContainer;
import styled from "@emotion/styled";

const StyledFrostgraveWarbandContainer = styled.main`
    padding: 24px;
    max-width: 1000px;
    
    header, main {
        margin: 0;
        width: 100%;
    }

    .top-container {
        &-header {
            font-size: 20px;
        }
        main {
            display: flex;
            margin: 12px 0;
            justify-content: space-between;
            align-items: center;

            .add-soldier {
                padding: 6px 24px;
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
    }

    .font-bold {
        font-weight: 700;
    }
`

export default StyledFrostgraveWarbandContainer;
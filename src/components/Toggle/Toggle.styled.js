import styled from "@emotion/styled";

const StyledToggle = styled.div`
    display: flex;
    align-items: center;

    .label {
        display: inline-block;
        position: relative;
        width: 43px;
        height: 24px;
        margin-right: 100px;
        
        .toggle-checkbox {
            height: 0;
            width: 0;
            display: inline-block;

            &:checked + .toggle {
                background-color: #b32;
                &::before {
                    left: 20px;
                }
            }
        }
        .toggle {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #4da2ff;
            transition: .3s;
            border-radius: 24px;

            &::before {
                content: '';
                position: absolute;
                height: 22px;
                width: 22px;
                background-color: #fff;
                border-radius: 50%;
                left: 1px;
                bottom: 1px;
                transition: .3s;
            }
        }
        .label-text {
            position: absolute;
            left: 100%;
            width: max-content;
            line-height: 32px;
            cursor: pointer;
            line-height: 24px;
            font-size: 20px;
            font-weight: 700;
            padding-left: 12px;
        }
    }
`;

export default StyledToggle;
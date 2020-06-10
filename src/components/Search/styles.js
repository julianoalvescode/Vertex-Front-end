import styled from 'styled-components';
import { Form, Input, ErrorMessage, Search } from '~/styles/components';

export const Container = styled.div`
    ${Search}

    form {
        ${Form}

        input {
            ${Input}
        }

        span {
            ${ErrorMessage}
        }
    }
`;

export const FormMain = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 15px;
    justify-content: center;
    align-items: center;
`;

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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

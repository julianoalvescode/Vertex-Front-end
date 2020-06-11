import { css } from 'styled-components';
import { darken } from 'polished';
import colors from './settings';

export const Link = css`
    cursor: pointer;
    display: flex;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
    }
`;

export const Search = css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    flex-wrap: wrap;

    .FormikForm {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const Form = css`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;
`;

export const Button = css`
    -webkit-appearance: none;
    background-color: ${colors.primary};
    border: none;
    cursor: pointer;
    padding: 10px 14px;
    border-radius: 30px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, auto);
    gap: 3px;
    justify-content: center;
    color: #ffff;
    transition: all 0.2s ease-in;

    &:hover {
        background-color: ${darken(0.08, colors.primary)};
    }
`;

export const Input = css`
    padding: 10px 14px;
    border: none;
    background-color: ${colors.input};
    border-radius: 30px;
    color: ${colors.primary};
    font-weight: 500;

    &::placeholder {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        color: ${colors.primary};
    }
`;

export const ErrorMessage = css`
    color: ${colors.primary};
    height: 30px;
    padding: 20px 2px;
`;

export const Dashboard = css`
    width: 100%;
`;

export const ListVideos = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minMax(200px, auto));
    margin-top: 20px;
    justify-content: center;
    gap: 20px;
    margin-bottom: 5.25rem;

    img {
        width: 100%;
    }
`;

export const Video = css`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:empty {
        background-color: red;
    }

    .title {
        color: ${colors.black};
        font-size: 18px;
        margin-top: 7px;
    }

    .description {
        color: ${colors.grey};
        font-weight: 400;
        margin-top: 6px;
        font-size: 12px;
        width: auto;
    }

    button {
        background: none;
        border: none;
        margin-top: 10px;
        cursor: pointer;
        color: ${colors.grey};
        transition: all 0.2s ease-in;
        font-weight: 500;

        &:hover {
            color: ${darken(0.5, colors.grey)};
        }
    }

    img {
        width: 100%;
    }
`;

export const WithoutInfo = css`
    font-size: 16px;
    font-weight: 400;
    color: ${colors.primary};
`;

export const EmbedContainer = css`
    width: 100%;
`;

export const Embed = css`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    .back {
        margin: 10px 0;
        margin-bottom: 25px;
        a {
            display: flex;
            align-items: center;
        }
    }

    .iframe-container {
        width: 100%;
        display: grid;
    }

    .iframe-title {
        color: ${colors.black};
        font-size: 32px;
        margin-top: 16px;
        width: 100%;

        @media (max-width: 1024px) {
            font-size: 22px;
        }
    }

    .iframe-info {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        align-items: center;
        flex-wrap: wrap;
    }

    .iframe-buttons {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 7px 8px;
            background: none;
            border: none;
            cursor: pointer;
            color: ${colors.grey};
        }
    }

    .iframe-vizu {
        color: ${colors.grey};
        font-weight: 400;

        /* Responsive Font-size View */

        @media (max-width: 1024px) {
            font-size: 15px;
        }
    }

    .iframe-description {
        width: 100%;
        margin-top: 28px;
        p {
            width: 100%;
            word-break: break-word;
            white-space: pre-wrap;

            @media (max-width: 1024px) {
                font-size: 0.9rem;
            }
        }
    }

    iframe {
        border: none;
        height: 720px;
        width: 100%;

        @media (max-width: 1620px) {
            height: 480px;
        }

        @media (max-width: 477px) {
            height: 200px;
        }
    }
`;

export const LoadScreen = css`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 80px;
    }
`;

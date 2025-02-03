import style from "styled-components";
import { Header } from "../../../style";

export const ResumeContainer = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    `;

export const ResumeHeader = style(Header)`
    margin-bottom: 1rem;`;

import styled from "styled-components";

export const VisitsContainer = styled.section`
    width: 100%;
    margin-top: 70px;
    overflow: scroll;
`;

export const VisitsWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1`
    font-size: 1.8rem;
`;

export const Table = styled.table`
    box-shadow: 0 0 1px 1px #777;
    max-width: 1180px;
    overflow: scroll;
    margin-top: 15px;
`;

export const THead = styled.thead`
    color: #fff;
    background: #6b2a00;
    letter-spacing: 0.1rem;
`;

export const TR = styled.tr`

`;

export const TH = styled.th`
    padding: 0.4rem 0.8rem;
`;

export const Tbody = styled.tbody`
    background: #eee;
`;

export const TD = styled.td`
    padding: 0.4rem 0.8rem;
`;
import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Container = styled.div` 
    display: flex;
    height: 82rem;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    

`

export const BoxOne = styled.div`
    width: 100%;
    height: 9rem;
    border-bottom: 6px solid ${Theme.SECTION_BG};
    flex-direction: row;
    padding: 2rem 2.6rem;
    display: flex;
    position: relative;
    
`

export const ButtonContainer = styled.div`
    position: absolute;
    left: 27.6rem;
`

export const UserName = styled.strong`
    font-family: 'LINESeedKR-Bd';
    font-size: 1.4rem;
    line-height: 1.9rem;
    
`

export const UserEmail = styled.p`
    color: #646464;
    font-size: 1.2rem;
`

export const BoxTwo = styled.div`
    width: 100%;
    height: 61.9rem;
    display: flex;
    flex-direction: row;
    position: relative;
    padding-left: 2rem;
    
`

export const MyPageLists = styled.ul`
    position: absolute;
    width: 100%;

    
`

export const MyPageList = styled.li`
    border-bottom: 1px solid ${Theme.SHADOW_BORDER};
    height: 6.1rem;
    font-size: 1.4rem;
    font-family: 'LINESeedKR-Bd';
    line-height: 1.9rem;
    padding-top: 2rem;
    padding-bottom: 2.2rem;
`

export const WebVersion = styled.p`
    font-family: 'LINESeedKR-Bd';
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${Theme.BORDER};
    position: absolute;
    left: 33.4rem;
    top: 2.2rem;
`

export const Deactivate = styled.li`
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-decoration-line: underline;
    padding-top: 1.2rem;
`

    





import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
`;

export const Skill = styled.div`
    background: ${(props) => props.color || 'white'}; 
    border-radius: 10px;
    color: black; 
    padding: 5px 10px; 
    margin-right: 10px; 
`;

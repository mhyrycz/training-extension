import styled from 'styled-components';

export const GLOBAL_STYLES = {
  buttonBackground: '#FF6CAB',
  fontColor: 'white'
}

interface AppWrapperProps {
  isCorrectPage: boolean;
}

export const AppWrapper = styled.div<AppWrapperProps>`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.isCorrectPage ? 'flex-start' : 'center'};
  height: 100vh;
  font-size: 1rem;
  color: ${GLOBAL_STYLES.fontColor};
  background-image: linear-gradient(to bottom right, #B65EBA, #2E8DE1);
`;

export const SelectWithLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.div`
  padding-right: 16px;
  padding-left: 16px;
`;

export const DefineTraining = styled.div`
  display: flex;
  flex-direction: row;
`;
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
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Label = styled.div`
  padding-right: 16px;
  padding-left: 16px;
`;

export const Header = styled.div`
  border-bottom: 1px solid white;
  font-size: 1.5rem;
  text-align: start;
  margin-top: 16px;
`;

export const MaxWidth = styled.div`
  width: calc(100% - 32px);
`;

export const TrainingSeriesWrapper = styled(MaxWidth)`
  height: 30%;
`;

export const SpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
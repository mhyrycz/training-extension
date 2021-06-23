import styled from 'styled-components';

export const GLOBAL_STYLES = {
  buttonBackground: '#FF6CAB',
  fontColor: 'white'
}

export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  font-size: 1rem;
  color: ${GLOBAL_STYLES.fontColor};
  background-image: linear-gradient(to bottom right, #B65EBA, #2E8DE1);
`;
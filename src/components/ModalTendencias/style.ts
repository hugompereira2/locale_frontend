import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(29, 49, 65, 0.8);
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 1.2rem;
  z-index: 1031;
`;
StyledModal.displayName = 'StyledModal';

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50vw;
  height: 93vh;
  border-radius: 20px;

  div {
      display: flex;
      flex-direction: column;
      width: 50vw;
  }

  div > h1 {
    text-align: center;
    width: 50vw;
    margin: 20px auto;
    padding-bottom: 10px;
    border-bottom: 1.5px solid #00000029;
  }

  svg {
    float: right;
    margin-top: -5px;
    margin-right: 5px;
  }

   ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: initial;
      margin: 0px auto;
  }

  li {
      margin: 10px 0px;
  }
`;
Container.displayName = 'Container';
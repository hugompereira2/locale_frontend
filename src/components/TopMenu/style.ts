import styled from 'styled-components';

export const Container = styled.nav`
  background: #2E5A76 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 10px 10px;

  div {
    height: 88px;
    max-width: 1366px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    
  }

  header {
    background: var(--wht) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 40px #A6ADC933;
    border-radius: 0px 0px 10px 10px;
  }

  section {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 23px;
    height: 23px;
    margin-right: 14px;
  }

  section > img:last-child {
    margin-left: 8px;
    width: 15px;
    height: 15px;
  }

  ul {
    max-width: 1366px;
    height: 66px;
    display: flex;
    justify-content: space-between;
    background: white;
    list-style: none;
    align-items: center;
    margin: 0px auto;
  }

  li {
    font-weight: 500;
    font-size: 14px;
    color: #2E5A76;
    display: flex;
    transition: ease-in-out;

    &:hover{
      border-bottom: #365B73 solid 2px;
    }
  }

  li:nth-child(6) {
    color: var(--gry-1);
  }

  li > img {
    opacity: 0.2;
  }

  li:nth-child(2) {
    font: normal normal bold 14px/22px Montserrat;
    border-bottom: #2E5A76 solid 2px;
  }

  p {
    font-size: 14px;
    font-weight: 500px;
    color: var(--wht);
  }
`


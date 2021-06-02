import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1366px;
    margin: 48.5px auto 0px;

    section {
        margin: auto;
        height: 150px;
      
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 48px 30px;
    }

    section > div {
        background: var(--wht) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 15px 40px #A6ADC933;
        border-radius: 10px;
        opacity: 1;
        }
    
    
    img {
        width:100%;
        height:80%;
        border-radius: 10px 10px 0px 0px;
    }

    h1 {
        color: var(--txt-1);
        text-align: left;
        letter-spacing: 0px;
        color: #121A25;
        opacity: 1;
        font-size: 22px;
        margin-bottom: 8.5px;
    }

    p {
        font-size: 14px;
        color: var(--txt-1);
        text-align: left;
        line-height: 22px;
        color: #121A25;
        margin-bottom: 24px;
        width:38%;
    }

    label {
        color: var(--txt-1);
        font: normal normal 600 14px/18px Montserrat;
        letter-spacing: 0px;
        color: #121A25;
        opacity: 1;
        margin-left: 15px;
    }
`
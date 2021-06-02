import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`

  :root {
      --wpp: #25D366;
      --wht: #FFFFFF;
      --txt-1: #121A25;
      --txt-2: #242F3E;
      --txt-3: #3F4F64;
      --blu-1: #365B73;
      --blu-2: #5A7F93;
      --blu-3: #7AA0B4;
      --crl1: #D7555B;
      --crl-2: #E67C84;
      --crl-3: #EFA2A8;
      --gry-1: #AFBCCA;
      --gry-2: #CBD4DE;
      --gry-3: #E7ECF1;
      --pst-1: #F4F7FA;
      --pst-2: #FCEEEF;
      --ylw: #EBB040;
      --grn: #5AB984;
  }

  html {
      // font-size: 1rem = 16px;
      @media(max-width: 1080px) {
        font-size: 93.75%; //15px
      }
      @media(max-width: 720px) {
        font-size: 87.5%; //14px
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

  * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
  }

  svg ,li ,img {
    cursor: pointer;
  }


`
import styled from 'styled-components';

export const Container = styled.main`
    max-width: 1366px;
    margin: 48.5px auto 0px;
    padding: 0px 40px;

    > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;    
        height: 250px;
        margin-bottom: 50px;

        img {
        display: flex;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.4;
        margin: 0px 10px auto;

        @media (max-width: 740px) {
            width: 100vw;
        }

    }

        p {
        position: absolute;
        font: normal normal bold 34px/45px Montserrat;
        color: var(--blu-1);

        @media (max-width: 700px) {
            font-size: 25px;
            margin: 0px auto;
            text-align: center;
        }

        }

    }

    > section {
            display: flex;
            justify-content: start;
            align-items: center;
            margin-bottom: 40px;

            p {
            color: var(--txt-3);
            font: normal normal bold 14px/22px Montserrat;
            }
        }

    h1 {
        color: var(--txt-1);
        text-align: left;
        letter-spacing: 0px;
        font-size: 22px;
        margin-bottom: 8.5px;
    }

    > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;      
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(255px, 255px));
        grid-gap: 30px;
        margin-bottom: 20px;

        > div {
            background: var(--wht) 0% 0% no-repeat padding-box;
            box-shadow: 0px 15px 40px #A6ADC933;
            border-radius: 10px;
        }

        div > label:first-child {
                margin-left: 25px;
                color: var(--txt-1);
                font: normal normal 600 16px/24px Montserrat;
            }
        
        div > label {
                margin-left: 25px;
                color: var(--txt-1);
                font: normal normal 600 14px/18px Montserrat;
            }

        div > small {
            margin-left: 25px;
            display: block;
            margin-top: 5px;
            font: normal normal normal 14px/26px Montserrat;
            color: #111926;
        }


        div > section:first-child {
            display: flex;
            justify-content: start;
            align-items: center;
            margin-left: 25px;
            padding: 20px 0px;

            img {
                width: 25px;
                height: 25px;
                object-fit: cover;
                margin-right: 15px;
            }
        }

        div > section:last-child {
            display: flex;
            margin-top: 20px;
        }

        div > section:last-child {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            p:first-child {

                svg {
                    align-self: center;
                    margin: 0px 10px;
                }
                color: var(--txt-3);
                width: 40%;
                display: flex;
                padding: 14px 0px;
                font-size: 13px;
                font-weight: 500;
                border-top: 1.5px solid #DCDCDC;
            }
            p:last-child {

                svg {
                    align-self: center;
                    margin: 0px 10px;
                }
                color: var(--wht);
                width: 60%;
                display: flex;
                font-size: 12px;
                padding: 14px 0px;
                background: #2E5A76 0% 0% no-repeat padding-box;
                border-radius: 0px 0px 10px 0px;
            }
        }

        > section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: var(--wht) 0% 0% no-repeat padding-box;
            box-shadow: 0px 15px 40px #A6ADC933;
            border-radius: 10px;
        }

        div > img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            margin-bottom: 10px;
        }
    }
`
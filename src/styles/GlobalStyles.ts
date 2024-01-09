import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body {
        font-family: 'Montserrat', sans-serif;
    }

    body {
        font-size: calc(60% + .8vmin);
        background: #fff;
    }

    .css-o4b71y-MuiAccordionSummary-content {
      
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
    }


    #btn-steps {
      text-decoration: none;
      padding: 0.5rem 2rem;
      background: #053;
      color: #EEE;
      cursor: pointer;
      border-radius: 4px;

      transition: .5s ease;

      &:hover {
         opacity: 0.79;
      }
    }
`;

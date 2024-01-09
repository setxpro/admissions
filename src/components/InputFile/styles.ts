import styled from "styled-components";

export const Container = styled.div`
   #area-inpt {
      height: 100px;
      width: 100%;
      border: dashed 3px #053;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;

      transition: all 0.5s ease;

      &:hover {
         background: rgba(12, 93, 60, 0.2);
      }

      input {
         opacity: 0;
         height: inherit;
         width: inherit;
         position: absolute;
         cursor: pointer;
      }

      #field-file {
         background: red;
      }

      #box {
         height: 40px;
         border: 2px solid rgb(12, 93, 60);
         background: rgba(12, 93, 60, 0.2);
         border-radius: 4px;

         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 0 3px;

         p {
            color: #053;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
               sans-serif;
         }
      }
   }

   #content {
      height: 40px;
   }
`;

export const ContentAreaInput = styled.div`
   height: 100px;
   width: 100%;
   border: dashed 3px #053;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   flex-direction: column;

   transition: all 0.5s ease;

   &:hover {
      background: rgba(12, 93, 60, 0.2);
   }

   input {
      opacity: 0;
      height: inherit;
      width: inherit;
      position: absolute;
      cursor: pointer;
   }

   #field-file {
      background: red;
   }

  
`;

export const ContentFormArea = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;

   #box {
      height: 40px;
      border: 2px solid rgb(12, 93, 60);
      background: rgba(12, 93, 60, 0.2);
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3px;

      p {
         color: #053;
         font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
      }
   }
`;

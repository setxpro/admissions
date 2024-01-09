import styled from 'styled-components';

export const Container = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, .9);

   display: flex;
   justify-content: center;
   align-items: center;
`;
export const UserModalContainer = styled.div`
   display: flex;
   flex-direction: column;
   background: #EEE;
   width: 98%;
   height: calc(100vh - 100px);
`;
export const UserModalHeaderContainer = styled.div`
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 10px;

   h1 {
      font-weight: 400;
   }

   button {
      padding: 10px;
      background: #AAA;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: .5s ease;

      &:hover {
         opacity: 0.88;
      }
   }

   border-bottom: 1px solid #5555;
`;
export const UserModalMiddleContainer = styled.div`
   flex: 1;
   background: #AAAA;
`;
export const UserModalFooterContainer = styled.div`
   height: 70px;
   background: #DDDD;
`;

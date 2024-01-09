import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #FFF;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;


  button {
   padding: 0.8rem;
   cursor: pointer;
   border: none;
   border-radius: .5rem;
   background: #005041;
   color: #DDD;
   font-size: 1.5em;

   transition: 0.5s ease;

   &:hover {
      opacity: 0.88;
   }
}


`;

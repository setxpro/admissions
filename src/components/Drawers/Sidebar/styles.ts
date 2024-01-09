import styled from 'styled-components';

import { HiMiniBars3BottomRight, HiOutlineHome } from 'react-icons/hi2'
import { TbUsersPlus, TbUsers } from 'react-icons/tb'

export const CloseIcon = styled(HiMiniBars3BottomRight)`
   color: #DDD;
   font-size: 2em;
`;
export const UsersIcon = styled(TbUsers)`
   color: #DDD;
   font-size: 1.2em;
`;
export const HomeIcon = styled(HiOutlineHome)`
   color: #DDD;
   font-size: 1.2em;
`;

export const CreateUserIcon = styled(TbUsersPlus)`
   color: #DDD;
   font-size: 1.2em;
`;

export const Container = styled.div`
  
`;
export const SidebarContent = styled.div<{isWrapperSidebar: boolean}>`
   transition: 0.5s ease;
   width: ${props => props.isWrapperSidebar ? '245px' : '0px'};
   overflow: hidden;
   position: fixed;
   left: 0;
   top: 0;
   bottom: 0;
   background: #272b33;
   z-index: 100;

   display: flex;
   flex-direction: column;
`;

export const ShadowContent = styled.div<{isWrapperSidebar: boolean}>`
   position: fixed;
   left: 0;
   top: 0;
   bottom: 0;
   right: 0;
   background: rgba(0, 0, 0, 0.5);
   display: ${props => props.isWrapperSidebar ? 'block' : 'none'};
   z-index: 99;
`;



export const SidebarHeaderMenu = styled.div`
   height: 70px;
   border-bottom: 1px solid #5555;

   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 10px;

   h2 {
      font-size: 1.7em;
      font-weight: 400;
      color: #DDD;
   }

   button {
      background: transparent;
      border: none;
      cursor: pointer;
   }
`;
export const SidebarMiddleMenu = styled.div`
   flex: 1;

   display: flex;
   flex-direction: column;


   a {
      padding: .5rem 5px;
      color: #DDD;
      text-decoration: none;
      font-size: 1.1em;
      white-space: nowrap;

      transition: .5s ease;

      display: flex;
      align-items: center;
      gap: 1rem;

      &:hover {
      background: #5555;

      }

   }
`;


export const SidebarFooterMenu = styled.div`
   height: 50px;
   border-top: 1px solid #5555;

   display: flex;
   align-items: center;
   justify-content: center;

   button {
      background: gray;
      padding: 5px;
      border: none;
      border-radius: 8px;

      transition: .5s ease;

      cursor: pointer;

      &:hover {
         opacity: 0.78;
      }
   }
`;
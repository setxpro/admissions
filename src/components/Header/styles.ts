import styled from "styled-components";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

export const Container = styled.div`
   display: flex;
   height: 70px;
   background-color: #005041;
   padding: 0px 10px;
`;
export const LeftSide = styled.div`
   flex: 1;
   height: inherit;
   display: flex;
   align-items: flex-start;
   .icon{
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      button{
         background-color: transparent;
         border: 0;
         cursor: pointer;
      }
   }
`;

export const RigthSide = styled.div`
   flex: 1;
   height: inherit;
`;

export const ContentRigthAvatarAndName = styled.div`
   display: flex;
   gap: 5px;
   justify-content: flex-end;
`;

export const ContentRigthName = styled.div`
   height: 70px;
   display: flex;
   justify-content: center;
   flex-direction: column;
   h6 {
      text-align: end;
      color: #ddd;
      text-transform: capitalize;
   }
   h3 {
      color: #ddd;
      font-weight: 400;
   }
`;

export const ContentRigthAvatar = styled.div`
   display: flex;
   align-items: center;
   height: 70px;
   img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      border: 3px solid #fff;
      padding: 3px;
   }
`;

export const BarsIcon = styled(HiMiniBars3BottomLeft)`
   color: #ddd;
   font-size: 2em;
`;
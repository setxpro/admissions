import styled from "styled-components";

import { FiEdit, FiTrash } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";


export const Container = styled.div`
   height: calc(100vh - 70px);
   background-color: #fff;
   padding: 10px;
`;

export const EditIcon = styled(FiEdit)`
   font-size: 1.4em;
   color: #555;
   cursor: pointer;
`;
export const TrashIcon = styled(FiTrash)`
   font-size: 1.4em;
   color: #555;
   cursor: pointer;
`;

export const SearchIcon = styled(BiSearch)`
   font-size: 1.5em;
   color: #555;
   cursor: pointer;
`;

export const TableContent = styled.div`
   table {
      width: 100%;

      thead {
         tr {
            th {
               background: #555;
               color: #ddd;
               font-weight: 500;
               padding: 0.5rem;
            }

            
         }
      }

      tbody {
         tr {
            td {
               padding: 4px;

               &:nth-child(1),
               &:nth-child(5),
               &:nth-child(6),
               &:nth-child(7)
                {
                  text-align: center;
               }

               &:nth-child(4) {
                  p {
                     background: rgba(255, 255, 10, 0.3);
                     padding: 5px;
                     border-radius: 10px;
                     color: rgba(102, 102, 0, 1);
                     text-align: center;
                  }
               }
               a {
                  font-size: 1.1em;
                  color: #44dd;
                  
               }
               
            }

            &:nth-child(even) {
               background: #5555;
            }

         }
         
      }
   }
`;


export const InputSearchArea = styled.div`
      width: 38%;
      border: 1px solid #555;
      display: flex;
      align-items: center;
      border-radius: 10px;
      padding: 0 10px;
  input {
   width: 100%;
   border: none;
      font-size: 1.2em;
      color: #444;
      outline: none;
      background: transparent;
      padding: 10px;

   }
`;


export const ContentAvatarArea = styled.div`
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: space-between;

   #addCandidate {
      padding: 10px 1.5rem;
      border: 0;
      border-radius: 4px;
      background-color: #053;
      font-size: 1.2em;
      color: #DDD;
      cursor: pointer;
   }
 
`;
import { EditIcon, TrashIcon } from "../styles";
import { Link } from "react-router-dom";
import { User } from "../../../@types/User";

// import { Container } from './styles';

interface Props {
   candidates: User[];
}

const TBody = ({ candidates }: Props) => {
   return (
      <>
         {candidates.map((item: any, indice: number) => (
            <tr key={item._id}>
               <td>{indice + 1}</td>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>
                  <p>{item.status ? 'Concluído' : 'Em andamento'}</p>
               </td>
               <td>
                  <EditIcon />
               </td>
               <td>
                  <Link to={`${item._id}`}><EditIcon /></Link>
               </td>
               <td>
                  <TrashIcon />
               </td>
            </tr>
         ))}
      </>
   );
};

export default TBody;

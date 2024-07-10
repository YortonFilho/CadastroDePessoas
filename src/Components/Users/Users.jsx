import style from './Users.module.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

export function Users({ id, name, email, level}){
    return(
        <>
            <tbody>
                    <tr>
                        <td><Link to='/usuario' className={style.nameList}><button>{name}</button></Link></td>
                        <td>{email}</td>
                        <td>{level}</td>
                        <td className={style.icons}>
                            <button><EditOutlinedIcon sx={{ color: "#065D2F", fontSize: 28 }}/></button>
                            <button><DeleteOutlineOutlinedIcon sx={{ color: "red", fontSize: 28 }}/></button>
                        </td>
                    </tr>
            </tbody>
        </>
    )
}
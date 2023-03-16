import { Aside } from "../../components/aside";
import { TableUsers } from "../../components/tableUsers";

export function GeneralAdmin() {
    return(
        <div className="">
            <Aside />
            <TableUsers className='pl-64' />
        </div>
    )
}
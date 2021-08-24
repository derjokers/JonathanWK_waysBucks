import { Table, Button } from "react-bootstrap";
import NavbarAdmin from "../Components/NavbarAdmin";


import '../Styles/Admin.css'

export default function Admin(props) {
    return (
        <div className="admin">
            <NavbarAdmin />
            <div className="adminTransaction">
                <h2>Income Transaction</h2>
                <Table className='mt-4' bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>Income</th>
                            <th>Status</th>
                            <th className="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>1</td>
                            <td>Sugeng No Pants</td>
                            <td>Cileungsi</td>
                            <td>16820</td>
                            <td>69.000</td>
                            <td>Waiting Approve</td>
                            <td className='d-flex justify-content-evenly'>
                                <Button variant='danger' size='sm'>
                                    Cancel
                                </Button>
                                <Button variant='success' size='sm'>
                                    Approve
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
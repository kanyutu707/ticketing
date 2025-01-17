import './AllTickets.css'
const AllTickets = ({ifUser="USER"}:{ifUser:string}) => {
  return (
    <div className="alltickets check">
        <table>
            <caption><span>ALL TICKETS</span> {ifUser==="USER"?(<button>RAISE A TICKET</button>):(<></>)}</caption>
            <thead>
                <th>ID</th>
                <th>TICKET ID</th>
                <th>TICKET OWNER</th>
                <th>DEPARTMENT</th>
                <th>DATE RAISED</th>
                <th>STATUS</th>
            </thead>
            <tbody>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
                <tr title="click to view ticket">
                    <td>1</td>
                    <td>fewddjd#ewwr</td>
                    <td>James Oloo</td>
                    <td>Finance</td>
                    <td>15/4/2020</td>
                    <td>Pending</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AllTickets
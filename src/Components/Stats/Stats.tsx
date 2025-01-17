import { TiTicket } from 'react-icons/ti'
import './Stats.css'
import { MdDone, MdPending } from 'react-icons/md'
import { RiEjectFill } from 'react-icons/ri'

const Stats = ({first, second, third,fourth, number1, number2, number3, number4}:{first:string, second:string, third:string, fourth:string, number1:number, number2:number, number3:number, number4:number}) => {
  return (
    <div className="statscontainer">
      <section>
        <span className="left">
          <h3>{first}</h3>
          <h4>{number1}</h4>
        </span>
        <span className="right">
          <TiTicket/>
        </span>
      </section>
      <section>
        <span className="left">
          <h3>{second}</h3>
          <h4>{number2}</h4>
        </span>
        <span className="right">
          <MdDone/>
        </span>
      </section>
      <section>
        <span className="left">
          <h3>{third}</h3>
          <h4>{number3}</h4>
        </span>
        <span className="right">
          <MdPending/>
        </span>
      </section>
      <section>
        <span className="left">
          <h3>{fourth}</h3>
          <h4>{number4}</h4>
        </span>
        <span className="right">
          <RiEjectFill/>
        </span>
      </section>
    </div>
  )
}

export default Stats
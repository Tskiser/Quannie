import { useState } from 'react'
import '../styles/createContract.scss'
import {
  BsFillPersonFill,
  BsFillCalendarEventFill,
  BsCashStack,
  BsCalendar2DateFill,
} from 'react-icons/bs'

const GMale = 'male'
const GFemale = 'female'
const CreateContract = () => {
  const [contract, setContract] = useState({
    code: '',
    beginDate: '',
    endDate: '',
    priceContract: '',
    FPF: '',
    SPF: '',
    FPFDate: '',
    SPFDate: '',
    contractDate: '',
  })

  return (
    <div>
      <div className="container-create-contract">
        <div className="main-create-contract">
          <h1>Create Contract</h1>
          <div className="Profile">
            <div className="flex-container-profile">
              <div className="left-profile flex-profile">
                <h4>
                  <BsFillPersonFill className="icon" /> Name{' '}
                  <input
                    placeholder="Enter Name"
                    value={contract.name}
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        name: e.target.value,
                      })
                    }}
                  />
                </h4>
                <h4>
                  <BsFillCalendarEventFill className="icon" /> Begin Date{' '}
                  <input
                    type="date"
                    placeholder="Enter begin date"
                    value={contract.beginDate}
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        beginDate: e.target.value,
                      })
                    }}
                  />
                </h4>
                <h4>
                  <BsFillCalendarEventFill className="icon" /> End Date{' '}
                  <input
                    type="date"
                    value={contract.endDate}
                    placeholder="Enter end date"
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        endDate: e.target.value,
                      })
                    }}
                  />
                </h4>
                <h4>
                  <BsCashStack lassName="icon" /> Price Contract {' '}
                  <input
                    type="text"
                    placeholder="Enter price contract"
                    value={contract.priceContract}
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        priceContract: parseFloat(e.target.value),
                      })
                    }}
                  />
                </h4>
                <h4>
                  <BsCashStack className="icon" /> First Payment Fee{' '}
                  <input
                    type="text"
                    placeholder="Enter First Payment Fee"
                    value={contract.FPF}
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        FPF: parseFloat(e.target.value),
                      })
                    }}
                  />
                </h4>
              </div>
              <div className="left-profile flex-profile">
                <h4>
                  <BsCashStack className="icon" /> Second Payment Fee{' '}
                  <input
                    type="text"
                    placeholder="Enter Second Payment Fee"
                    value={contract.SPF}
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        SPF: parseFloat(e.target.value),
                      })
                    }}
                  />
                </h4>
                <h4>
                  <BsCalendar2DateFill className="icon" /> FPF Date{' '}
                  <input
                    type="date"
                    value={contract.FPFDate}
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        FPFDate: e.target.value,
                      })
                    }}
                  />
                </h4>
                <h4>
                  <BsCalendar2DateFill className="icon" /> SPF Date{' '}
                  <input
                    type="date"
                    placeholder="enter email"
                    value={contract.SPFDate}
                    onChange={(e) => {
                      setContract({
                        ...contract,
                        SPFDate: e.target.value,
                      })
                    }}
                  />
                  <h4>
                    <BsCalendar2DateFill className="icon" /> Contract Date{' '}
                    <input
                      type="date"
                      placeholder="enter email"
                      value={contract.contractDate}
                      onChange={(e) => {
                        setContract({
                          ...contract,
                          contractDate: e.target.value,
                        })
                      }}
                    />
                  </h4>
                </h4>
              </div>
            </div>
          </div>

          <div className="btn-create-contract">
            <button>Create</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreateContract

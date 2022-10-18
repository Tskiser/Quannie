import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/contractDetail.scss';
function ContractDetail(props) {
  const [contractCode, setContracCode] = useState('');
  const [detailContract, setDetailContract] = useState({
    BeginDate: '',
    EndDate:'',
    FPF:'',
    SPF:'',
    FPD:'',
    SPD:'',
    ContractDate:'',
  })
  const handleSetBeginDate=(e)=>{
    const beginDate =e.target.value;
    setDetailContract({
      ...detailContract,
      BeginDate: beginDate}
    )
  }
  console.log(detailContract);
  return (
    <React.Fragment>
      <div className="container-contract-detail">
        <div className="main">
        <h1 className="title-c-detail">Contract Detail</h1>
          <div className="body-container">
            <div className="left-body">
              <h4>Code</h4>
              <input value={contractCode} onChange={(e)=>setContracCode(e.target.value)}/>
              <h4>Begin Date</h4>
              <input type="date" value={detailContract.BeginDate}  onChange={(e)=>setDetailContract({ ...detailContract,BeginDate: e.target.value} )}/>
              <h4>End Date</h4>
              <input type="date"  value={detailContract.EndDate}  onChange={(e)=>setDetailContract({ ...detailContract,EndDate: e.target.value} )}/>
              <h4>First Payment Fees</h4>
              <input  placeholder="First Payment Fees" value={detailContract.FPF}  onChange={(e)=>setDetailContract({ ...detailContract,FPF: e.target.value} )}/>
              <h4>Second Payment Fees</h4>
              <input  placeholder="Second Payment Fees" value={detailContract.SPF}  onChange={(e)=>setDetailContract({ ...detailContract,SPF: e.target.value} )}/>
            </div>
            <div className="right-body">
              <h4>First Payment Date</h4>
              <input type="date"  value={detailContract.FPD}  onChange={(e)=>setDetailContract({ ...detailContract,FPD: e.target.value} )}/>
              <h4>Second Payment Date</h4>
              <input type="date"  value={detailContract.SPD}  onChange={(e)=>setDetailContract({ ...detailContract,SPD: e.target.value} )}/>
              <h4>Contract Date</h4>
              <input type="date"  value={detailContract.ContractDate}  onChange={(e)=>setDetailContract({ ...detailContract,ContractDate: e.target.value} )}/>
            </div>
          </div>
        </div>
        <div className="btn-contract-detail">
        <button>Create</button>
        <button>Cancel</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContractDetail;

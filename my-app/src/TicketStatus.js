// import React, {useState} from 'react'
import "./TicketStatus.css"
import { ticketData } from "./data";

export const TicketStatus = () => {
    const openTicket=false
    
    return (
      <>
        <div className="card">
          {ticketData.map((data, key) => {
            return (
              <div key={key}>
                <div class="">
    <div class="title">Ticket Tracker</div>
    <div class="info">
        <div class="row">
            <div class="col-7"> <span id="heading">Creation Date:</span> <span id="details">{data.creationDate}</span> </div>
            <div class="col-5 pull-right"> <span id="heading">Order No:</span> <span id="details">{data.woNum}</span> </div>
        </div>
    </div>
    <div className="flex">
    { data.reopenable && <input style={{cursor:"pointer",marginTop:"40px",color:"white",backgroundColor:"#007664",border:"0px",borderRadius:"10px",height:"50px",fontSize:"18px",width:"256px", boxShadow:"2px 2px 2px 2px grey", marginBottom:"50px"}} type="submit" value="Re-open" onClick={openTicket==true}/>
 }
 { data.cancelable && <input style={{cursor:"pointer",marginTop:"10px",marginLeft:"20px",color:"white",backgroundColor:"grey",border:"0px",borderRadius:"10px",height:"50px",fontSize:"18px",width:"256px", boxShadow:"2px 2px 2px 2px grey", marginBottom:"50px"}} type="submit" value="Cancel"/>
 }
 </div>
    

    <div class="tracking">
        <div class="title">Activities</div>
    </div>
    <div class="progress-track">
        <ul id="progressbar">
        { data.activities.map((act, key) => {
            return(
        <li class="step0 active text-center " id="step1">{act.activityCode}</li> 
        
        )})}
        </ul>
    </div>
    { data.activities.map((act, key) => {
            return(
                <div key={key} >
                <div style={{marginTop:"20px"}}>Code: {act.activityCode}</div>
                <div style={{marginTop:"10px"}}>Start Date: {act.activityStart.startDate}</div>
                <div style={{marginTop:"10px"}}>Start Time:{act.activityStart.startTime}</div>
                <div style={{marginTop:"10px"}}> Finish DAte: {act.activityFinish.finishDate}</div>
                <div style={{marginTop:"10px"}}>Finish Time:{act.activityFinish.finishTime}</div>
                </div>
            )})}
    <div class="footer">
        <div class="row">
        
            <div class="col-10">Want any help? Please &nbsp; <a> contact us</a></div>
        </div>
    </div>
</div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  export default TicketStatus


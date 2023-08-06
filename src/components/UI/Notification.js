import classes from "./Notification.module.css";
import { uiActions } from "../../Store/ui-Slice";
import { useDispatch } from "react-redux";
import CloseBtn from "../../assets/CloseBtn";

const Notification=(props)=>{
  const dispatch = useDispatch();
  const notificationCloseHandler=()=>{
    dispatch(uiActions.hideNotofications());
  }
  let statusClasses = '';
  if(props.status === 'Success'){
    statusClasses = '#46d646';
  }else if(props.status === 'pending'){
    statusClasses = '#465cd6';
  }
  else if(props.status === 'error'){
    statusClasses = '#d65746';
  }
  
  return(
    <div className={classes.notification_bar} style={{backgroundColor:statusClasses}}>
      <CloseBtn onClick={notificationCloseHandler} className="closeBtn">Close</CloseBtn>
      <p>{props.status}</p>
      <p>{props.title}</p>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
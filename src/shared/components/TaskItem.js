import React,{useState} from "react";
import './TaskItem.scss'
import PopupModal from './PopupModal'

const TaskItem = (props) => {

    const [popup,setShowPopUp] = useState();

    const openPopupHandler = () => {
        setShowPopUp(true);
    }

    const closePopUpHandler = () => {
        setShowPopUp(false);
    }
  return (
    <div className="taskitem">
    {popup && props.popoverContent && <PopupModal

           popoverContent={props.popoverContent}
            onConfirm={closePopUpHandler}

    />}
    <div className="taskitem-left">
      <div className="taskitem-logo">
        <img src={props.ImagePath} alt={props.ImagePath} />
      </div>

      <div>
        <p>{props.ProductDesc}</p>
        <p>{props.FirmName} {props.popoverContent && <i onClick={openPopupHandler} class="fa-solid fa-circle-question font"></i>}</p>
      </div>
      </div>
      <div className="taskitem-right">
        <div className="taskitem-right__cashcontainer"> 
          {props.QuotaInfo.HasDiscount ? (
            <>
              <p className="taskitem-right__cash" style={{color:'grey'}}>Peşin <span style={{textDecoration: 'line-through'}}>{props.Cash} TL</span></p>
              <p className="taskitem-right__cash discount">{props.QuotaInfo.PremiumWithDiscount} TL</p>
            </>
          ) : (
            <p className="taskitem-right__cash discount" >{props.Cash} TL</p>
          )}
        </div>
        
        {props.SaleClosed ? 
        
            <button onClick={props.OnClick} className="taskitem-order__btn phone">TELEFONDA SATIN AL</button>
            
            : 
            <button onClick={props.OnClick} className="taskitem-order__btn online">SATIN AL  </button>
            
        
        }
        
       
      </div>
    </div>
  );
};

export default TaskItem;

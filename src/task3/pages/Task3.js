import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../../shared/components/Loader'
import { task3aLoader, task3bLoader } from '../../store/task-actions'
import {taskActions} from '../../store/task-slice'
import TaskItem from '../../shared/components/TaskItem'
const Task3 = () => {
    const dispatch = useDispatch();
    const task3a = useSelector(state => state.tasks.task3a)
    const task3b = useSelector(state => state.tasks.task3b)
    const {error,loading,task3N } = task3a
    
    useEffect(() => {
      dispatch(task3aLoader())

      if(task3b.task3List.length ===  task3N.num_offers) {
        dispatch(taskActions.task3bLoadingFin())     }
    }, [dispatch])


    const task3bLoadHandler = (n) => {
        dispatch(taskActions.task3bReset())
        dispatch(taskActions.task3bRequest())
            if(n > 0) {
                for (let i = 0; i < n; i++) {
                    dispatch(task3bLoader())
                   
                  }
                  
            }
        

            
    }
    
  return (
      <>
    <div>Task3</div>
    <button style={{background:'white',color:'blue',margin:'0 auto',padding:'1rem'}}onClick={() => task3bLoadHandler(task3N.num_offers)}>{task3N.num_offers} - ADET TEKLIFI GORUNTULE</button>
    <ul>
      {task3b.task3List.map(offer =>
  <TaskItem 
    Cash={offer.Cash}
    FirmName={offer.FirmName}
    QuotaInfo={offer.QuotaInfo}
    SaleClosed={offer.SaleClosed}
    ImagePath={offer.ImagePath}
    ProductDesc={offer.ProductDesc}
    popoverContent={offer.popoverContent}

  /> )}
      {task3b.loading && task3b.task3List.length <  task3N.num_offers && <Loader />}
    </ul>
    </>
  )
}




export default Task3
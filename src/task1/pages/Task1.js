import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { task1Loader } from '../../store/task-actions'
import TaskItem from '../../shared/components/TaskItem'
import Loader from '../../shared/components/Loader'

const Task1 = () => {
    const dispatch = useDispatch();
    const task1List = useSelector(state => state.tasks.task1.task1List)
    const loading = useSelector(state => state.tasks.task1.loading)
    useEffect(() => {
      
      dispatch(task1Loader())
    
    }, [dispatch])
    
  return (
    <div>
    {loading && <Loader />}
    {task1List.offerList && task1List.offerList.map(offer =>

     
        <TaskItem 
          Cash={offer.Cash}
          FirmName={offer.FirmName}
          QuotaInfo={offer.QuotaInfo}
          SaleClosed={offer.SaleClosed}
          ImagePath={offer.ImagePath}
          ProductDesc={offer.ProductDesc}
          popoverContent={offer.popoverContent}
          

        /> )
} 
    </div>
  )
}

export default Task1
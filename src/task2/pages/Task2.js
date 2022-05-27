import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { task2Loader } from '../../store/task-actions'
import TaskItem from '../../shared/components/TaskItem'
import Loader from '../../shared/components/Loader'

const Task2 = () => {
    const dispatch = useDispatch();
    const task2List = useSelector(state => state.tasks.task2.task2List)
    const loading = useSelector(state => state.tasks.task2.loading)
    useEffect(() => {
      
      dispatch(task2Loader())
    
    }, [dispatch])
    
  return (
    <div>
    {loading ? <Loader/> : task2List.offerList && task2List.offerList.map(offer =>
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

export default Task2
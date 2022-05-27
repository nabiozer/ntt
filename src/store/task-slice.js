import { createSlice } from "@reduxjs/toolkit";



const taskSlice = createSlice({
    name: "tasks",
    initialState: {
      task1: {
        loading: false,
        error: null,
        success: null,
        task1List: []
      },

      task2: {
        loading: false,
        error: null,
        success: null,
        task2List: []
      },
      task3a: {
        loading: false,
        error: null,
        success: null,
        task3N: 0,
      },

      task3b : {
          loading: false,
          error: null,
          success: null,
          task3List: [

          ],
      }
     
  
      
    },

    reducers:{
        // task1
        task1Request(state) {
            state.task1.loading = true;
            state.task1.error = null;
        },
        task1Success(state,action) {
            state.task1.loading = false;
            state.task1.error = null;
            state.task1.task1List = action.payload;
        },
        task1Error(state,action) {
            state.task1.loading = false;
            state.task1.error = action.payload;
        },

        // task2 

        task2Request(state) {
            state.task2.loading = true;
            state.task2.error = null;
        },
        task2Success(state,action) {
            state.task2.loading = false;
            state.task2.error = null;
            state.task2.task2List = action.payload;
        },
        task2Error(state,action) {
            state.task2.loading = false;
            state.task2.error = action.payload;
        },
          // task3a 

          task3aRequest(state) {
            state.task3a.loading = true;
            state.task3a.error = null;
        },
        task3aSuccess(state,action) {
            state.task3a.loading = false;
            state.task3a.error = null;
            state.task3a.task3N = action.payload;
        },
        task3aError(state,action) {
            state.task3a.loading = false;
            state.task3a.error = action.payload;
        },

        // task3b
        task3bRequest(state) {
            state.task3b.loading = true;
            state.task3b.error = null;
        },
        task3bSuccess(state,action) {

            const newOffer = action.payload;
            

        
                state.task3b.task3List.push( 
                    newOffer       
                )
                state.task3b.loading = true;
            
        },
        task3bLoadingFin(state) {

            state.task3b.loading = false;
            state.task3b.error = null;
            
        },



        
        task3bError(state,action) {
            state.task3b.loading = false;
            state.task3b.error = action.payload;
        },
        task3bReset(state) {
            state.task3b.loading = false;
            state.task3b.error = null;
            state.task3b.task3List = [];
            state.task3b.success = [null];
        }



    }
  });
  
  export const taskActions = taskSlice.actions;
  
  export default taskSlice;
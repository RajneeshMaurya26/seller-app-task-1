import { carDataConstants } from "../action/constants";

const initialSate = {
    loading:false,
    error:null,
    data:[],
    totalCount:0
}

export default (state = initialSate,action) => {
    console.log(action);
    switch(action.type){
        case carDataConstants.GET_CAR_DATA_REQUEST:
            state = {
                ...state
            }
            break;
        case carDataConstants.GET_CAR_DATA_SUCCESS:
            state={
                ...state,
                loading:true,
                data:action.payload.carData,
                totalCount:action.payload.totalCount
            }
            break;
        case carDataConstants.GET_CAR_DATA_FAILURE:
            state = {
                ...initialSate,
                error:action.payload.error
            }
            break;
        default:
            break;
    }

    return state;

}
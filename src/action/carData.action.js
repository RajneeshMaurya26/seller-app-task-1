import axiosInstance from "../helper/axios";
import { carDataConstants } from './constants';

export const getCarData = (page=1,limit=6) => {
  return async (dispatch) => {
    dispatch({ type: carDataConstants.GET_CAR_DATA_REQUEST });
    try {
      const res = await axiosInstance.get('/carData', {
        params: {
          _page: page,
          _limit: limit,
        },
      });

      if (res.status === 200) {
        const totalCount = res.headers.get('x-total-count');
        const carData = res.data;
        dispatch({
          type: carDataConstants.GET_CAR_DATA_SUCCESS,
          payload: { carData,totalCount},
        });
      } else {
        dispatch({
          type: carDataConstants.GET_CAR_DATA_FAILURE,
          payload: { error: 'Getting error while fetching' },
        });
      }
    } catch (error) {
      dispatch({
        type: carDataConstants.GET_CAR_DATA_FAILURE,
        payload: { error: 'Action not working' },
      });
    }
  };
};

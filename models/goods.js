// 首先安装axios
import axios from 'axios';

// api
function getGoods(){
  return axios.get('/api/goods')
}

export default{
    namespace:'goods',
    state:[], //初始状态
    effects:{
        *getList(action, {call, put}){      
            const res = yield call(getGoods)
            // type名字不需要命名空间
            yield put({ type: 'initGoods', payload: res.data.result })
          }
    }, //异步操作
    reducers:{
        initGoods(state, action){
            return action.payload
          },
      
        //更新状态
        addGood(state,action){
            return [...state,{title:action.payload.title}]
        }
    }
}
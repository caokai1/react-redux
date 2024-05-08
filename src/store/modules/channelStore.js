import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannelList(state, action) {
            state.channelList = action.payload
        }
    }
})

// 创建异步
const { setChannelList } = channelStore.actions
const url = 'http://127.0.0.1:4523/m1/4103731-0-default/getlist'

// 封装一个函数 在函数中 return一个新的函数，在新函数中封装异步
// 得到数据之后通过dispatch函数 触发修改
const fetchChannelList = () => {
    return async dispatch => {
        const res = await axios.get(url)
        dispatch(setChannelList(res.data.tabelData))
    }
}

export { fetchChannelList }

const channelReducer = channelStore.reducer
export default channelReducer
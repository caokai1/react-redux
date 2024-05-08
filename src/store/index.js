import { configureStore } from "@reduxjs/toolkit";
// 导入子模块 reducer
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";

const store = configureStore({
    reducer: {
        // 注册子模块
        counter: counterReducer,
        channel: channelReducer
    }
})

export default store
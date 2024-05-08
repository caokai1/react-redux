import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-1</button>
      {count}
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(addToNum(20))}>+20</button>
      <button onClick={() => dispatch(addToNum(30))}>+30</button>
      <ul>
        {channelList.map(tsk => (<li key={tsk.replyId}>{tsk.content}</li>))}
      </ul>
    </div>
  );
}

export default App;

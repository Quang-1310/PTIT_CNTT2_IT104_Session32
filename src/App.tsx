//B1 Tạo store
//B2 Bọc chương trình trong component Provider
//B3 Lấy dữ liệu thông qua hook useSelector
//B4 Cập nhật dữ liệu thông qua dispatch

import { useSelector } from "react-redux"
import Login from "./components/Login"
import type { RootState } from "./store"


// import ChangeBackColor from "./components/ChangeBackColor"

// import ChangeState from "./components/ChangeState"

// import RandomNumber from "./components/RandomNumber"

// import Counter from "./components/Counter"

// import ListUser from "./components/ListUser"

// import Profile from "./components/Profile"

function App() {
  const result = useSelector((state: RootState) => state.account);
  console.log(result);
  
  return (
    <>
    {/* <Profile/> */}
    {/* <ListUser/> */}
    {/* <Counter/> */}
    {/* <RandomNumber/> */}
    {/* <ChangeState/> */}
    {/* <ChangeBackColor/> */}
    <Login/>
    </>
  )
}

export default App

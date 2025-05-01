import { createBrowserRouter } from "react-router-dom"
import File from "../pages/file/File"

const router = createBrowserRouter([
  {
    path : "/file",
    element : <File />
  }
])

export default router;
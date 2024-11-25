import { CiCircleRemove } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";


export default function Todo() {
  return (
    <div className="todo-list">
        <p className="todo-text">Buraya ne yazıcan
        </p>
        <div className="todo-icons">

<CiCircleRemove className="todo-remove"/>
<RiEditCircleFill className="todo-edit"/>
        </div>
    </div>
  )
}

import Modal from "react-modal"
import "./EditTaskModal.css"
import EditTaskForm from "./EditTaskForm"

const EditTaskModal = ({isOpen, onRequestClose, task, onSave }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Editar Tarea"
    className="modal-content"
    overlayClassName="modal-overlay"
    >
        <EditTaskForm task={task} onSave={onSave} onCancel={onRequestClose}/>
    </Modal>
  )
}

export default EditTaskModal
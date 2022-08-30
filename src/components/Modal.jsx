import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {
  
  const cerrarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
        setModal(false)
    }, 400)
  }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn}
                alt="cerrar modal"
                onClick={cerrarModal}
            />
        </div>
        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nombre gasto</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre del gasto"
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id="cantidad"
                    type="number"
                    placeholder="Añade la cantidad del gasto"
                />
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select
                    id="categoria"
                >
                    <option value="">--Selecciona--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
                type="submit"
                value="Añadir Gasto"
            />
        </form>
    </div>
  )
}

export default Modal
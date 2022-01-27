import { Modal } from "react-bootstrap";


function Catlinks() {

const [modalShow, setModalShow] = useState(false);



<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

}
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
          <Link to="category">
          <button className="btn inside-btn " style={{"width": "max-content", "marginLeft":"0px"}} >dfgdfgdfgd</button>
          </Link>
        </Modal.Body>
      </Modal>
    );
  }
  

export default Catlinks;
export { MyVerticallyCenteredModal };
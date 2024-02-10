import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Modal from "./components/common/Modal/Modal";
import {useState} from "react";



function App() {
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [modalContent,setModalContent]=useState('dddd');


    return (
        <div className="app">
            <Header />
            <Main setIsActiveModal={setIsActiveModal}/>
            <Sidebar/>
            <Footer/>
                <Modal active={isActiveModal} setActive={setIsActiveModal}>
                    {modalContent}
                </Modal>
        </div>
    );
}

export default App;

import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import RegisterUser from '../components/registers/registerUser';
import RegisterPlayer from '../components/registers/registerPlayer';
import '../components/styles/Register.css';
import EditPlayer from '../components/registers/editPlayers';

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="register-container">
                <RegisterUser />
                <RegisterPlayer />
                <EditPlayer />
            </div>
            <Footer />
        </div>
    );
};

export default Register;

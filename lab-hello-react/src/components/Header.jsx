import Navbar from './Navbar';

const Header = () => {

    return (
    <div className="header">
        <Navbar />
        <div>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend libray, and become a super Ninja developer</p>
            <button>Awesome!</button>
        </div>
    </div>
    )
}

export default Header;
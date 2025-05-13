import Buttons from "../components/Buttons";    

function Home() {
    return (
        <>
            <div className="homeContent">
                <div className="homeContentText">
                    <h1>BEM VINDO AO NUTRICIONIST APP</h1>
                    <p>O melhor app para nutricionista de tudo o Brasil</p>
                </div>
                <div className="homeContentButtons">
                    <Buttons></Buttons>
                </div>
            </div>
        </>
    );
}

export default Home;
import './GameBoard.css';
import Button from '../button/Button.js';

const GameBoard = () => {
    return (
        <div className="game-board container">
            <div className="row pt-5">
                <div className="col-md-6">
                    <p className="ml-5">
                        Life: 
                        <img className="ml-2" src="./Vector.png"></img>
                        <img className="ml-1" src="./Vector.png"></img>
                        <img className="ml-1"   src="./Vector.png"></img>
                    </p> 
                </div>
                <div className="col-md-6 text-right">
                    <p className="mr-5">
                        Points: 0
                    </p>
                </div>
            </div>
            <div className="row question-board py-3">
                <div className="col text-center question-text">1 January 2021</div>
            </div>
            <div className="row pt-5 pb-4">
                <div className="col-md-6 d-flex justify-content-end">
                    <Button name="FOUND" />
                </div>
                <div className="col-md-6 ">
                    <Button name="NEW" />
                </div>
            </div>
        </div>
    )
}

export default GameBoard;
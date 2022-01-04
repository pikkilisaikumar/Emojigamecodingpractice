import './index.css'

const WinOrLose = props => {
  const {score, playAgainOne, playAgainOne1} = props

  const playagainBtnClick = () => {
    playAgainOne()
  }

  const playagainBtnClick1 = () => {
    playAgainOne1()
  }

  return score === 12 ? (
    <div className="white-container">
      <div>
        <h1>You Won</h1>
        <p>Best Score</p>
        <p>{score}/12</p>
        <button type="button" onClick={playagainBtnClick1}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="losegamestyle"
      />
    </div>
  ) : (
    <div className="white-container">
      <div>
        <h1>You Lose</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <button type="button" onClick={playagainBtnClick}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="losegamestyle"
      />
    </div>
  )
}

export default WinOrLose

import './index.css'

const NavBar = props => {
  const {topScore, score, isTrue} = props
  console.log(score)
  return (
    <div className="navcontainer">
      <nav className="imageheadingone">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </nav>
      {score !== 12 && isTrue && (
        <div className="scoretopscorecontainer">
          <p className="paragraph">Score: {score}</p>
          <p className="paragraph">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevvalue: [],
      score: 0,
      topScore: 0,
      isTrue: true,
    }
  }

  playAgainOne = () => {
    const {topScore} = this.state
    this.setState({prevvalue: [], score: 0, isTrue: true, topScore})
  }

  playAgainOne1 = () => {
    this.setState({prevvalue: [], score: 0, isTrue: true, topScore: 0})
  }

  onClickEmojiOne = id => {
    const {prevvalue, score, topScore} = this.state
    const presentValue = prevvalue.filter(each => each === id)
    // console.log(presentValue)
    if (presentValue.length !== 0) {
      if (score > topScore) {
        this.setState({isTrue: false, topScore: score, score})
      } else {
        this.setState({isTrue: false, topScore, score})
      }
    } else {
      this.setState(prevState => ({
        prevvalue: [...prevState.prevvalue, id],
        score: score + 1,
        isTrue: true,
      }))
    }
  }

  render() {
    const {score, isTrue, topScore} = this.state
    const {emojisList} = this.props
    // console.log(score)
    return (
      <>
        <NavBar score={score} isTrue={isTrue} topScore={topScore} />
        <div className="card-containerbackground">
          {isTrue && score < 12 ? (
            <ul className="unorderlist">
              {emojisList.map(each => (
                <EmojiCard
                  each={each}
                  key={each.id}
                  onClickEmojiOne={this.onClickEmojiOne}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              playAgainOne={this.playAgainOne}
              playAgainOne1={this.playAgainOne1}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame

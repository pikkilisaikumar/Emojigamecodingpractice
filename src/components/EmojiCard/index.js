import './index.css'

const EmojiCard = props => {
  const {each, onClickEmojiOne} = props
  const {emojiName, emojiUrl, id} = each

  const emojiClick = () => {
    onClickEmojiOne(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={emojiClick} className="buttonemoji">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

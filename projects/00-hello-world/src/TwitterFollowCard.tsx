import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard (
  { children, userName, formatUserName }:
  { children: React.ReactNode, userName: string, formatUserName: (userName: string) => string }
) {
  const [isFollowing, setIsFollowing] = useState(false)

  const followingText = isFollowing ? 'Siguiendo' : 'Seguir'
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <>
      <article>
        <header>
          <img src={`https://unavatar.io/github/${userName}`} alt="avatar-img" />
          <div>
            <strong>{ children }</strong>
            <span>{ formatUserName(userName) }</span>
          </div>
        </header>
        <aside>
          <button className={ !isFollowing ? 'following' : 'not-following' } onClick={handleClick}>
              <span className='isFollowing-text'>Dejar de seguir</span>
              <span className='following-text'>{ followingText }</span>
          </button>
        </aside>
      </article>
    </>
  )
}

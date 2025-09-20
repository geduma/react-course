import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard (
  { children, userName, formatUserName }:
  { children: React.ReactNode, userName: string, formatUserName: (userName: string) => string }
) {
  const [isFollowing, setIsFollowing] = useState(false)

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
          <button className={ !isFollowing ? 'following' : 'not-following' } onClick={handleClick}>{ isFollowing ? 'Siguiendo' : 'Seguir' }</button>
        </aside>
      </article>
    </>
  )
}

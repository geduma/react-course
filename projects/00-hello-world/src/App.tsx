import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const format = (userName: string) => `@${userName}`

  const users = [
    {
      userName: 'geduma',
      name: 'Felipe Marino'
    },
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran'
    }
  ]

  return (
    <>
      {
        users.map(({ userName, name }) => { /* iteration example */
          if (userName) { /* conditional example */
            return (
              <TwitterFollowCard
                key={userName}
                userName={userName}
                formatUserName={format}>
                {name}
              </TwitterFollowCard>
            )
          }
        })
      }
    </>
  )
}

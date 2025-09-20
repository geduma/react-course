import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const format = (userName: string) => `@${userName}`

  return (
    <>
      <TwitterFollowCard
        formatUserName={format}
        userName='geduma'>
        Felipe Marino
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={format}
        userName='midudev'>
        Miguel Angel Duran
      </TwitterFollowCard>
    </>
  )
}

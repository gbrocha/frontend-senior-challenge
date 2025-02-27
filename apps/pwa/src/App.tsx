import { FunctionComponent } from 'react'
import useHeight from '@tudo/utils/useHeight'
import Router from '@/router'
import { BottomBar } from './components/BottomBar'
import { AppBar } from './components/AppBar'

const App: FunctionComponent = () => {
  // used to work around 100vh problems
  const height = useHeight()

  return (
    <main
      style={{ height: height, background: '#ECECEC' }}
      className="mainContainer"
    >
      <AppBar />
      <div className="growContainer">
        <Router />
      </div>
      <BottomBar />
    </main>
  )
}

export default App

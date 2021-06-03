import './App.css'
import Counter from './components/Counter'
import { connect } from 'react-redux'
import { increase, decrease } from './modules/counter'

function App(props) {
  const handleCountUP = () => props.countUp('hello')
  const handleCountDown = () => props.countDown('world')

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          onCountUp={handleCountUP}
          onCountDown={handleCountDown}
          count={props.count}
        />
      </header>
    </div>
  )
}

export default connect(
  (state) => ({ count: state }),
  (dispatch) => ({
    countUp: (msg) => dispatch(increase(msg)),
    countDown: (msg) => dispatch(decrease(msg)),
  }),
)(App)

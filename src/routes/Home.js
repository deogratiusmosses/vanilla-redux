import React, { useState } from 'react'
import { connect } from 'react-redux'
import { add } from '../store'
import ToDo from '../components/ToDo'

function Home(toDos, addToDo) {
  const [text, setText] = useState('')
  function onChange(event) {
    setText(event.target.value)
  }
  function onSubmit(event) {
    event.preventDefault()
    addToDo(text)
    setText('')
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  )
}

function mapStateToProps(state) {
  return { toDos: state }
}
function mapDispatchToProps(state) {
  return { addToDo: (text) => dispatchEvent(add(text)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

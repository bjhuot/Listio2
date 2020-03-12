import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Todo = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.grey};
  background: ${(props) => props.theme.lightgrey};
  border-radius: 10px;
  padding: 0px 10px;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const TodoName = styled.a`
  font-weight: bold;
  /* letter-spacing: 0.65px; */
`

const TodoDetails = styled.div`
  opacity: 0.5;
  max-width: 50%;
  flex-grow: 500;
`

const TodoButton = styled.button`
  background: none;
  border: none;
`

export default class TodoItem extends Component {
  render() {
    return (
      <Todo>
        <Link href="#">
          <TodoName>TodoItem - Just one!</TodoName>
        </Link>
        <TodoDetails>More details about this todo item!</TodoDetails>
        <div>
          <TodoButton>👇</TodoButton>
          <TodoButton>✏️</TodoButton>
          <TodoButton>❌</TodoButton>
        </div>
      </Todo>
    )
  }
}

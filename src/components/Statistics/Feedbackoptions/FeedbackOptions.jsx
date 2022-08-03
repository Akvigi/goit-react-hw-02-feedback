import { BtnCont } from 'components/styled-comp/styled'
import React from 'react'
import PropTypes from 'prop-types'


function FeedbackOptions({toDo}) {
  return (
        <BtnCont>
            <button onClick={toDo}>good</button>
            <button onClick={toDo}>neutral</button>
            <button onClick={toDo}>bad</button>
        </BtnCont>
  )
}

FeedbackOptions.propTypes = {
  toDo: PropTypes.func
}

export default FeedbackOptions
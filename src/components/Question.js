import React from 'react'

function Question({question}) {
    return(
      <tr>
        <td>{question.id}</td>
        <td>{question.priority}</td>
        <td>{question.question}</td>
        <td>{question.teaming_stages}</td>
        <td>{question.appears}</td>
        <td>{question.frequency}</td>
        <td>{question.type}</td>
        <td>{question.role_id}</td>
        <td>{question.required}</td>
        <td>{question.conditions}</td>
        <td>{question.mapping_id}</td>
      </tr>
    )
}
export default Question;
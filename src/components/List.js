import React, {useState, useEffect} from 'react'
import Question from './Question';
import ReactPaginate from 'react-paginate';
import API from '../services/api'

const List = (props) => {

  const [questions, setQuestions] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(10);
  const [key, setKey] = useState('id');
  const [pageCount, setPageCount] = useState(0)

  const getQuestions = async (key) => {
    const res =  await API.get(`/questions.json?offset=${offset}&limit=${limit}&key=${key}`)
    const data = res.data.data;
    setQuestions(data.questions)
    setPageCount(Math.ceil(data.total_questions / limit))
  }
  
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage)
  };

  useEffect(() => {
    getQuestions(key)
  }, [offset])


  const requestSort = key => {
   setKey(key)
   getQuestions(key)
  }


    return(
      
      <div class="container">
          <h2>Questions</h2>
          <table class="table">
            <thead>
              <th >S.NO</th>
              <th onClick={() => requestSort('priority')}>
                Priority
              </th>
              <th onClick={() => requestSort('question')}> 
                Question</th>
              <th onClick={() => requestSort('teaming_stages')}> 
                Teaming Stages</th>
              <th onClick={() => requestSort('appears')}> 
                Appears (Day)</th>
              <th onClick={() => requestSort('frequency')}> 
                Frequency</th>
              <th onClick={() => requestSort('type')}> 
                Type</th>
              <th onClick={() => requestSort('role_id')}> 
                Role</th>
              <th onClick={() => requestSort('required')}> 
                Required?</th>
              <th onClick={() => requestSort('conditions')}> 
                Conditions</th>
              <th onClick={() => requestSort('mapping_id')}> 
                Mapping</th>
            </thead>
            <tbody>
              { questions.map(question =>  <Question key={question.id} question={question} />)}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
      </div>
    )
}


export default List;

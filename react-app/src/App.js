// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  // console.log(props)
  return (
    <header>
      <h1>
        <a href='/test' 
          onClick={function (event) {
          event.preventDefault();
          props.onChangeMode();
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  )
}

function Nav(props) {
  // props.topics로 배열을 받으면 하나 씩 lis에 push후 return문에서 {lis}로 출력
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a 
          id={t.id} 
          href={'/read/'+t.id} 
          onClick={(event)=>{ // a태그 클릭시 이벤트 설정
            event.preventDefault(); 
            props.onChangeMode(Number(event.target.id)); // state를 변경 App의 mode는 READ로 id는 현재 태그의 id를 정수로 바꾼 값으로 
          }}>{t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'javascript is ...' }
  ]

  let content = null;
  if (mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, Web'></Article>
  }
  else if (mode === 'READ'){ // 읽기 모드 진입 시
    let title, body = null;
    for(let i=0; i<topics.length; i++) { // topics를 순차탐색하며 id state와 동일한 id를 가진 topics의 title과 body 값을 Article로 입력
      // console.log(topics[i].id, id);
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}>not body</Article>
  }


  return ( 
    <div>

      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}>
      </Header>
      
      <Nav topics={topics} 
        onChangeMode={(_id)=>{ 
          setMode('READ'); 
          setId(_id);  
        }}>
      </Nav>
      {/* mode나 id의 state 값에 따라 App에서 출력 결정*/}
      {content}
    </div>
  );
}

export default App;

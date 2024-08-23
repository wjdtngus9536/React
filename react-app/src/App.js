// import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>
        <a href='/test' onClick={function (event) {
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
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>);
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
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'javascript is ...' }
  ]
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;

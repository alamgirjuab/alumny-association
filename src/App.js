import './App.css';
import Header from './components/Header/Header';
import Member from './components/Member/Member';

function App() {
  /* const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch('./members.json')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []) */
  return (
    <div>
      <Header></Header>
      <Member></Member>
      {/* {
        members.map(member => console.log(member.name))
      } */}
    </div>
  );
}

export default App;

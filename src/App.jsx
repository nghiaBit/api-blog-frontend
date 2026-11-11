import { Link, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import PostList from './PostList';
function Home() {
  return <h3>Trang chu</h3>;
}
function About() {
  return <h3>Hotline...</h3>;
}
function NotMatch() {
  return <h5>Link bi loi!!!</h5>;
}
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;

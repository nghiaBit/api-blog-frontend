import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default function PostList() {
  const [dl, setDl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://apiblogbackend-4dnj--8080--0df13572.local-credentialless.webcontainer.io/api/posts');
        
        setDl(res.data);
      } catch (error) {
        console.error('Chi tiết lỗi axios:', error);
        setErr('Loi khi lay du lieu tu backend');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Dang tai du lieu...</p>;
  if (err) return <p style={{ color: 'red' }}>{err}</p>;
  return (
    <div>
      <ul>
        {dl.map((post) => (
          <Link to={`/api/posts/${slug}`}><li key={post.slug}>{post.title}</li></Link>
        ))}
      </ul>
    </div>
  );
}

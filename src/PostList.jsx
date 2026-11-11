import { useEffect, useState } from 'react';
import axios from 'axios';
export default function PostList() {
  const [dl, setDl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:3000/api/posts');
        if (!Array.isArray(res.data)) {
          throw new Error(
            'Backend trả về không phải danh sách: ' +
              JSON.stringify(res.data).slice(0, 100)
          );
        }
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
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

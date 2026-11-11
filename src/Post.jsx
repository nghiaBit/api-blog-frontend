import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
export default function Post(){
    const {slug} = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`https://apiblogbackend-4dnj--8080--0df13572.local-credentialless.webcontainer.io/api/posts/${slug}`);
          
          setPost(res.data);
        } catch (error) {
          console.error('Chi tiết lỗi axios:', error);
          setErr('Loi khi lay du lieu tu backend');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [slug]);
    if (loading) return <p>Dang tai du lieu...</p>;
    if (err) return <p style={{ color: 'red' }}>{err}</p>;
    return(
        <div>
            <h5>post.title</h5>
            <br />
            <h6>post.description</h6>
        </div>
    )
}
import { Outlet } from 'react-router-dom';
export default function Posts() {
  return (
    <div>
      Danh sach cac bai viet
      <hr />
      <Outlet />
    </div>
  );
}

import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination.component";
import { User } from "../../components/User/User.component";
import { PAGE_SIZE } from "../../constants/common.constant";
import "./UserList.css";

export const UserList = () => {
  // State Variables
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(PAGE_SIZE[0]);

  const start = Number(currentPage) * Number(rowPerPage);
  const end = Number(start) + Number(rowPerPage);
  const totalPage = Math.ceil(userList.length / rowPerPage);

  // Hooks
  useEffect(() => {
    getUserList();
  }, []);

  // API Calls
  const getUserList = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=500");
    const userList = await response.json();
    setUserList(userList.users);
  };

  return (
    <main className="container">
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setRowPerPage={setRowPerPage}
      />
      <div className="userList">
        {userList.slice(start, end).map((user) => (
          <User user={user} />
        ))}
      </div>
    </main>
  );
};

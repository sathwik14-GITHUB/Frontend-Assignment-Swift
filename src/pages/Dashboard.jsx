import React, { useEffect, useState } from 'react';
import CommentTable from '../components/CommentTable';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { FaSort } from "react-icons/fa";
import './Dashboard.css';

export default function Dashboard() {
  const [comments, setComments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState(() => localStorage.getItem('searchTerm') || '');
  const [sortKey, setSortKey] = useState(() => localStorage.getItem('sortKey') || '');
  const [sortOrder, setSortOrder] = useState(() => localStorage.getItem('sortOrder') || '');
  const [pageSize, setPageSize] = useState(() => +localStorage.getItem('pageSize') || 10);
  const [currentPage, setCurrentPage] = useState(() => +localStorage.getItem('currentPage') || 1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data[0]));
  }, []);

  useEffect(() => {
    let temp = [...comments];
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      temp = temp.filter(
        (c) =>
          c.name.toLowerCase().includes(lower) ||
          c.email.toLowerCase().includes(lower) ||
          c.body.toLowerCase().includes(lower)
      );
    }
    if (sortKey) {
      temp.sort((a, b) => {
        const aVal = a[sortKey].toString().toLowerCase();
        const bVal = b[sortKey].toString().toLowerCase();
        if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }
    setFiltered(temp);
  }, [comments, searchTerm, sortKey, sortOrder]);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('sortKey', sortKey);
    localStorage.setItem('sortOrder', sortOrder);
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('pageSize', pageSize);
  }, [searchTerm, sortKey, sortOrder, currentPage, pageSize]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleSort = (key) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortOrder('asc');
    } else {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : prev === 'desc' ? '' : 'asc'));
      if (sortOrder === '') setSortKey('');
    }
  };

  return (
    <div className="dashboard">
      <Header user={user} />
      <div className="dashboard-body">
        <div className="dashboard-controls">
          <div className="sort-options">
            <button onClick={() => toggleSort('postId')}>Sort Post ID <FaSort /></button>
            <button onClick={() => toggleSort('name')}>Sort Name <FaSort /></button>
            <button onClick={() => toggleSort('email')}>Sort Email <FaSort /></button>
          </div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <CommentTable comments={paginated} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
}

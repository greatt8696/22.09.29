import React from "react";
import { useSelector } from "react-redux";

const Reports = () => {
  const lists = useSelector((state) => state.lists);
  // {
  //   id: 0,
  //   writer: "뀨",
  //   title: "제목뀨",
  //   content: "내용뀨",
  //   createdAt: new Date().toLocaleString(),
  // },
  return (
    <div className="relative bg-slate-500 rounded-2xl p-3 flex flex-col overflow-y-scroll">
      <h1 className="sticky">Reports 컴포넌트</h1>
      {lists.map((list) => {
        const { id, writer, title, content, createdAt } = list;
        return (
          <div key={id} className="bg-slate-300 text-black my-1 p-2 rounded-lg">
            <h1> 제목 : {title}</h1>
            <p> 작성자 : {writer}</p>
            <p> 내용 : {content}</p>
            <p> 생성시간 : {createdAt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reports;

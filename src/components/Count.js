import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = ({ count, setCount }) => {
  const dispatch = useDispatch();
  const [onAnimation, setAnimation] = useState(false);

  // dispatch 함수를 사용하는데 매개변수로 객체를 전달해 준다.
  // type : 동작시킬 행동의 이름
  // payload : 선택사항이 있어도 되고 없어도 되는것 데이터 전달때

  const Add = (e) => {
    setAnimation(true);
    setCount(count + 1);
    dispatch({ type: "ADD" });
  };

  const Remove = () => {
    setAnimation(true);
    setCount(count - 1);
    dispatch({ type: "REMOVE" });
  };
  const RemoveAnimation = () => {
    setAnimation(false);
  };

  return (
    <div className=" bg-slate-500 rounded-2xl p-3 ">
      <h1>Count 컴포넌트</h1>
      <button
        className={
          (onAnimation ? "animate-ping-one " : "") +
          "transition-all font-bold hover:text-green-500 bg-green-700 p-3 m-5 rounded-xl hover:outline-green-700 hover:outline hover:bg-transparent"
        }
        onClick={Add}
        onAnimationEnd={RemoveAnimation}
      >
        더하기
      </button>
      <button
        className={
          (onAnimation ? "animate-ping-one " : "") +
          "transition-all font-bold hover:text-green-500 bg-green-700 p-3 m-5 rounded-xl hover:outline-green-700 hover:outline hover:bg-transparent"
        }
        onClick={Remove}
        onAnimationEnd={RemoveAnimation}
      >
        빼기
      </button>
    </div>
  );
};

export default Count;

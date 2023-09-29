import React from "react";
import MyHeader from "../ui/MyHeader";
import MyButton from "../ui/MyButton";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  return (
    <div className="New">
      <div className="header">
        <MyHeader
          leftChild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          headText={"새로운 일기 쓰기"}
        />
      </div>
      <div className="new_date">
        <h3>오늘은 언제인가요?</h3>
        <select>
          <option></option>
        </select>
      </div>
      <div className="new_emotion">
        <h3>오늘의 감정</h3>
      </div>
      <div className="new_textarea">
        <h3>오늘의 일기</h3>
        <textarea />
      </div>
      <div className="btn_wrapper">
        <MyButton />
        <MyButton />
      </div>
    </div>
  );
};

export default New;

import React, { useContext, useEffect, useState } from "react";
import MyHeader from "../ui/MyHeader";
import MyButton from "../ui/MyButton";
import { DiaryStateContext } from "../App";
import DiaryList from "./DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();
    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0
    ).getTime();

    setData(
      diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
    );
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div className="Home">
      <MyHeader
        leftChild={
          <MyButton text={"<"} type={"default"} onClick={decreaseMonth} />
        }
        headText={headText}
        rightChild={
          <MyButton text={">"} type={"default"} onClick={increaseMonth} />
        }
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;

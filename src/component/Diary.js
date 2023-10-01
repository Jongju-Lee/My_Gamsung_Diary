import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import { emotion, emotionList } from "../util/emotion";
import MyHeader from "../ui/MyHeader";
import MyButton from "../ui/MyButton";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("존재하지 않는 일기 입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.id)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 일기`}
          leftChild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} />
              <div className="emotion_description">
                {curEmotionData.emotion_description}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }

  // return (
  //   <div>
  //     <MyHeader
  //       headText={`일기`}
  //       leftChild={
  //         <MyButton
  //           text={"< 뒤로가기"}
  //           onClick={() => navigate(-1, { replace: true })}
  //         />
  //       }
  //       rightChild={
  //         <MyButton text={"수정하기"} onClick={() => navigate(`/edit/${id}`)} />
  //       }
  //     />
  //     <section>
  //       <h4>오늘의 감정</h4>
  //       <img src={process.env.PUBLIC_URL + `/assets/emotion${id}.png`} />
  //     </section>
  //     <section>
  //       <h4>오늘의 일기</h4>
  //       <textarea />
  //     </section>
  //   </div>
  // );
};

export default Diary;

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {javaQuizData } from "../data/java/javaQuizData"; // 과목별 데이터 import
import { javaQuizList } from "../data/java/javaQuizList";
import type { IQuizList } from "../types/IQuizList";
import type { IQuizData } from "../types/IQuizData";

export default function QuizPage() {
  const { menuId, quizId } = useParams();
  const navigate = useNavigate();

  // ===== 과목별 리스트 선택 =====
  let quizList:IQuizList[] = [];
  let quizData:IQuizData[] = [];

  switch (menuId) {
    case "java":
      quizList = javaQuizList;
      quizData = javaQuizData;
      break;
    // 다른 과목도 case 추가 가능
    default:
      quizList = [];
      quizData = [];
  }

  // ===== 현재 위치 =====
  const currentIndex = quizList.findIndex((q) => q.quizId === quizId);
  const quizMeta = quizList[currentIndex];
  const quiz = quizData.find((q) => q.quizId === quizId);

  // 입력값 상태
  const [values, setValues] = useState<Record<string, string>>(() => {
    if (!quiz) return {};
    const obj: Record<string, string> = {};
    quiz.inputs.forEach((key) => (obj[key] = ""));
    return obj;
  });

  const [result, setResult] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  // ===== 입력값 변경 =====
  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  // ===== 채점 =====
  const checkAnswer = () => {
    if (!quiz) return;

    let score = 0;
    const feedback: string[] = [];

    quiz.grading.forEach((rule) => {
      const val = values[rule.target] || "";
      if (rule.regex.test(val)) {
        score++;
        feedback.push("✔ " + rule.msg);
      } else {
        feedback.push("❌ " + rule.msg);
      }
    });

    let grade = "";
    if (score === quiz.grading.length) grade = "✅ 100점";
    else if (score >= Math.ceil(quiz.grading.length / 2)) grade = "🟡 부분 정답";
    else grade = "❌ 다시 시도";

    setResult(grade + "\n\n" + feedback.join("\n"));
  };

  // ===== 이전/다음 이동 =====
  const goPrev = () => {
    if (currentIndex > 0) navigate(`/${menuId}/quiz/${quizList[currentIndex - 1].quizId}`);
  };
  const goNext = () => {
    if (currentIndex < quizList.length - 1)
      navigate(`/${menuId}/quiz/${quizList[currentIndex + 1].quizId}`);
  };

  if (!quiz || !quizMeta) return <div className="p-6">문제를 찾을 수 없습니다.</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">
          📘 {quiz.title || `퀴즈 ${quiz.quizId}`}
        </h2>

        <p className="text-left mb-4 whitespace-pre-line">{quiz.question}</p>

        {/* 입력창 동적 생성 */}
        {quiz.inputs.map((key, idx) => (
          <div key={key} className="mb-4">
            <h3 className="font-semibold">📦 코드 영역 {idx + 1}</h3>
            <textarea
              className="w-full h-40 mt-2 p-2 border rounded font-mono"
              value={values[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        ))}

        {/* 버튼 */}
        <div className="mt-4 flex gap-3 flex-wrap">
          <button
            onClick={checkAnswer}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            채점하기
          </button>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            정답 보기
          </button>
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            이전
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex === quizList.length - 1}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            다음
          </button>
        </div>

        {/* 결과 */}
        {result && <div className="mt-4 font-bold whitespace-pre-line text-left">{result}</div>}

        {/* 정답 */}
        {showAnswer && (
          <div className="mt-4 bg-black text-green-400 p-4 rounded text-left whitespace-pre-wrap font-mono">
            {quiz.answer || "정답이 등록되지 않았습니다."}
          </div>
        )}
      </div>
    </div>
  );
}
export const javaQuizData = [
  {
    quizId: "java111",
    title: "출력 기본",

    question: `안녕하세요 표시하세요
              정수 2 는 바로 아래에 표시하세요
              단, System.out.println() 사용하세요`,
    inputs: ["code1"],
    grading: [
      {
        target: "code1",
        regex: /System\.out\.println\s*\(/,
        msg: "println 사용",
      },
      {
        target: "code1",
        regex: /안녕하세요/,
        msg: "안녕하세요 출력",
      },
      {
        target: "code1",
        regex: /println\s*\(\s*2\s*\)/,
        msg: "숫자 2 출력",
      },
    ],

    answer: `public class Main {
    public static void main(String[] args) {
        System.out.println("안녕하세요");
        System.out.println(2);
    }
}`,
  },
];
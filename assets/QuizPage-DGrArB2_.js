import{u as C,a as H,r as u,j as s}from"./index-DGAldt6J.js";import{j as L}from"./javaQuizList-qSyOo3ta.js";import{m as T}from"./menuData-Dv81J-aJ.js";const k=[{quizId:"111",title:"출력 기본",question:`안녕하세요 표시하세요
              정수 2 는 바로 아래에 표시하세요
              단, System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/System\.out\.println\s*\(/,msg:"println 사용"},{target:"code1",regex:/안녕하세요/,msg:"안녕하세요 출력"},{target:"code1",regex:/println\s*\(\s*2\s*\)/,msg:"숫자 2 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        System.out.println("안녕하세요");
        System.out.println(2);
    }
}`},{quizId:"112",title:"변수 출력",question:`"안녕하세요" 값을 변수에 저장하여 출력하세요
정수 2 도 변수에 저장하여 출력하세요
단, 변수 이름은 자유롭게 하세요`,inputs:["code1"],grading:[{target:"code1",regex:/String\s+\w+\s*=\s*["']안녕하세요["']/,msg:"문자열 변수 선언"},{target:"code1",regex:/int\s+\w+\s*=\s*2/,msg:"정수 변수 선언"},{target:"code1",regex:/System\.out\.println\s*\(\s*\w+\s*\)/,msg:"변수 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        String str = "안녕하세요";
        int num = 2;

        System.out.println(str);
        System.out.println(num);
    }
}`},{quizId:"113",title:"변수 연산",question:`정수 a 에 30 이 있습니다
정수 b 에는 20 이 있습니다
두 값을 더한 결과와 뺀 결과를 출력하세요
단, System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+a\s*=\s*30/,msg:"a 변수 선언"},{target:"code1",regex:/int\s+b\s*=\s*20/,msg:"b 변수 선언"},{target:"code1",regex:/println\s*\(\s*a\s*\+\s*b\s*\)/,msg:"덧셈 출력"},{target:"code1",regex:/println\s*\(\s*a\s*-\s*b\s*\)/,msg:"뺄셈 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int a = 30;
        int b = 20;

        System.out.println(a + b);
        System.out.println(a - b);
    }
}`},{quizId:"114",title:"연산 확장",question:`정수 a 에 30 이 있습니다
정수 b 에는 20 이 있습니다
두 값을 곱한 결과, 나눈 결과, 나머지를 출력하세요
단, System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+a\s*=\s*30/,msg:"a 변수 선언"},{target:"code1",regex:/int\s+b\s*=\s*20/,msg:"b 변수 선언"},{target:"code1",regex:/println\s*\(\s*a\s*\*\s*b\s*\)/,msg:"곱셈 출력"},{target:"code1",regex:/println\s*\(\s*a\s*\/\s*b\s*\)/,msg:"나눗셈 출력"},{target:"code1",regex:/println\s*\(\s*a\s*%\s*b\s*\)/,msg:"나머지 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int a = 30;
        int b = 20;

        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
    }
}`},{quizId:"115",title:"문자열 연결",question:`글자 a 에 "안녕하세요" 가 있습니다
글자 b 에는 "반갑습니다" 가 있습니다
두 문자열을 붙여서 출력하세요
단, System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/String\s+a\s*=\s*["']안녕하세요["']/,msg:"a 변수 선언"},{target:"code1",regex:/String\s+b\s*=\s*["']반갑습니다["']/,msg:"b 변수 선언"},{target:"code1",regex:/println\s*\(\s*a\s*\+\s*b\s*\)/,msg:"문자열 연결 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        String a = "안녕하세요";
        String b = "반갑습니다";

        System.out.println(a + b);
    }
}`},{quizId:"116",title:"문자열 + 숫자",question:`글자 x 에는 "x:" 가 있습니다
정수 y 에는 20 이 있습니다
아래처럼 출력하세요
x:20
단, 임시저장공간(변수)을 이용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/String\s+x\s*=\s*["']x:["']/,msg:"x 변수 선언"},{target:"code1",regex:/int\s+y\s*=\s*20/,msg:"y 변수 선언"},{target:"code1",regex:/println\s*\(\s*x\s*\+\s*y\s*\)/,msg:"문자열 + 숫자 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        String x = "x:";
        int y = 20;

        System.out.println(x + y);
    }
}`},{quizId:"141",title:"문자열 입력",question:`hello 를 입력받아서 입력한 값을 출력하세요
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next(Line)?\s*\(\s*\)/,msg:"문자열 입력 받기"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        System.out.println(str);
    }
}`},{quizId:"142",title:"정수 입력",question:`100 을 입력받아서 입력한 값을 출력하세요
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력 받기"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        System.out.println(num);
    }
}`},{quizId:"143",title:"실수 입력",question:`1.5 를 입력받아서 입력한 값을 출력하세요
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/double\s+\w+\s*=\s*\w+\.nextDouble\s*\(\s*\)/,msg:"실수 입력 받기"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double num = sc.nextDouble();

        System.out.println(num);
    }
}`},{quizId:"144",title:"문장 입력",question:`I am a boy 를 입력받아서 입력한 문장을 출력하세요
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.nextLine\s*\(\s*\)/,msg:"문장 입력 받기"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        System.out.println(str);
    }
}`},{quizId:"211",title:"문자열 변수 출력",question:`굿모닝 을 a 변수에 저장하세요
a 변수를 Console 화면에 출력하세요
단, System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/String\s+a\s*=\s*["']굿모닝["']/,msg:"a 변수에 문자열 저장"},{target:"code1",regex:/System\.out\.println\s*\(\s*a\s*\)/,msg:"a 변수 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        String a = "굿모닝";

        System.out.println(a);
    }
}`},{quizId:"212",title:"원의 넓이",question:`원의 넓이를 구하세요
반지름은 정수 5 입니다
원의 넓이 공식은 반지름 * 반지름 * 3.14 입니다
결과를 화면에 출력하세요
단, System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+r\s*=\s*5/,msg:"반지름 변수 선언"},{target:"code1",regex:/println\s*\(\s*r\s*\*\s*r\s*\*\s*3\.14\s*\)/,msg:"원의 넓이 계산 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int r = 5;

        System.out.println(r * r * 3.14);
    }
}`},{quizId:"213",title:"두 수 연산",question:`정수 a 는 20 입니다
정수 b 는 10 입니다
두 값을 더한 결과와 뺀 결과를 각각 출력하세요
단, System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+a\s*=\s*20/,msg:"a 변수 선언"},{target:"code1",regex:/int\s+b\s*=\s*10/,msg:"b 변수 선언"},{target:"code1",regex:/println\s*\(\s*a\s*\+\s*b\s*\)/,msg:"덧셈 출력"},{target:"code1",regex:/println\s*\(\s*a\s*-\s*b\s*\)/,msg:"뺄셈 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int a = 20;
        int b = 10;

        System.out.println(a + b);
        System.out.println(a - b);
    }
}`},{quizId:"214",title:"정수 입력 출력",question:`정수 1개를 입력받아서 입력한 값을 그대로 출력하세요
입력 예: 5
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력 받기"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        System.out.println(num);
    }
}`},{quizId:"215",title:"단어 2개 입력",question:`단어 2개를 입력받아서 입력한 값을 그대로 출력하세요
입력 예: Hi Hong
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next\s*\(\s*\)/,msg:"첫 번째 단어 입력"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next\s*\(\s*\)/,msg:"두 번째 단어 입력"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = sc.next();
        String b = sc.next();

        System.out.println(a);
        System.out.println(b);
    }
}`},{quizId:"216",title:"단어 연결 출력",question:`단어 2개를 입력받아서 아래와 같이 출력하세요
입력 예: Hi Hong
출력 예: HiHong
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next\s*\(\s*\)/,msg:"첫 번째 단어 입력"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next\s*\(\s*\)/,msg:"두 번째 단어 입력"},{target:"code1",regex:/println\s*\(\s*\w+\s*\+\s*\w+\s*\)/,msg:"문자열 연결 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = sc.next();
        String b = sc.next();

        System.out.println(a + b);
    }
}`},{quizId:"217",title:"정수 나눗셈",question:`정수 2개를 입력받아서 나눈 결과를 출력하세요
입력 예: 3 2
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"첫 번째 정수 입력"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"두 번째 정수 입력"},{target:"code1",regex:/println\s*\(\s*\w+\s*\/\s*\w+\s*\)/,msg:"나눗셈 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a / b);
    }
}`},{quizId:"218",title:"소수점 자리수",question:`실수를 입력받아서 소수점 둘째 자리까지 출력하세요
입력 예: 1.12345
단, System.out.printf() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/double\s+\w+\s*=\s*\w+\.nextDouble\s*\(\s*\)/,msg:"실수 입력 받기"},{target:"code1",regex:/printf\s*\(\s*["']%\.2f["']\s*,\s*\w+\s*\)/,msg:"소수점 2자리 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double num = sc.nextDouble();

        System.out.printf("%.2f", num);
    }
}`},{quizId:"219",title:"정수 입력 조건",question:`정수 0 을 입력받아서 아래와 같이 출력하세요
입력 예: 0
출력 예: 0
단, Scanner 와 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력 받기"},{target:"code1",regex:/println\s*\(\s*0\s*\)|println\s*\(\s*\w+\s*\)/,msg:"0 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        System.out.println(num);
    }
}`},{quizId:"2110",title:"자바 특징 서술",question:`여러분은 기술면접에서 아래와 같은 질문을 받았습니다
자바의 특징은 무엇인가요?
자유롭게 작성해 보세요
(힌트: 객체지향, JVM, Garbage Collection, OOP)`,inputs:["code1"],grading:[{target:"code1",regex:/객체지향|OOP/i,msg:"객체지향 또는 OOP"},{target:"code1",regex:/JVM/i,msg:"JVM 언급"},{target:"code1",regex:/garbage\s*collection/i,msg:"Garbage Collection 언급"},{target:"code1",regex:/.+/,msg:"내용 작성"}],answer:`자바의 특징은 객체지향(OOP) 언어이며 JVM 기반으로 동작합니다
또한 Garbage Collection을 통해 메모리를 자동으로 관리합니다`},{quizId:"311",title:"if 퀴즈",question:`정수 a 가 있습니다
a 가 90 이상이면 "A" 를 출력하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+a\s*=/,msg:"a 변수 선언"},{target:"code1",regex:/if\s*\(\s*a\s*>=\s*90\s*\)/,msg:"조건식 작성"},{target:"code1",regex:/println\s*\(\s*["']A["']\s*\)/,msg:"A 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int a = 90;

        if (a >= 90) {
            System.out.println("A");
        }
    }
}`},{quizId:"312",title:"if else 퀴즈",question:`정수 a 가 있습니다
a 가 90 이상이면 "A" 를 출력하세요
아니면 "C" 를 출력하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+a\s*=/,msg:"a 변수 선언"},{target:"code1",regex:/if\s*\(\s*a\s*>=\s*90\s*\)/,msg:"조건식 작성"},{target:"code1",regex:/else/,msg:"else 사용"},{target:"code1",regex:/println\s*\(\s*["']A["']\s*\)/,msg:"A 출력"},{target:"code1",regex:/println\s*\(\s*["']C["']\s*\)/,msg:"C 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int a = 85;

        if (a >= 90) {
            System.out.println("A");
        } else {
            System.out.println("C");
        }
    }
}`},{quizId:"313",title:"if else if 퀴즈",question:`정수 a 가 있습니다
a 가 90 초과이면 "A" 를 출력하세요
또한 a 가 90 이면 "B" 를 출력하세요
모두 아니면 "C" 를 출력하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+a\s*=/,msg:"a 변수 선언"},{target:"code1",regex:/if\s*\(\s*a\s*>\s*90\s*\)/,msg:"90 초과 조건"},{target:"code1",regex:/else\s+if\s*\(\s*a\s*==\s*90\s*\)/,msg:"90 동일 조건"},{target:"code1",regex:/else/,msg:"else 사용"},{target:"code1",regex:/println\s*\(\s*["']A["']\s*\)/,msg:"A 출력"},{target:"code1",regex:/println\s*\(\s*["']B["']\s*\)/,msg:"B 출력"},{target:"code1",regex:/println\s*\(\s*["']C["']\s*\)/,msg:"C 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int a = 90;

        if (a > 90) {
            System.out.println("A");
        } else if (a == 90) {
            System.out.println("B");
        } else {
            System.out.println("C");
        }
    }
}`},{quizId:"314",title:"3항 연산자",question:`정수 a 가 있습니다
a 가 90 이상이면 "A" 를 출력하세요
아니면 "C" 를 출력하세요
단, 3항 연산자를 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+a\s*=/,msg:"a 변수 선언"},{target:"code1",regex:/\?\s*["']A["']\s*:\s*["']C["']/,msg:"3항 연산자 사용"},{target:"code1",regex:/println\s*\(/,msg:"출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int a = 85;

        System.out.println(a >= 90 ? "A" : "C");
    }
}`},{quizId:"321",title:"for 반복문",question:`홍길동을 10번 출력하세요
단, for문과 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/for\s*\(/,msg:"for문 사용"},{target:"code1",regex:/<\s*10/,msg:"10번 반복 조건"},{target:"code1",regex:/println\s*\(\s*["']홍길동["']\s*\)/,msg:"홍길동 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.println("홍길동");
        }
    }
}`},{quizId:"322",title:"누적합",question:`1부터 100까지의 합을 구해서 출력하세요
단, for문과 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/for\s*\(/,msg:"for문 사용"},{target:"code1",regex:/int\s+sum\s*=\s*0/,msg:"누적 변수 선언"},{target:"code1",regex:/sum\s*\+=\s*i/,msg:"누적합 계산"},{target:"code1",regex:/println\s*\(\s*sum\s*\)/,msg:"결과 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int sum = 0;

        for (int i = 1; i <= 100; i++) {
            sum += i;
        }

        System.out.println(sum);
    }
}`},{quizId:"323",title:"while 반복문",question:`홍길동을 10번 출력하세요
단, while문과 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/while\s*\(/,msg:"while문 사용"},{target:"code1",regex:/int\s+\w+\s*=\s*0/,msg:"초기값 설정"},{target:"code1",regex:/<\s*10/,msg:"10번 반복 조건"},{target:"code1",regex:/\w+\s*\+\+/,msg:"증가식 작성"},{target:"code1",regex:/println\s*\(\s*["']홍길동["']\s*\)/,msg:"홍길동 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int i = 0;

        while (i < 10) {
            System.out.println("홍길동");
            i++;
        }
    }
}`},{quizId:"324",title:"구구단 3단",question:`구구단 3단을 출력하세요
단, 반복문과 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/for\s*\(|while\s*\(/,msg:"반복문 사용"},{target:"code1",regex:/3\s*\*\s*\w+/,msg:"3단 계산"},{target:"code1",regex:/println\s*\(/,msg:"출력"}],answer:`public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 9; i++) {
            System.out.println("3 * " + i + " = " + (3 * i));
        }
    }
}`},{quizId:"325",title:"구구단 확장",question:`구구단 12단부터 19단까지 출력하세요
단, 2중 반복문과 System.out.println() 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/for\s*\(.*\)\s*\{[\s\S]*for\s*\(/,msg:"2중 반복문 사용"},{target:"code1",regex:/12/,msg:"시작 단 12"},{target:"code1",regex:/19/,msg:"끝 단 19"},{target:"code1",regex:/println\s*\(/,msg:"출력"}],answer:`public class Main {
    public static void main(String[] args) {
        for (int dan = 12; dan <= 19; dan++) {
            for (int i = 1; i <= 9; i++) {
                System.out.println(dan + " * " + i + " = " + (dan * i));
            }
        }
    }
}`},{quizId:"326",title:"무한 반복 break",question:`정수 j 는 10부터 시작합니다
j 는 1씩 증가합니다
j 가 20이 되면 반복문을 중단하세요
10부터 중단될 때까지의 값을 출력하세요
단, 무한 반복문과 break 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/int\s+j\s*=\s*10/,msg:"초기값 설정"},{target:"code1",regex:/while\s*\(\s*true\s*\)/,msg:"무한 반복문 사용"},{target:"code1",regex:/if\s*\(\s*j\s*==\s*20\s*\)/,msg:"종료 조건"},{target:"code1",regex:/break\s*;/,msg:"break 사용"},{target:"code1",regex:/println\s*\(\s*j\s*\)/,msg:"값 출력"},{target:"code1",regex:/j\s*\+\+/,msg:"증가식"}],answer:`public class Main {
    public static void main(String[] args) {
        int j = 10;

        while (true) {
            if (j == 20) {
                break;
            }

            System.out.println(j);
            j++;
        }
    }
}`},{quizId:"327",title:"continue 사용",question:`1부터 5까지 출력하세요
단, 2는 제외하고 출력하세요
반복문과 continue 를 사용하세요`,inputs:["code1"],grading:[{target:"code1",regex:/for\s*\(|while\s*\(/,msg:"반복문 사용"},{target:"code1",regex:/if\s*\(\s*\w+\s*==\s*2\s*\)/,msg:"2 조건 체크"},{target:"code1",regex:/continue\s*;/,msg:"continue 사용"},{target:"code1",regex:/println\s*\(/,msg:"출력"}],answer:`public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 2) {
                continue;
            }
            System.out.println(i);
        }
    }
}`},{quizId:"411",title:"홀짝 판별",question:`정수를 입력받아서 홀수이면 "odd", 짝수이면 "even" 을 출력하세요
단, 어떤 수라도 입력될 수 있습니다
입력 예: 2`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력"},{target:"code1",regex:/%\s*2\s*==\s*0/,msg:"짝수 조건"},{target:"code1",regex:/println\s*\(\s*["']even["']\s*\)/,msg:"even 출력"},{target:"code1",regex:/println\s*\(\s*["']odd["']\s*\)/,msg:"odd 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        if (num % 2 == 0) {
            System.out.println("even");
        } else {
            System.out.println("odd");
        }
    }
}`},{quizId:"412",title:"3의 배수 판별",question:`정수를 입력받아서 3의 배수이면 "yes", 아니면 "no" 를 출력하세요
단, 어떤 수라도 입력될 수 있습니다
입력 예: 2`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력"},{target:"code1",regex:/%\s*3\s*==\s*0/,msg:"3의 배수 조건"},{target:"code1",regex:/println\s*\(\s*["']yes["']\s*\)/,msg:"yes 출력"},{target:"code1",regex:/println\s*\(\s*["']no["']\s*\)/,msg:"no 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        if (num % 3 == 0) {
            System.out.println("yes");
        } else {
            System.out.println("no");
        }
    }
}`},{quizId:"413",title:"문자열 비교",question:`문자열을 입력받아서 Hello 이면 "World" 를 출력하세요
아니면 아무것도 출력하지 마세요
입력 예: Hello`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next(Line)?\s*\(\s*\)/,msg:"문자열 입력"},{target:"code1",regex:/\.equals\s*\(\s*["']Hello["']\s*\)/,msg:"문자열 비교"},{target:"code1",regex:/println\s*\(\s*["']World["']\s*\)/,msg:"World 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        if (str.equals("Hello")) {
            System.out.println("World");
        }
    }
}`},{quizId:"414",title:"문장 비교",question:`문자열을 입력받아서 "Hello World" 와 같으면 "yes" 를 출력하세요
아니면 "no" 를 출력하세요
입력 예: Hello World`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.nextLine\s*\(\s*\)/,msg:"문장 입력"},{target:"code1",regex:/\.equals\s*\(\s*["']Hello World["']\s*\)/,msg:"문장 비교"},{target:"code1",regex:/println\s*\(\s*["']yes["']\s*\)/,msg:"yes 출력"},{target:"code1",regex:/println\s*\(\s*["']no["']\s*\)/,msg:"no 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        if (str.equals("Hello World")) {
            System.out.println("yes");
        } else {
            System.out.println("no");
        }
    }
}`},{quizId:"415",title:"조건 분기",question:`정수를 입력받아서
1이면 "1" 출력
2이면 "2" 출력
모두 아니면 "3" 출력하세요
입력 예: 2`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력"},{target:"code1",regex:/if\s*\(\s*\w+\s*==\s*1\s*\)/,msg:"1 조건"},{target:"code1",regex:/else\s+if\s*\(\s*\w+\s*==\s*2\s*\)/,msg:"2 조건"},{target:"code1",regex:/else/,msg:"else 사용"},{target:"code1",regex:/println\s*\(\s*["']1["']\s*\)/,msg:"1 출력"},{target:"code1",regex:/println\s*\(\s*["']2["']\s*\)/,msg:"2 출력"},{target:"code1",regex:/println\s*\(\s*["']3["']\s*\)/,msg:"3 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        if (num == 1) {
            System.out.println("1");
        } else if (num == 2) {
            System.out.println("2");
        } else {
            System.out.println("3");
        }
    }
}`},{quizId:"416",title:"입력 반복 출력",question:`문자열을 입력받아서 입력한 값을 5번 출력하세요
단, 반복문과 System.out.println() 사용하세요
입력 예: Hello`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next(Line)?\s*\(\s*\)/,msg:"문자열 입력"},{target:"code1",regex:/for\s*\(|while\s*\(/,msg:"반복문 사용"},{target:"code1",regex:/<\s*5/,msg:"5번 반복"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        for (int i = 0; i < 5; i++) {
            System.out.println(str);
        }
    }
}`},{quizId:"417",title:"숫자 반복 출력",question:`정수를 입력받아서 입력한 수를 5번 출력하세요
단, 반복문과 System.out.println() 사용하세요
입력 예: 5`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력"},{target:"code1",regex:/for\s*\(|while\s*\(/,msg:"반복문 사용"},{target:"code1",regex:/<\s*5/,msg:"5번 반복"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        for (int i = 0; i < 5; i++) {
            System.out.println(num);
        }
    }
}`},{quizId:"418",title:"숫자만큼 문자열 반복 출력",question:`첫 번째 입력은 숫자, 두 번째 입력은 문자열입니다.
첫 번째 숫자만큼 두 번째 문자열을 반복 출력하세요
단, 반복문과 System.out.println() 사용하세요
입력 예: 5 Hello`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"첫 번째 숫자 입력"},{target:"code1",regex:/String\s+\w+\s*=\s*\w+\.next(Line)?\s*\(\s*\)/,msg:"두 번째 문자열 입력"},{target:"code1",regex:/for\s*\(|while\s*\(/,msg:"반복문 사용"},{target:"code1",regex:/<\s*\w+/,msg:"반복 횟수 제어"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"입력 문자열 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        String str = sc.next();

        for (int i = 0; i < n; i++) {
            System.out.println(str);
        }
    }
}`},{quizId:"419",title:"숫자 감소 반복 출력",question:`정수를 입력받아서 입력된 숫자에서 1씩 줄여가며 출력하세요
단, 반복문과 System.out.println() 사용하세요
입력 예: 5`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력"},{target:"code1",regex:/for\s*\(|while\s*\(/,msg:"반복문 사용"},{target:"code1",regex:/>\s*0/,msg:"1씩 감소 반복 조건"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for (int i = n; i > 0; i--) {
            System.out.println(i);
        }
    }
}`},{quizId:"4110",title:"2의 배수 출력",question:`정수를 입력받아서 1부터 입력된 숫자까지 2의 배수만 출력하세요
단, 반복문과 System.out.println() 사용하세요
입력 예: 10`,inputs:["code1"],grading:[{target:"code1",regex:/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\(\s*System\.in\s*\)/,msg:"Scanner 생성"},{target:"code1",regex:/int\s+\w+\s*=\s*\w+\.nextInt\s*\(\s*\)/,msg:"정수 입력"},{target:"code1",regex:/for\s*\(|while\s*\(/,msg:"반복문 사용"},{target:"code1",regex:/>=\s*1/,msg:"1부터 시작 반복"},{target:"code1",regex:/if\s*\(\s*\w+\s*%\s*2\s*==\s*0\s*\)/,msg:"2의 배수 조건"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"값 출력"}],answer:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }
}`},{quizId:"511",title:"문자열 비교",question:`아래와 같이 변수에 문자열이 저장되어 있습니다.
같은지 비교하는 코드를 작성하세요
a = "장길산"
b = new String("장길산")
단, System.out.println() 사용
힌트: equals() 사용`,inputs:["code1"],grading:[{target:"code1",regex:/String\s+a\s*=\s*"장길산"/,msg:"a 변수 선언"},{target:"code1",regex:/String\s+b\s*=\s*new\s+String\s*\(\s*"장길산"\s*\)/,msg:"b 변수 선언"},{target:"code1",regex:/println\s*\(\s*a\.equals\s*\(\s*b\s*\)\s*\)/,msg:"equals() 사용 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        String a = "장길산";
        String b = new String("장길산");

        System.out.println(a.equals(b));
    }
}`},{quizId:"512",title:"배열 값 출력",question:`아래와 같이 배열이 있습니다.
3번째 숫자를 화면에 표시하세요
int[] a = {1, 2, 3, 4, 5}
단, System.out.println() 사용`,inputs:["code1"],grading:[{target:"code1",regex:/int\s*\[\]\s+a\s*=\s*\{\s*1,\s*2,\s*3,\s*4,\s*5\s*\}/,msg:"배열 선언"},{target:"code1",regex:/println\s*\(\s*a\[2\]\s*\)/,msg:"3번째 값 출력 (인덱스 2)"}],answer:`public class Main {
    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4, 5};

        System.out.println(a[2]);
    }
}`},{quizId:"513",title:"실수 배열 출력 (new 연산자)",question:`실수 배열을 아래와 같이 생성하세요.
1번째 값: 0.1, 2번째 값: 0.2, 3번째 값: 0.3
3번째 값을 화면에 표시하세요
단, new 연산자를 사용하고 System.out.println() 사용`,inputs:["code1"],grading:[{target:"code1",regex:/double\s*\[\]\s+\w+\s*=\s*new\s+double\s*\[\s*3\s*\]/,msg:"배열 선언 및 new 사용"},{target:"code1",regex:/\w+\[0\]\s*=\s*0\.1/,msg:"첫 번째 값 할당"},{target:"code1",regex:/\w+\[1\]\s*=\s*0\.2/,msg:"두 번째 값 할당"},{target:"code1",regex:/\w+\[2\]\s*=\s*0\.3/,msg:"세 번째 값 할당"},{target:"code1",regex:/println\s*\(\s*\w+\[2\]\s*\)/,msg:"3번째 값 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        double[] a = new double[3];
        a[0] = 0.1;
        a[1] = 0.2;
        a[2] = 0.3;

        System.out.println(a[2]);
    }
}`},{quizId:"514",title:"2차원 배열 값 출력",question:`2차원 배열은 배열 안에 배열을 의미합니다.
아래와 같이 배열이 있습니다.
int[][] a = {{1, 2}, {3, 4}}
a[1][0] 값을 화면에 표시하세요
단, System.out.println() 사용`,inputs:["code1"],grading:[{target:"code1",regex:/int\s*\[\]\[\]\s+\w+\s*=\s*\{\s*\{\s*1,\s*2\s*\},\s*\{\s*3,\s*4\s*\}\s*\}/,msg:"2차원 배열 선언"},{target:"code1",regex:/println\s*\(\s*a\[1\]\[0\]\s*\)/,msg:"a[1][0] 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int[][] a = {{1, 2}, {3, 4}};

        System.out.println(a[1][0]);
    }
}`},{quizId:"515",title:"2차원 배열 (new 연산자)",question:`아래 배열 예제를 new 연산자를 이용하여 작성하세요.
int[][] a = {{1, 2}, {3, 4}}
a[1][0] 값을 화면에 표시하세요
단, System.out.println() 사용`,inputs:["code1"],grading:[{target:"code1",regex:/int\s*\[\]\[\]\s+\w+\s*=\s*new\s+int\s*\[\s*2\s*\]\s*\[\s*2\s*\]/,msg:"2차원 배열 선언 (new 사용)"},{target:"code1",regex:/\w+\[0\]\[0\]\s*=\s*1/,msg:"첫 번째 값 할당"},{target:"code1",regex:/\w+\[0\]\[1\]\s*=\s*2/,msg:"두 번째 값 할당"},{target:"code1",regex:/\w+\[1\]\[0\]\s*=\s*3/,msg:"세 번째 값 할당"},{target:"code1",regex:/\w+\[1\]\[1\]\s*=\s*4/,msg:"네 번째 값 할당"},{target:"code1",regex:/println\s*\(\s*a\[1\]\[0\]\s*\)/,msg:"a[1][0] 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int[][] a = new int[2][2];
        a[0][0] = 1;
        a[0][1] = 2;
        a[1][0] = 3;
        a[1][1] = 4;

        System.out.println(a[1][0]);
    }
}`},{quizId:"516",title:"배열 순회 출력",question:`아래 배열이 있습니다.
int[] a = {10, 20, 30, 40, 50}
배열의 값을 화면에 순서대로 표시하세요
단, 반복문과 System.out.println() 사용`,inputs:["code1"],grading:[{target:"code1",regex:/int\s*\[\]\s+\w+\s*=\s*\{\s*10,\s*20,\s*30,\s*40,\s*50\s*\}/,msg:"배열 선언"},{target:"code1",regex:/for\s*\(\s*int\s+\w+\s*=\s*0;\s*\w+\s*<\s*a\.length;\s*\+\+\w+\s*\)/,msg:"반복문 사용"},{target:"code1",regex:/println\s*\(\s*a\[\w+\]\s*\)/,msg:"배열 요소 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int[] a = {10, 20, 30, 40, 50};

        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}`},{quizId:"517",title:"배열 총합 계산",question:`a 변수에 학점 배열이 있습니다.
각 학점의 총점을 구하세요
단, 반복문과 누적합 알고리즘을 사용하세요
int[] a = {10, 20, 30, 40, 50}
System.out.println() 사용`,inputs:["code1"],grading:[{target:"code1",regex:/int\s*\[\]\s+\w+\s*=\s*\{\s*10,\s*20,\s*30,\s*40,\s*50\s*\}/,msg:"배열 선언"},{target:"code1",regex:/int\s+\w+\s*=\s*0/,msg:"누적합 변수 선언"},{target:"code1",regex:/for\s*\(\s*int\s+\w+\s*=\s*0;\s*\w+\s*<\s*a\.length;\s*\+\+\w+\s*\)/,msg:"반복문 사용"},{target:"code1",regex:/\w+\s*\+=\s*a\[\w+\]/,msg:"배열 요소 누적합"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"총합 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int[] a = {10, 20, 30, 40, 50};
        int sum = 0;

        for (int i = 0; i < a.length; i++) {
            sum += a[i];
        }

        System.out.println(sum);
    }
}`},{quizId:"521",title:"배열 출력 (향상된 For문)",question:`a 배열이 있습니다.
int[] a = {10, 20, 30, 40, 50}
향상된 for문을 이용하여 배열의 값을 화면에 표시하세요
단, System.out.println() 사용
`,inputs:["code1"],grading:[{target:"code1",regex:/int\s*\[\]\s+\w+\s*=\s*\{\s*10,\s*20,\s*30,\s*40,\s*50\s*\}/,msg:"배열 선언"},{target:"code1",regex:/for\s*\(\s*int\s+\w+\s*:\s*a\s*\)/,msg:"향상된 for문 사용"},{target:"code1",regex:/println\s*\(\s*\w+\s*\)/,msg:"배열 요소 출력"}],answer:`public class Main {
    public static void main(String[] args) {
        int[] a = {10, 20, 30, 40, 50};

        for (int num : a) {
            System.out.println(num);
        }
    }
}`},{quizId:"611",title:"클래스 필드 출력",question:`Taxi 클래스를 만들고 실행클래스에서 필드 값을 표시하세요.
speed 값을 100으로 수정하여 화면에 표시하세요.
실행 클래스명: TaxiApplication
----------------------------------------------------------------------
일반 클래스: Taxi
변수:
  - company="기아자동차"
  - speed=50
`,inputs:["code1","code2"],grading:[{target:"code1",regex:/class\s+Taxi\s*\{/,msg:"Taxi 클래스 선언"},{target:"code1",regex:/String\s+company\s*=/,msg:"company 필드 선언"},{target:"code1",regex:/int\s+speed\s*=/,msg:"speed 필드 선언"},{target:"code2",regex:/TaxiApplication/,msg:"실행 클래스 선언"},{target:"code2",regex:/\w+\.speed\s*=\s*100/,msg:"speed 값 수정"},{target:"code2",regex:/println\s*\(\s*\w+\.speed\s*\)/,msg:"speed 값 출력"}],answer:`// Taxi.java
class Taxi {
    String company="기아자동차"
    int speed = 50;
}

// TaxiApplication.java
public class TaxiApplication {
    public static void main(String[] args) {
        Taxi t = new Taxi();
        t.speed = 100;

        System.out.println(t.speed);
    }
}`}];function D(){const{menuId:m,chapterId:q,sectionId:f,quizId:p}=C(),S=H();let n=[],d=[];m==="java"?(n=L,d=k):(n=[],d=[]);const a=n.findIndex(e=>e.quizId===p),x=n[a],t=d.find(e=>e.quizId===p),[w,v]=u.useState(()=>{if(!t)return{};const e={};return t.inputs.forEach(i=>e[i]=""),e}),[b,I]=u.useState(""),[y,h]=u.useState(!1),z=(e,i)=>{v(r=>({...r,[e]:i}))},j=()=>{if(!t)return;let e=0;const i=[];t.grading.forEach(l=>{const N=w[l.target]||"";l.regex.test(N)?(e++,i.push("✔ "+l.msg)):i.push("❌ "+l.msg)});let r="";e===t.grading.length?r="✅ 100점":e>=Math.ceil(t.grading.length/2)?r="🟡 부분 정답":r="❌ 다시 시도",I(r+`

`+i.join(`
`))},c=T.find(e=>e.menuId===m);if(!c)return s.jsx("div",{children:"존재하지 않는 과목입니다."});const o=c.chapters.find(e=>e.chapterId===Number(q));if(!o)return s.jsx("div",{children:"존재하지 않는 챕터입니다."});const g=o.sections.find(e=>e.sectionId===Number(f));if(!g)return s.jsx("div",{children:"존재하지 않는 섹션입니다."});const M=()=>{a>0&&Number(n[a-1].quizId[1])===g.sectionId&&S(`/${c.menuId}/chapter/${o.chapterId}/section/${g.sectionId}/quiz/${n[a-1].quizId}`)},A=()=>{a<n.length-1&&Number(n[a+1].quizId[1])===g.sectionId&&S(`/${c.menuId}/chapter/${o.chapterId}/section/${g.sectionId}/quiz/${n[a+1].quizId}`)};return!t||!x?s.jsx("div",{className:"p-6",children:"문제를 찾을 수 없습니다."}):s.jsx("div",{className:"bg-gray-100 min-h-screen flex justify-center py-10",children:s.jsxs("div",{className:"bg-white w-full max-w-3xl rounded-xl shadow-lg p-6",children:[s.jsxs("h2",{className:"font-bold mb-4 bg-blue-50 p-5",children:[c.title," - ",o.title," - ",g.title," - 퀴즈 ",x.title]}),s.jsxs("h2",{className:"text-xl font-bold mb-4",children:["📘 ",t.title||`퀴즈 ${t.quizId}`]}),s.jsx("p",{className:"text-left mb-4 whitespace-pre-line",children:t.question}),t.inputs.map((e,i)=>s.jsxs("div",{className:"mb-4",children:[s.jsxs("h3",{className:"font-semibold",children:["📦 코드 영역 ",i+1]}),s.jsx("textarea",{className:"w-full h-40 mt-2 p-2 border rounded font-mono",value:w[e],onChange:r=>z(e,r.target.value)})]},e)),s.jsxs("div",{className:"mt-4 flex gap-3 flex-wrap",children:[s.jsx("button",{onClick:j,className:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded",children:"채점하기"}),s.jsx("button",{onClick:()=>h(!y),className:"bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded",children:"정답 보기"}),s.jsx("button",{onClick:M,className:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50",children:"이전"}),s.jsx("button",{onClick:A,className:"bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50",children:"다음"})]}),b&&s.jsx("div",{className:"mt-4 font-bold whitespace-pre-line text-left",children:b}),y&&s.jsx("div",{className:"mt-4 bg-black text-green-400 p-4 rounded text-left whitespace-pre-wrap font-mono",children:t.answer||"정답이 등록되지 않았습니다."})]})})}export{D as default};

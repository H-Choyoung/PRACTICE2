# python-10 | 번역기 앱을 만들어보자

# 프로젝트 생성
# cli 명령 : pip install 지원하는 라이브러리 이름 
# pip install googletrans==4.0.0-rc1
  # 부득이하게 번역기 라이브러리의 버전 지정
  # 보통은 == <-- 이퀄표시는 사용하지 않으나 버전지정할 때 사용

import googletrans # 설치한 모듈 가져오기

translate_worker = googletrans.Translator()
# 설치한 모듈의 생성자함수에 접근한 데이터를 translate_worker라는 변수에 가리킴

input_data = input('한글 to 영어 >>')
# REPL 환경에서 입력 데이터를 받음 

result_value = translate_worker.translate(input_data, dest='en')
# 액세스한 생성자함수에 내장된 translate() 메서드 호출

print(result_value.text)
# 결과물 출력
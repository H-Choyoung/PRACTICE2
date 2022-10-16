# 파이썬이 말하는 정의(definition), 함수

# 시사점 : 기본적인 형태의 연산과 조립이 가능한 언어라면 어떤 개발언어든 html을 제작할 수 있다. => 언어가 바뀌어도 논리와 알고리즘은 동일하다.

friut_list = ["포도", "사과", "배", "샤인머스캣", "귤"]
# JS의 배열같은 형태의 데이터타입을 파이썬에서는 list(목록)이라는 직관적인 이름으로 부른다.

open_li_tag = "<li>"
close_li_tag = "</li>"
# 입문이므로 가독성을 위해 따로 전역변수 설정

def elem_maker():
    tag_list = []
    for text_node in friut_list:
        tag_list.append(open_li_tag)
        tag_list.append(text_node)
        tag_list.append(close_li_tag)
    return " ".join(tag_list)

# def = definition "정의"한다는 의미로 사용되었는데, js의 func()함수의 역할과 같다.본 elem_maker()함수는 js에서 일련의 문자열처리로 html태그를 생성한 방식을 파이썬 방식으로 그대로 진행했다
# js에서도 지원하는 for in문을 활용,'인자를 전달받은' 형태로 for loop를 진행한 것을 확인할 수 있다.
# 여기서 사용된 append() 함수는 js의 push()와 비슷하다.
# join() 함수의 목적인 js와 동일하지만, 사용형태가 매우 특이하다.
# " ": 띄어쓰기가 구분자, join()의 인수(arg)가 해당 배열인 형태이다.

print(elem_maker())

//node.js-8 | 누울자리 보고 앉기 : login-worker
//node.js는 쓰기(write) 권한이 존재하므로, '문서를 찍어내는 기계'를 만들어낼 수 있다. 훈련 간에는 이것을 'server'라고 통칭하고 있다. 여기서 찍혀질 문서 어느 부분에 입력데이터를 받는 태그가 존재한다면 어떻게 처리될까?

const element = {
  header: '<header> this is header </header>',
  body: '<body>this is body</body>',
  footer: '<footer>this is footer</footer>',
  form: `
    <form id='log-in-form' method='GET'>
      <input type='text' name='username' placeholder='username' />
      <input type='text' name='password' placeholder='password />
    </form>
    <button type='submit' form='log-in=form'>click!</button>
  `
}
const main = `
  ${element.header}
  ${element.form}
  ${element.body}
  ${element.footer}
`
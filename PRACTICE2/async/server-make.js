
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
//컴포넌트
const main = `
  ${element.header}
  ${element.form}
  ${element.body}
  ${element.footer}
`;

http.craeteServer((request, response) => {
  //문서를 찍어내는 response 메서드들
  //'이제 문서를 만들거다'
})
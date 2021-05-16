<script>
  let active = true;
  let valid = false;
  let camelCase = true;

  function multi() {
    return 'active multiple-class';
  }
</script>

<main>
  <div class={active ? 'active' : ''}>3항 연산자 보간</div>

  <!-- active는 클래스 이름, {active} 데이터 -->
  <div class:active={active}>Class 지시어(Directive) 바인딩</div>

  <!-- 단축어 사용 조건: 클래스 이름과 데이터 이름이 같을 때만 생략 가능하다! -->
  <div class:active>Class 지시어 바인딩 단축 형태</div>

  <div class:active class:valid class:camelCase class:camel-case={camelCase}>
    다중(Mutiple) Class 지시어 바인딩
  </div>

  <!-- 함수는 실행되어야 한다. -->
  <div class={multi()}>함수 실행</div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

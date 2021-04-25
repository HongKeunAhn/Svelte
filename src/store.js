import { writable } from 'svelte/store';

/**
 * store라는 개념이 svelte에 있는데 
 * writable이라는 쓰기 가능한 형태의 어떤 함수를 쓸 수 있는 내용을 가져와서
 * 빈문자열을 쓰기 가능하다, 쓰기 가능한 어떤 형태로 할당하겠다.
 * 
 * storeName은 객체이다. 외부에서 쓰기 가능하고 빈문자열로 초기화 시켜서 사용하겠다.
 */ 
export let storeName = writable('Keu.ni');
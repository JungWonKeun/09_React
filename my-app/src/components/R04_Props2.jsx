import React from 'react';

import '../css/Props.css';

const PropsEx2 = (props) => {

  // 구조 분해 할당(객체{})
  let {name, age, address, gender} = props;

  return(
    <>
      {/* react에서 class 속성은 'className'이라고 작성해야함! */}
      <ul className='info'>
        <li>이름 : {name}</li>
        <li>주소 : {address}</li>
        <li>성별 : {gender}</li>
        <li>
          나이 : {age}세,&nbsp; 
          {age < 20
          ? <span className='red'>미성년자 입니다</span>
          : <span className='green'>성인 입니다</span>
          }
        </li>
      </ul>    
    </>
  );
}

export default PropsEx2;  
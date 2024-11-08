import React, { useState } from 'react';

import TodoListContext from './contexts/TodoListContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  
  /* 상태 변수 선언 */

  // 회원 가입 버튼 열기/닫기 제어용 변수
  const [signUpView, setSignUpView] = useState(false);

  /* 로그인 한 회원 정보를 저장하는 변수 */
  const [loginMember, setLoginMember] = useState(null);

  /* 로그인 한 회원의 할 일 목록을 저장할 변수 */
  const [todoList, setTodoList] = useState([]);

  
  return (
    <TodoListContext.Provider value={{ loginMember, setLoginMember, todoList, setTodoList }}>

      <div className="app-container">
        {/* Left Side - 회원 가입 */}
        <div className="left-side">
          <button onClick={() => setSignUpView(!signUpView)} className="glow-on-hover">
            {signUpView ? '회원 가입 닫기' : '회원 가입 열기'}
          </button>
          {signUpView && (
            <div className="signup-wrapper">
              <SignUp />
            </div>
          )}
        </div>

        {/* Right Side - 로그인 */}
        <div className="right-side">
          <h1>Todo List</h1>
          <Login />
          <hr />
          {/* 로그인이 되어 있을 때 TodoList 컴포넌트 출력 */}
          {loginMember && <TodoList />}
        </div>
      </div>

    </TodoListContext.Provider>
  );
}

export default App;

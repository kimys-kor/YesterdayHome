import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Form = styled.form`
  width: 95%;

  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px 5px rgba(168, 165, 165, 0.2);

  input,
  button[type="submit"] {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #80d8ff;
    padding: 15px 25px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  button[type="submit"] {
    background: #40c4ff;

    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 20px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }
  button[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
  button:disabled {
    opacity: 0.4;
  }

  button[type="submit"]:hover {
    background: #80d8ff;

    transition: 0.3s all;
    cursor: pointer;
  }

  p {
    position: float;
    color: #80d8ff;
    font-size: 12px;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(watch("logindata"));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="아이디" {...register("logindata")} />

      <input
        type="password"
        placeholder="비밀번호"
        {...register("exampleRequired", { required: true })}
      />

      <button type="submit">로그인</button>
      {errors.exampleRequired && <p>비밀번호를 입력하세요</p>}
    </Form>
  );
}

export default Login;

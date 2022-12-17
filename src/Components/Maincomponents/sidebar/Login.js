import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Card = styled.div`
  width: 250px;
  text-align: center;

  margin: 0 auto;
  box-shadow: 4px 4px 4px 1px rgba(168, 165, 165, 0.2);

  .card_title {
    width: 100%;
    height: 40px;

    background-color: #6ec5ff;
    border-radius: 8px 8px 0 0;
    padding: 10px 24px 0;

    font-size: 19px;
    color: #ffffff;
  }

  .card_content {
    width: 100%;
    max-height: 230px;

    background-color: #f7f8fa;
    border-radius: 0 0 8px 8px;
    padding: 15px 10px;

    display: flex;
    flex-direction: column;
    align-item: center;
    text-align: center;
  }

  .card_content_item {
    display: flex;
    flex-direction: row;

    white-space: nowrap;
    line-height: 200%;
  }

  .hoticon {
    width: 1.7rem;
  }
`;

const Form = styled.form`
  max-width: 500px;
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

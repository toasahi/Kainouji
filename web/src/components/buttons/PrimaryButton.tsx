import { memo, VFC } from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  onclick: () => void;
};

export const PrimaryButton: VFC = memo(() => {
  return <SButton>畑を登録する</SButton>;
});

const SButton = styled.button`
  background-color: #fefefe;
  text-align: left;
  width: 200px;
  padding: 10px;
  padding-left: 25px;
  opacity: 90%;
  color: #491818;
  border: solid 1px #491818;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    width: 7px;
    height: 7px;
    border-top: solid 1px #491818;
    border-right: solid 1px #491818;
    position: absolute;
    right: 20px;
    top: 40%;
    transform: rotate(45deg);
  }

  &:hover {
    background-color: #491818;
    color: #fefefe;
    opacity: 100%;
  }

  &:hover::after {
    border-top: solid 1px #fefefe;
    border-right: solid 1px #fefefe;
  }
`;

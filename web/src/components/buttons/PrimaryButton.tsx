import { memo, VFC } from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  onClick: () => void;
  position: 'before' | 'after';
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, position } = props;
  return (
    <>
      {position === 'after' ? (
        <SButtonAfter onClick={onClick}>{children}</SButtonAfter>
      ) : (
        <SButtonBefore onClick={onClick}>{children}</SButtonBefore>
      )}
    </>
  );
});

const SButton = styled.button`
  background-color: #fefefe;
  text-align: left;
  width: 180px;
  padding: 10px;
  opacity: 90%;
  color: #491818;
  border: solid 1px #491818;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #491818;
    color: #fefefe;
    opacity: 100%;
  }
`;

const SButtonAfter = styled(SButton)`
  padding-left: 25px;

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

  &:hover::after {
    border-top: solid 1px #fefefe;
    border-right: solid 1px #fefefe;
  }
`;

const SButtonBefore = styled(SButton)`
  text-align: right;
  padding-right: 25px;

  &:before {
    content: '';
    width: 7px;
    height: 7px;
    border-bottom: solid 1px #491818;
    border-left: solid 1px #491818;
    position: absolute;
    left: 20px;
    top: 40%;
    transform: rotate(45deg);
  }

  &:hover::before {
    border-bottom: solid 1px #fefefe;
    border-left: solid 1px #fefefe;
  }
`;

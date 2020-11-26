import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: var(--white);
  max-width: 450px;
  line-height: 56px;
  margin-top: 64px;
`;

export const Form = styled.form`
  margin-top: 32px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 42px;
    padding: 0 32px;
    border: 0;
    border-radius: 25px 0 0 25px;

    color: var(--gray);
    background: var(--white);

    &::placeholder {
      color: var(--secgray);
    }
  }

  button {
    width: 210px;
    height: 42px;

    background: var(--secblue);
    color: var(--white);
    transition: background-color 0.2s;

    border-radius: 0px 25px 25px 0px;
    border: 0;
    font-weight: bold;

    &:hover {
      background: ${shade(0.2, '#71c2ff')};
    }
  }
`;

export const Books = styled.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  max-height: 22em;
  max-width: 12em;
  background-color: var(--white);
  border-radius: 6px;
  cursor: pointer;
  margin: 0 0.5em 2em 0.5em;
  position: relative;
  overflow: hidden;

  border-bottom: 5px groove var(--orange);
`;

export const CardImage = styled.div`
  overflow: hidden;
  height: 15em;
  width: 22em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  img {
    transition: 1s;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

export const CardContentDate = styled.div`
  margin-top: 8px;
  margin-left: 8px;

  max-width: 4ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  color: var(--secgray);
`;

export const CardContent = styled.div`
  margin-top: 8px;
  padding: 0 8px;
  color: var(--gray);
  text-align: left;

  max-width: 64ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  strong {
  }

  p {
    text-decoration: none;
    color: var(--secgray);
  }
`;

export const Details = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    margin-left: 16px;
    color: var(--gray);
  }
`;

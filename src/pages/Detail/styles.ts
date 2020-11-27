import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: var(--white);
  max-width: 450px;
  line-height: 56px;
`;

export const Container = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: var(--white);
    transition: 0.2s;

    &:hover {
      color: var(--orange);
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const BookDetail = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    h1 {
      font-size: 36px;
      color: var(--white);
      border-bottom: 5px solid var(--orange);
      border-bottom-right-radius: 5px;
      margin-bottom: 16px;
    }

    img {
      margin-top: 32px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom: 5px groove var(--orange);
    }

    div {
      margin-left: 24px;

      p {
        text-align: left;
        font-size: 18px;
        color: var(--white);
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 22px;
        color: var(--white);
      }
      span {
        font-weight: bold;
        display: block;
        margin-top: 4px;
        margin-bottom: 4px;
        color: var(--orange);
      }

      a {
        :link {
          font-size: 1em;
          font-weight: bold;
          text-decoration: none;
          color: var(--white);
        }

        :visited {
          color: var(--white);
          text-decoration: none;
        }

        :hover {
          color: var(--orange);
        }
      }
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  --blue: #2755ff;
  --secblue: #71c2ff;
  --gray: #202124;
  --secgray: #71757a;
  --orange: #fa784a;
  --red: #c53030;
  --white: #ffffff;

}

body {
  background: var(--blue);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root{
  max-width: 960px;
  margin: 0 auto;
  padding: 0px 20px;
}

button {
  cursor: pointer;
}

`;

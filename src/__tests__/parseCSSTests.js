import { parseCSS } from '../utils/parser';


it('formats CSS example from README', () => {
    const inputText = `
a:link, a:visited, a:hover, a:active {
    background-color: green;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}`;
    const expectedOutput = `
a:link, a:visited, a:hover, a:active {
  display: inline-block;
  padding: 10px 25px;

  background-color: green;
  color: white;

  text-align: center;
  text-decoration: none;
}`;
    expect(parseCSS(inputText)).toEqual(expectedOutput);
});

it('parse CSS works with spaceStr set to one space', () => {
  const inputText = `
a:link, a:visited, a:hover, a:active {
  background-color: green;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}`;
  const expectedOutput = `
a:link, a:visited, a:hover, a:active {
 display: inline-block;
 padding: 10px 25px;

 background-color: green;
 color: white;

 text-align: center;
 text-decoration: none;
}`;
  expect(parseCSS(inputText, ' ')).toEqual(expectedOutput);
});

it('parse CSS works with spaceStr set to one tab', () => {
  const inputText = `
a:link, a:visited, a:hover, a:active {
  background-color: green;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}`;
  const expectedOutput = `
a:link, a:visited, a:hover, a:active {
\tdisplay: inline-block;
\tpadding: 10px 25px;

\tbackground-color: green;
\tcolor: white;

\ttext-align: center;
\ttext-decoration: none;
}`;
  expect(parseCSS(inputText, '\t')).toEqual(expectedOutput);
});

it('parse CSS works with spaceStr set to one space', () => {
  const inputText = `
a:link, a:visited, a:hover, a:active {
  background-color: green;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}`;
  const expectedOutput = `
a:link, a:visited, a:hover, a:active {
 display: inline-block;
 padding: 10px 25px;

 background-color: green;
 color: white;

 text-align: center;
 text-decoration: none;
}`;
  expect(parseCSS(inputText, ' ')).toEqual(expectedOutput);
});

it('parse CSS works with spaceStr set to one tab', () => {
  const inputText = `
a:link, a:visited, a:hover, a:active {
  background-color: green;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}`;
  const expectedOutput = `
a:link, a:visited, a:hover, a:active {
\tdisplay: inline-block;
\tpadding: 10px 25px;

\tbackground-color: green;
\tcolor: white;

\ttext-align: center;
\ttext-decoration: none;
}`;
  expect(parseCSS(inputText, '\t')).toEqual(expectedOutput);
});

it('parse CSS works with spaceStr set to three spaces', () => {
  const inputText = `
a:link, a:visited, a:hover, a:active {
  background-color: green;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}`;
  const expectedOutput = `
a:link, a:visited, a:hover, a:active {
   display: inline-block;
   padding: 10px 25px;

   background-color: green;
   color: white;

   text-align: center;
   text-decoration: none;
}`;
  expect(parseCSS(inputText, '   ')).toEqual(expectedOutput);
});

it('parse CSS works with spaceStr set to three tabs', () => {
  const inputText = `
a:link, a:visited, a:hover, a:active {
  background-color: green;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}`;
  const expectedOutput = `
a:link, a:visited, a:hover, a:active {
\t\t\tdisplay: inline-block;
\t\t\tpadding: 10px 25px;

\t\t\tbackground-color: green;
\t\t\tcolor: white;

\t\t\ttext-align: center;
\t\t\ttext-decoration: none;
}`;
  expect(parseCSS(inputText, '\t\t\t')).toEqual(expectedOutput);
});
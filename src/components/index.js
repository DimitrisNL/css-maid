import styled from 'react-emotion';
import NumericInput from 'react-numeric-input';

export const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #77a1d3;
  background: linear-gradient(to top, #e684ae, #79cbca, #77a1d3);
`;

export const Header = styled('h1')`
  display: flex;
  padding: 0 2rem;
  margin: 0;
  height: 15%;

  justify-content: center;
  align-items: center;

  color: #fff;

  text-shadow: 1px 2px 2px black;
  font-size: 3rem;
`;

export const TextArea = styled('textarea')`
  border: 0;
  box-shadow: 0 0 1px 4px #ffffff80;
  overflow: auto;
  padding: 2rem;

  flex: 0 0 48%;

  color: #797979;

  font-family: 'Fira Code', Hack, Consolas, Menlo, Monaco, 'Andale Mono WT',
    'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
    'Nimbus Mono L', 'Courier New', Courier, monospace;
  font-size: 14px;

  border-radius: 8px;
  opacity: 0.9;
  outline: none;
  resize: none;
`;

export const ButtonsRow = styled('div')`
  display: flex;
  height: 15%;

  align-items: center;
`;

export const Button = styled('button')`
  padding: 0.75rem 1.25rem;
  border: 3px solid #ffffff90;
  margin: 0 1rem 0;

  background: ${props => props.selected ? '#ffffff60' : 'transparent'};
  color: #fff;

  text-shadow: 1px 1px 2px black;
  font-size: 1.1rem;

  transition: all 0.1s ease-in-out;

  cursor: pointer;
  border-radius: 8px;
  outline: none;

  &:hover {
    background: #ffffff20;
  }
  &:active {
    background: #ffffff50;
  }
`;

export const Container = styled('div')`
  display: flex;
  height: 70%;
  max-width: 1200px;
  width: 100%;

  justify-content: space-between;
`;

export const StyledNumericInput = styled(NumericInput)`
  font-size: 36px !important;
  width: 100px;
`;

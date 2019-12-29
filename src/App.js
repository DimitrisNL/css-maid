import React, { Component } from 'react';
import { injectGlobal } from 'react-emotion';
import GithubCorner from 'react-github-corner';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { parseCSS } from './utils/parser';
import {
  Wrapper,
  Header,
  TextArea,
  Button,
  Container,
  ButtonsRow,
  StyledNumericInput,
} from './components';

const whitespaceType = Object.freeze({
  space: ' ',
  tab: '\t',
});

class App extends Component {
  state = {
    userStyles: '',
    formattedStyles: '',
    numberOfIndents: 2,
    indentType: whitespaceType.space,
  };

  handleInput = e => {
    this.setState({ userStyles: e.target.value });
  };

  handleNumberOfIndentsChange = valueAsNumber => {
    if (!isFinite(valueAsNumber) || valueAsNumber < 0) return;
    this.setState({ numberOfIndents: valueAsNumber }, this.formatCSS);
  };

  formatCSS = () => {
    if (this.state.userStyles.trim() === '') return false;

    const indentString = this.state.indentType.repeat(this.state.numberOfIndents);
    const formattedStyles = parseCSS(this.state.userStyles, indentString);
    this.setState({ formattedStyles });
  };

  changeIndentType = indentType => {
    this.setState({ indentType }, this.formatCSS);
  };
  selectSpaces = () => this.changeIndentType(whitespaceType.space);
  selectTabs = () => this.changeIndentType(whitespaceType.tab);

  render() {
    return (
      <Wrapper>
        <Header>CSS MAID</Header>
        <Container>
          <TextArea
            placeholder="Your CSS goes here"
            value={this.state.userStyles}
            onChange={this.handleInput}
          />
          <TextArea
            placeholder="Any changes will appear here"
            value={this.state.formattedStyles}
          />
        </Container>
        <ButtonsRow>
          <Button onClick={this.formatCSS}>Format</Button>

          <CopyToClipboard text={this.state.formattedStyles}>
            <Button>Copy to clipboard</Button>
          </CopyToClipboard>

          <StyledNumericInput min={0} max={100} onChange={this.handleNumberOfIndentsChange} value={this.state.numberOfIndents} />
          <Button onClick={this.selectSpaces} selected={this.state.indentType === whitespaceType.space}>Spaces</Button>
          <Button onClick={this.selectTabs} selected={this.state.indentType === whitespaceType.tab}>Tabs</Button>
          
        </ButtonsRow>

        <GithubCorner
          href="https://github.com/DimitrisNL/css-maid"
          bannerColor="#e684ae"
        />
      </Wrapper>
    );
  }
}

export default App;

injectGlobal`
  * {
    box-sizing:border-box;
  }

  body {
    margin: 0;
    padding: 0;

    height: 100vh;
    width: 100vw;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

import {Component} from 'react'
import {
  MemeHeading,
  InputLabel,
  Input,
  InputContainer,
  BackgroundContainer,
  Container,
  FontSizesDropdownList,
  Option,
  GenerateButton,
  FormContainer,
  BgImage,
  FormAndImageContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      imageUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state

    console.log(
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      imageUrl,
      topText,
      bottomText,
      fontSize,
    )

    return (
      <BackgroundContainer>
        <Container>
          <MemeHeading>Meme Generator</MemeHeading>
          <FormAndImageContainer>
            <FormContainer>
              <InputContainer>
                <InputLabel htmlFor="image">Image URL</InputLabel>
                <Input
                  id="image"
                  placeholder="Enter the Image URL"
                  value={imageUrlInput}
                  onChange={this.onChangeImageUrl}
                />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="topText">Top Text</InputLabel>
                <Input
                  id="topText"
                  placeholder="Enter the Top Text"
                  value={topTextInput}
                  onChange={this.onChangeTopText}
                />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
                <Input
                  id="bottomText"
                  placeholder="Enter the Bottom Text"
                  value={bottomTextInput}
                  onChange={this.onChangeBottomText}
                />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="fontSize">Font Size</InputLabel>
                <FontSizesDropdownList
                  id="fontSize"
                  onChange={this.onChangeFontSize}
                >
                  {fontSizesOptionsList.map(eachFontSize => (
                    <Option
                      key={eachFontSize.optionId}
                      value={eachFontSize.optionId}
                    >
                      {eachFontSize.displayText}
                    </Option>
                  ))}
                </FontSizesDropdownList>
              </InputContainer>

              <GenerateButton type="button" onClick={this.onGenerateMeme}>
                Generate
              </GenerateButton>
            </FormContainer>

            <BgImage data-testid="meme" imageUrl={imageUrl}>
              <Text fontSize={fontSize}>{topText}</Text>
              <Text fontSize={fontSize}>{bottomText}</Text>
            </BgImage>
          </FormAndImageContainer>
        </Container>
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator

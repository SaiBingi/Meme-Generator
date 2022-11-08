import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  min-height: 100vh;
`
export const Container = styled.div`
  width: 80%;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const MemeHeading = styled.h1`
  font-size: 32px;
  color: #35469c;

  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 25px;
    margin-top: 30px;
  }
`

export const FormAndImageContainer = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 767px) {
    order: 1;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin-bottom: 22px;
`

export const InputLabel = styled.label`
  font-size: 14px;
  color: #7e858e;
  margin-bottom: 6px;
`

export const Input = styled.input`
  outline: none;
  padding: 7px;
  border: #d7dfe9 2px solid;
  border-radius: 6px;
  min-width: 500px;

  @media screen and (max-width: 767px) {
    min-width: 90%;
  }
`

export const FontSizesDropdownList = styled.select`
  outline: none;
  padding: 7px;
  border: #d7dfe9 2px solid;
  border-radius: 6px;
  min-width: 500px;

  @media screen and (max-width: 767px) {
    min-width: 90%;
  }
`

export const Option = styled.option`
  color: #1e293b;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border: none;
  color: #ffffff;
  border-radius: 6px;
  padding: 11px 37px 11px 37px;
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 5px;
  cursor: pointer;
  width: 150px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 8px 24px 8px 24px;
    margin-bottom: 25px;
    width: 100px;
  }
`

export const BgImage = styled.div`
  background-image: url('${props => props.imageUrl}');
  background-size: cover;
  max-height: 300px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  @media screen and (max-width: 767px) {
    min-width: 100%;
    margin-bottom: 30px;
    min-height: 250px;
  }
`

export const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  margin: 15px;
`

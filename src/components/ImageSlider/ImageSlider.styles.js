import styled from 'styled-components';

export const ImageSliderContainer = styled.div`
  overflow: hidden;
  padding: 10px;
  text-align: center;
`;

export const StyledImage = styled.img`
  max-width: 300px;
  height: 400px;
  border-radius: 10% 10% 0 0;
`;

export const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  gap: 8px;
  margin: 10px auto 0;
`;

export const SliderStepButton = styled.button`
  flex: 1;
  height: 8px;
  border: none;
  border-radius: 0;
  background-color: ${({ $isActive, theme }) => (
    $isActive ? theme.palette.primary.main : '#B7B7B7'
  )};
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ $isActive, theme }) => (
      $isActive ? theme.palette.primary.main : '#9F9F9F'
    )};
  }
`;

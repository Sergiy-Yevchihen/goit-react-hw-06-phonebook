import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 15px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  font-size: 20px;
  font-weight: 600;
  font-family: inherit;
  color: ${p => p.theme.colors.dark};
`;

export const InputForm = styled.input`
  min-width: 220px;
  padding: 5px 5px;
  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  :hover {
    border-color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.colors.shadow};
  }
`;

import styled from '@emotion/styled';

export const FormInput = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid ${p => p.theme.colors.dark};
  border-radius: 4px;
  box-shadow: ${p => p.theme.colors.shadow};
  color: ${p => p.theme.colors.grey};
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
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

export const ButtonForm = styled.button`
  min-width: 110px;
  padding: 5px;
  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  color: ${p => p.theme.colors.dark};
  box-shadow: ${p => p.theme.colors.shadow};
  background-color: ${p => p.theme.colors.accent};

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  :disabled {
    background-color: ${p => p.theme.colors.noActive};
    box-shadow: none;
    color: ${p => p.theme.colors.white};
  }

  :enabled:hover {
    border: 1px solid ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.colors.shadowAccent};
    color: ${p => p.theme.colors.white};
  }
`;

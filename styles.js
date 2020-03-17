import styled from '@emotion/styled';
import { css } from '@emotion/core'

export const borderRadius = css`
  border-radius: 10px;
`;

export const boxShadow = css`
  box-shadow: 0 15px 35px hsla(0,0%, 80%, 0.4);
`;

export const insetBoxShadow = css`
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 50%, 0.1);
`;

export const divider = css`
  border-top: 3px solid hsl(0,0%, 95%);
`;

export const verySmallText = css`
  font-size: 12px;
`;

export const slightlySmallText = css`
  font-size: 14px;
`;

export const smallText = css`
  font-size: 16px;
`;

export const mediumText = css`
  font-size: 18px;
`;

export const smallHeading = css`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

export const heading = css`
  font-size: 24px;
  letter-spacing: 0.04em;
  font-weight: 650;
`;

export const largerHeading = css`
  font-size: 32px;
  letter-spacing: 0.04em;
  font-weight: 650;
`;

export const titleHeading = css`
  font-size: 48px;
  letter-spacing: 0.04em;
  font-weight: 650;
`;

export const Card = styled.div`
  ${boxShadow}
  ${borderRadius}
  background: hsl(0, 0%, 100%);
  padding: none;
  margin: 25px;
  display: flex;
`;

export const MediumHeading = styled.h2`
  ${heading}
  font-weight: 650;
  margin-left: 25px;
  letter-spacing: 0.04em;
`;

export const MediumButton = styled.button`
  ${boxShadow}
  ${heading}
  border: 0;
  background: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
  width: 100%;
  padding: 20px 0;
  margin-top: 25px;
  border-radius 0 0 10px 10px;
  letter-spacing: 0.1em;

  &:hover {
    background: hsl(0, 0%, 50%);
  }
`;

export const LargeCardBottomButton = styled.button`
  ${boxShadow}
  ${heading}
  border: 0;
  background: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
  width: 100%;
  padding: 20px 0;
  margin-top: 25px;
  border-radius 0 0 10px 10px;
  letter-spacing: 0.1em;

  &:hover {
    background: hsl(0, 0%, 50%);
  }
`;

export const TextInput = styled.input`
  ${insetBoxShadow}
  ${borderRadius}
  ${smallText}
  background: hsl(0, 0%, 90%);
  color: hsl(0, 0%, 10%);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  border: 2px solid hsl(0,0%, 80%);
`;

import styled, { css } from 'styled-components';

import { TextStyleVariantMap } from '@/components/foundation/Text/styles';
import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const MenuWrapper = {
  Menu: styled.nav`
    font-family: ${({ theme }) => theme.fontFamily};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 21px;
    padding-left: 28px;
    padding-right: 28px;
    ${breakpointsMedia({
    md: css`
        justify-content: flex-start;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        padding: 0 16px;
        max-width: 768px;
      `,
    lg: css`
        max-width: 1160px;
      `,
    xl: css`
        max-width: 1222px;
      `,
  })}
  `,

  LeftSide: styled.div`
    padding: 0;
    margin: 0;
    order: 1;
    ${breakpointsMedia({
    md: css`
        width: 131px;
        height: 32px;
      `,
  })}
    ${breakpointsMedia({
    md: css`
        order: initial;
      `,
  })}
  `,

  CentralSide: styled.div`
    padding: 0;
    margin: 0;
    order: 3;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 17px;
    border-top: 1px solid #88989E;
    border-bottom: 1px solid #88989E;
    padding: 12px;
    ${breakpointsMedia({
    md: css`
        max-width: 332px;
        justify-content: space-between;
        flex: 1;
        order: initial;
        border: none;
        margin: 0;
        padding-top: 0;
        padding-bottom: 0;
      `,
  })}
    span {
      text-align: center;
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary.main.color};
      transition: ${({ theme }) => theme.transition};
      ${breakpointsMedia({
    xs: css`
          ${TextStyleVariantMap.smallestException}
        `,
    md: css`
          ${TextStyleVariantMap.paragraph1}
        `,
  })}
      &:hover,
      &:focus {
        cursor: pointer;
        font-weight: 400;
        color: #88989e;
      }
    }
  `,

  RightSide: styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1;
    order: 2;
    justify-content: flex-end;
  `,
};

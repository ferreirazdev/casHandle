import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

interface TypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
  type === 'up' ? theme.colors.purple 
  : type === 'down' ? theme.colors.attention 
  : theme.colors.success};

  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
  border-radius: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme })=> theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.titles};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;

  color: ${({ theme }) => theme.colors.titles};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.titles};

  font-family: ${({ theme })=> theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  margin-top: 38px;
`;

export const LastTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.titles};

  font-family: ${({ theme })=> theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
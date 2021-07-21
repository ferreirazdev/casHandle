import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreating,
  Username,
  LogoutButton,
  Icon,
  HighlightCards
} from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header>
        
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri:"http://github.com/ferreirazdev.png"}}/>
            <User>
              <UserGreating>Olá, </UserGreating>
              <Username>Flávio</Username>
            </User>
          </UserInfo>
          <LogoutButton>
            <Icon name="power"/>
          </LogoutButton>
        </UserWrapper>

      </Header>

      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas"
          amount="R$12.000,00"
          lastTransaction="Última transação dia 20 de julho"
        /> 
        <HighlightCard 
          type="down"
          title="Saídas"
          amount="R$12.000,00"
          lastTransaction="Última transação dia 20 de julho"
        /> 
        <HighlightCard 
          type="total"
          title="Total"
          amount="R$12.000,00"
          lastTransaction="Última transação dia 20 de julho"
        /> 
      </HighlightCards>

    </Container>
  );
}
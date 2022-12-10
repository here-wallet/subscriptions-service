import React from "react";
import { useWallet } from "./selector";
import { Container } from "./styled";
import { PinkButton } from "./uikit/Button";
import { Title } from "./uikit/Title";

export const App = () => {
  const { selectorModal, account } = useWallet() ?? {};

  if (account == null) {
    return (
      <Container>
        <Title>Subscribe</Title>
        <PinkButton onClick={() => selectorModal?.show()}>
          Connect wallet
        </PinkButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{account.accountId}</Title>
      <PinkButton onClick={() => account.deployContract()}>
        Subscribe
      </PinkButton>
    </Container>
  );
};

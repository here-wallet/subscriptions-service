import {
  setupWalletSelector,
  WalletSelector,
} from "@near-wallet-selector/core";
import { JsonRpcProvider } from "near-api-js/lib/providers";

import {
  setupModal,
  WalletSelectorModal,
} from "@near-wallet-selector/modal-ui";
import "@near-wallet-selector/modal-ui/styles.css";

import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupLedger } from "@near-wallet-selector/ledger";
import React, { useContext, useEffect, useState } from "react";
import Account from "./Account";

type AppServices = {
  selector: WalletSelector;
  selectorModal: WalletSelectorModal;
  account: Account | null;
};

type Props = {
  children: React.ReactNode;
};

const AppContext = React.createContext<AppServices | null>(null);
export function useWallet() {
  const context = useContext(AppContext);
  return context;
}

export function AppContextProvider({ children }: Props) {
  const [context, setContext] = useState<AppServices | null>(null);

  useEffect(() => {
    const init = async () => {
      const selector = await setupWalletSelector({
        network: "testnet",
        modules: [
          setupNearWallet(),
          setupHereWallet(),
          setupSender(),
          setupMeteorWallet(),
          setupLedger(),
        ],
      });

      const selectorModal = setupModal(selector, {
        contractId:
          "2ca02c54566a08d3b8ea58759ae98da5162bbd518e8d9c4fe0b6a1f65e0e3ee0",
      });

      const { network } = selector.options;
      const provider = new JsonRpcProvider({ url: network.nodeUrl });

      selector.store.observable.subscribe(async () => {
        const wallet = await selector.wallet().catch(() => null);
        if (wallet == null) {
          context?.account?.dispose();
          setContext({ account: null, selector, selectorModal });
          return;
        }

        context?.account?.dispose();
        const [{ accountId }] = await wallet.getAccounts();
        const account = new Account(accountId, wallet, provider);

        setContext({
          account,
          selector,
          selectorModal,
        });
      });

      setContext({ selector, selectorModal, account: null });
    };

    init();
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

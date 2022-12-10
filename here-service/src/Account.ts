import { Wallet } from "@near-wallet-selector/core";
import { JsonRpcProvider } from "near-api-js/lib/providers";
import { base_encode, base_decode } from "near-api-js/lib/utils/serialize";

// @ts-ignore
import createHash from "create-hash";

// @ts-ignore
import url from "url:./account.wasm";
import { KeyPairEd25519 } from "near-api-js/lib/utils";
import { connect, InMemorySigner } from "near-api-js";

console.log(window.location.href);

class Account {
  constructor(
    readonly accountId: string,
    private readonly wallet: Wallet,
    private readonly provider: JsonRpcProvider
  ) {}

  async deployContract() {
    const res = await fetch(url);
    const code = new Uint8Array(await res.arrayBuffer());

    const hash = base_encode(createHash("sha256").update(code).digest());
    const data: any = await this.provider.query({
      request_type: "view_account",
      finality: "final",
      account_id: this.accountId,
    });

    if (data.code_hash !== hash) {
      await this.wallet.signAndSendTransaction({
        signerId: this.accountId,
        receiverId: this.accountId,
        actions: [{ type: "DeployContract", params: { code } }],
      });

      //await this.nativeConnect(code);
    }
  }

  async nativeConnect(code: Uint8Array) {
    const privateKey =
      "ed25519:631Nxs9oHzA2izaz68ubw9C8ntgLTwwFGB4YpEADKpokVps8DEZSSVLfnWHg6pcvu8MYVtLCL7JV8zz6G7KqawNg";
    const keyPair = KeyPairEd25519.fromString(privateKey);

    const near = await connect({
      networkId: "testnet",
      nodeUrl: "https://rpc.testnet.near.org",
      signer: await InMemorySigner.fromKeyPair(
        "testnet",
        this.accountId,
        keyPair
      ),
    });

    const account = await near.account(this.accountId);
    const result = await account.deployContract(code);
    console.log(result);
  }

  dispose() {}
}

export default Account;

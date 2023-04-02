import { useEffect, useState } from "react";
import { ethers } from "ethers";
import detectProvider from "@metamask/detect-provider";

export default function ConnectWallet() {
  const [address, setAddress] = useState(null);

  async function connectToMetaMask() {
    const provider: any = await detectProvider();
    const ethersProvider = new ethers.providers.Web3Provider(provider);

    try {
      // Request account access from the user
      await provider.request({ method: "eth_requestAccounts" });

      // Get the user's Ethereum address
      const accounts: any = await ethersProvider.listAccounts();
      const address: any = accounts[0];

      // Save the address to local storage
      localStorage.setItem("eth_address", address);

      // Update component state with the address
      setAddress(address);
    } catch (err) {
      // Handle error
      console.error(err);
    }
  }
  useEffect(() => {
    connectToMetaMask();
  }, []);

  async function switchToBscTestnet() {
    // Set the network to the BSC testnet
    // const bscTestnet = {
    //   chainId: "0x61",
    //   chainName: "BSC Testnet",
    //   nativeCurrency: {
    //     name: "Binance Smart Chain",
    //     symbol: "bnb",
    //     decimals: 18,
    //   },
    //   rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    //   blockExplorerUrls: ["https://testnet.bscscan.com"],
    // };
    const chainId = 421613;
    const arbitrumTestnet = {
      chainId: `0x${chainId.toString(16)}`,
      chainName: "Arbitrum Testnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://arb-goerli.g.alchemy.com/v2/QElCDvBA_MU2Q2dqRe3IywYHYSofvkXE"],
      blockExplorerUrls: ["https://goerli-rollup-explorer.arbitrum.io"],
    };
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [arbitrumTestnet],
    });

    // Refresh the page to reflect the network change
    window.location.reload();
  }

  return (
    <>
      {address ? address : <button onClick={connectToMetaMask}>Connect Wallet</button>}
      <br />
      <button onClick={() => switchToBscTestnet()}>Add Arbitrum Network</button>
    </>
  );
}

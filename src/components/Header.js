import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();

    }

    return (
        <div id="header">
        <Link to='/' id='logo'>Spectral Fusion NFTs</Link>

        <div id="link-containers">
          <Link to="/explore">VR Gaming MarketPlace</Link>
          <Link to="/explore">Real Estate Listings</Link>
          <Link to="/explore">NFT MarketPlace</Link>
          <Link>Stake/Minting NFTs</Link>
          <Link>Community Forum</Link>
          <Link>FAQs</Link>
          <Link>Contact Us</Link>
          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;
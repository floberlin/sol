// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";


contract SCItem is ERC1155Upgradeable, OwnableUpgradeable  {
    
    constructor() ERC1155Upgradeable() { 
    }
    
    function newIteam(uint id, uint amount, string memory IPFS_hash) public onlyOwner {
    bytes memory ipfs_bytes =  stringToBytes(IPFS_hash);   
    _mint(msg.sender, id, amount, ipfs_bytes);
}

 function newNFT(uint id, bytes memory IPFS_hash) public onlyOwner{
    _mint(msg.sender, id, 1, IPFS_hash);
}


function stringToBytes(string memory source) internal pure returns (bytes memory result)  {
        return abi.encodePacked(source);
    }
    



}
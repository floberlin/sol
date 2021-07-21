// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract Validator is Initializable, AccessControlUpgradeable {
    
    function initialize() public initializer {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    bytes32 public constant VALIDATOR_ROLE = keccak256("VALIDATOR_ROLE");
    string[] public hash;
    mapping (string => bool) public _hashExists;

    event DataAdded(address dataOwner, string dataHash);

    function grantRoleValidator(address valiReqAddr) public {
        grantRole(VALIDATOR_ROLE, valiReqAddr);
    }

    function revokeRoleValidator(address valiReqAddr) public {
        revokeRole(VALIDATOR_ROLE, valiReqAddr);
    }

    function setData(string memory _hash) public {
        require(hasRole(VALIDATOR_ROLE, msg.sender), "Caller is not a validator");
        require(!_hashExists[_hash], "Hash already exists");
        _hashExists[_hash] = true;
        hash.push(_hash);
    }
    
    function getData(string memory _hash) public view returns (bool) {
        require(_hashExists[_hash], "Hash does not exist");
        return (true);
    }
    // tbd
    function getHash4iot(address addr) public view returns (string[] memory) {
        return(hash);
    }

    function getHash4iotSELF() public view returns (string[] memory) {
        return(hash);
    }

    function getHashArray() public view returns (string[] memory) {
        return(hash);
    }
    // tbd -end
}

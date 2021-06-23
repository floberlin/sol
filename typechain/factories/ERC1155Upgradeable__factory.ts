/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155Upgradeable,
  ERC1155UpgradeableInterface,
} from "../ERC1155Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506125d1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610138578063a22cb46514610168578063e985e9c514610184578063f242432a146101b457610087565b8062fdd58e1461008c57806301ffc9a7146100bc5780630e89341c146100ec5780632eb2c2d61461011c575b600080fd5b6100a660048036038101906100a191906116d6565b6101d0565b6040516100b39190611d2f565b60405180910390f35b6100d660048036038101906100d1919061178e565b61029a565b6040516100e39190611bb2565b60405180910390f35b610106600480360381019061010191906117e8565b61037c565b6040516101139190611bcd565b60405180910390f35b61013660048036038101906101319190611530565b610410565b005b610152600480360381019061014d9190611716565b6107bd565b60405161015f9190611b59565b60405180910390f35b610182600480360381019061017d9190611696565b6108d6565b005b61019e600480360381019061019991906114f0565b610a57565b6040516101ab9190611bb2565b60405180910390f35b6101ce60048036038101906101c991906115ff565b610aeb565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890611c2f565b60405180910390fd5b6065600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036557507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610375575061037482610e06565b5b9050919050565b60606067805461038b90611fd2565b80601f01602080910402602001604051908101604052809291908181526020018280546103b790611fd2565b80156104045780601f106103d957610100808354040283529160200191610404565b820191906000526020600020905b8154815290600101906020018083116103e757829003601f168201915b50505050509050919050565b8151835114610454576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044b90611d0f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156104c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bb90611c6f565b60405180910390fd5b6104cc610e70565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061051257506105118561050c610e70565b610a57565b5b610551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054890611c8f565b60405180910390fd5b600061055b610e70565b905061056b818787878787610e78565b60005b845181101561072857600085828151811061058c5761058b6120dc565b5b6020026020010151905060008583815181106105ab576105aa6120dc565b5b6020026020010151905060006065600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561064d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064490611caf565b60405180910390fd5b81816106599190611ee8565b6065600085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816065600085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461070d9190611e92565b925050819055505050508061072190612035565b905061056e565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161079f929190611b7b565b60405180910390a46107b5818787878787610e80565b505050505050565b60608151835114610803576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fa90611cef565b60405180910390fd5b6000835167ffffffffffffffff8111156108205761081f61210b565b5b60405190808252806020026020018201604052801561084e5781602001602082028036833780820191505090505b50905060005b84518110156108cb5761089b858281518110610873576108726120dc565b5b602002602001015185838151811061088e5761088d6120dc565b5b60200260200101516101d0565b8282815181106108ae576108ad6120dc565b5b602002602001018181525050806108c490612035565b9050610854565b508091505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166108f5610e70565b73ffffffffffffffffffffffffffffffffffffffff16141561094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094390611ccf565b60405180910390fd5b8060666000610959610e70565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610a06610e70565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610a4b9190611bb2565b60405180910390a35050565b6000606660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610b5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5290611c6f565b60405180910390fd5b610b63610e70565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610ba95750610ba885610ba3610e70565b610a57565b5b610be8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdf90611c4f565b60405180910390fd5b6000610bf2610e70565b9050610c12818787610c0388611067565b610c0c88611067565b87610e78565b60006065600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610caa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca190611caf565b60405180910390fd5b8381610cb69190611ee8565b6065600087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836065600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d6a9190611e92565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051610de7929190611d4a565b60405180910390a4610dfd8288888888886110e1565b50505050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b505050505050565b610e9f8473ffffffffffffffffffffffffffffffffffffffff166112c8565b1561105f578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401610ee5959493929190611a97565b602060405180830381600087803b158015610eff57600080fd5b505af1925050508015610f3057506040513d601f19601f82011682018060405250810190610f2d91906117bb565b60015b610fd657610f3c61213a565b806308c379a01415610f995750610f516124a9565b80610f5c5750610f9b565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f909190611bcd565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcd90611bef565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461105d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105490611c0f565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff8111156110865761108561210b565b5b6040519080825280602002602001820160405280156110b45781602001602082028036833780820191505090505b50905082816000815181106110cc576110cb6120dc565b5b60200260200101818152505080915050919050565b6111008473ffffffffffffffffffffffffffffffffffffffff166112c8565b156112c0578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611146959493929190611aff565b602060405180830381600087803b15801561116057600080fd5b505af192505050801561119157506040513d601f19601f8201168201806040525081019061118e91906117bb565b60015b6112375761119d61213a565b806308c379a014156111fa57506111b26124a9565b806111bd57506111fc565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f19190611bcd565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122e90611bef565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b590611c0f565b60405180910390fd5b505b505050505050565b600080823b905060008111915050919050565b60006112ee6112e984611d98565b611d73565b9050808382526020820190508285602086028201111561131157611310612161565b5b60005b85811015611341578161132788826113fd565b845260208401935060208301925050600181019050611314565b5050509392505050565b600061135e61135984611dc4565b611d73565b9050808382526020820190508285602086028201111561138157611380612161565b5b60005b858110156113b1578161139788826114db565b845260208401935060208301925050600181019050611384565b5050509392505050565b60006113ce6113c984611df0565b611d73565b9050828152602081018484840111156113ea576113e9612166565b5b6113f5848285611f90565b509392505050565b60008135905061140c8161253f565b92915050565b600082601f8301126114275761142661215c565b5b81356114378482602086016112db565b91505092915050565b600082601f8301126114555761145461215c565b5b813561146584826020860161134b565b91505092915050565b60008135905061147d81612556565b92915050565b6000813590506114928161256d565b92915050565b6000815190506114a78161256d565b92915050565b600082601f8301126114c2576114c161215c565b5b81356114d28482602086016113bb565b91505092915050565b6000813590506114ea81612584565b92915050565b6000806040838503121561150757611506612170565b5b6000611515858286016113fd565b9250506020611526858286016113fd565b9150509250929050565b600080600080600060a0868803121561154c5761154b612170565b5b600061155a888289016113fd565b955050602061156b888289016113fd565b945050604086013567ffffffffffffffff81111561158c5761158b61216b565b5b61159888828901611440565b935050606086013567ffffffffffffffff8111156115b9576115b861216b565b5b6115c588828901611440565b925050608086013567ffffffffffffffff8111156115e6576115e561216b565b5b6115f2888289016114ad565b9150509295509295909350565b600080600080600060a0868803121561161b5761161a612170565b5b6000611629888289016113fd565b955050602061163a888289016113fd565b945050604061164b888289016114db565b935050606061165c888289016114db565b925050608086013567ffffffffffffffff81111561167d5761167c61216b565b5b611689888289016114ad565b9150509295509295909350565b600080604083850312156116ad576116ac612170565b5b60006116bb858286016113fd565b92505060206116cc8582860161146e565b9150509250929050565b600080604083850312156116ed576116ec612170565b5b60006116fb858286016113fd565b925050602061170c858286016114db565b9150509250929050565b6000806040838503121561172d5761172c612170565b5b600083013567ffffffffffffffff81111561174b5761174a61216b565b5b61175785828601611412565b925050602083013567ffffffffffffffff8111156117785761177761216b565b5b61178485828601611440565b9150509250929050565b6000602082840312156117a4576117a3612170565b5b60006117b284828501611483565b91505092915050565b6000602082840312156117d1576117d0612170565b5b60006117df84828501611498565b91505092915050565b6000602082840312156117fe576117fd612170565b5b600061180c848285016114db565b91505092915050565b60006118218383611a79565b60208301905092915050565b61183681611f1c565b82525050565b600061184782611e31565b6118518185611e5f565b935061185c83611e21565b8060005b8381101561188d5781516118748882611815565b975061187f83611e52565b925050600181019050611860565b5085935050505092915050565b6118a381611f2e565b82525050565b60006118b482611e3c565b6118be8185611e70565b93506118ce818560208601611f9f565b6118d781612175565b840191505092915050565b60006118ed82611e47565b6118f78185611e81565b9350611907818560208601611f9f565b61191081612175565b840191505092915050565b6000611928603483611e81565b915061193382612193565b604082019050919050565b600061194b602883611e81565b9150611956826121e2565b604082019050919050565b600061196e602b83611e81565b915061197982612231565b604082019050919050565b6000611991602983611e81565b915061199c82612280565b604082019050919050565b60006119b4602583611e81565b91506119bf826122cf565b604082019050919050565b60006119d7603283611e81565b91506119e28261231e565b604082019050919050565b60006119fa602a83611e81565b9150611a058261236d565b604082019050919050565b6000611a1d602983611e81565b9150611a28826123bc565b604082019050919050565b6000611a40602983611e81565b9150611a4b8261240b565b604082019050919050565b6000611a63602883611e81565b9150611a6e8261245a565b604082019050919050565b611a8281611f86565b82525050565b611a9181611f86565b82525050565b600060a082019050611aac600083018861182d565b611ab9602083018761182d565b8181036040830152611acb818661183c565b90508181036060830152611adf818561183c565b90508181036080830152611af381846118a9565b90509695505050505050565b600060a082019050611b14600083018861182d565b611b21602083018761182d565b611b2e6040830186611a88565b611b3b6060830185611a88565b8181036080830152611b4d81846118a9565b90509695505050505050565b60006020820190508181036000830152611b73818461183c565b905092915050565b60006040820190508181036000830152611b95818561183c565b90508181036020830152611ba9818461183c565b90509392505050565b6000602082019050611bc7600083018461189a565b92915050565b60006020820190508181036000830152611be781846118e2565b905092915050565b60006020820190508181036000830152611c088161191b565b9050919050565b60006020820190508181036000830152611c288161193e565b9050919050565b60006020820190508181036000830152611c4881611961565b9050919050565b60006020820190508181036000830152611c6881611984565b9050919050565b60006020820190508181036000830152611c88816119a7565b9050919050565b60006020820190508181036000830152611ca8816119ca565b9050919050565b60006020820190508181036000830152611cc8816119ed565b9050919050565b60006020820190508181036000830152611ce881611a10565b9050919050565b60006020820190508181036000830152611d0881611a33565b9050919050565b60006020820190508181036000830152611d2881611a56565b9050919050565b6000602082019050611d446000830184611a88565b92915050565b6000604082019050611d5f6000830185611a88565b611d6c6020830184611a88565b9392505050565b6000611d7d611d8e565b9050611d898282612004565b919050565b6000604051905090565b600067ffffffffffffffff821115611db357611db261210b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611ddf57611dde61210b565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611e0b57611e0a61210b565b5b611e1482612175565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611e9d82611f86565b9150611ea883611f86565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611edd57611edc61207e565b5b828201905092915050565b6000611ef382611f86565b9150611efe83611f86565b925082821015611f1157611f1061207e565b5b828203905092915050565b6000611f2782611f66565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611fbd578082015181840152602081019050611fa2565b83811115611fcc576000848401525b50505050565b60006002820490506001821680611fea57607f821691505b60208210811415611ffe57611ffd6120ad565b5b50919050565b61200d82612175565b810181811067ffffffffffffffff8211171561202c5761202b61210b565b5b80604052505050565b600061204082611f86565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156120735761207261207e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d11156121595760046000803e612156600051612186565b90505b90565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b600060443d10156124b95761253c565b6124c1611d8e565b60043d036004823e80513d602482011167ffffffffffffffff821117156124e957505061253c565b808201805167ffffffffffffffff811115612507575050505061253c565b80602083010160043d03850181111561252457505050505061253c565b61253382602001850186612004565b82955050505050505b90565b61254881611f1c565b811461255357600080fd5b50565b61255f81611f2e565b811461256a57600080fd5b50565b61257681611f3a565b811461258157600080fd5b50565b61258d81611f86565b811461259857600080fd5b5056fea2646970667358221220fb7bcaa94541439b71726495f145bbc0bc26e63da979eb5137e83ea5bf5527a864736f6c63430008060033";

export class ERC1155Upgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Upgradeable {
    return super.attach(address) as ERC1155Upgradeable;
  }
  connect(signer: Signer): ERC1155Upgradeable__factory {
    return super.connect(signer) as ERC1155Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155UpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Upgradeable;
  }
}

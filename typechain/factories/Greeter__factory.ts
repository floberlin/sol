/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [],
    name: "greet",
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
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061094d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a413686214610046578063cfae321714610062578063f62d188814610080575b600080fd5b610060600480360381019061005b919061057f565b61009c565b005b61006a610163565b6040516100779190610624565b60405180910390f35b61009a6004803603810190610095919061057f565b6101f5565b005b6101496040518060600160405280602381526020016108d360239139600180546100c59061079d565b80601f01602080910402602001604051908101604052809291908181526020018280546100f19061079d565b801561013e5780601f106101135761010080835404028352916020019161013e565b820191906000526020600020905b81548152906001019060200180831161012157829003601f168201915b505050505083610308565b806001908051906020019061015f92919061046c565b5050565b6060600180546101729061079d565b80601f016020809104026020016040519081016040528092919081815260200182805461019e9061079d565b80156101eb5780601f106101c0576101008083540402835291602001916101eb565b820191906000526020600020905b8154815290600101906020018083116101ce57829003601f168201915b5050505050905090565b600060019054906101000a900460ff168061021b575060008054906101000a900460ff16155b61025a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610251906106c9565b60405180910390fd5b60008060019054906101000a900460ff1615905080156102aa576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6102cc6040518060600160405280602281526020016108f660229139836103a7565b81600190805190602001906102e292919061046c565b5080156103045760008060016101000a81548160ff0219169083151502179055505b5050565b6103a28383836040516024016103209392919061067d565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610443565b505050565b61043f82826040516024016103bd929190610646565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610443565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546104789061079d565b90600052602060002090601f01602090048101928261049a57600085556104e1565b82601f106104b357805160ff19168380011785556104e1565b828001600101855582156104e1579182015b828111156104e05782518255916020019190600101906104c5565b5b5090506104ee91906104f2565b5090565b5b8082111561050b5760008160009055506001016104f3565b5090565b600061052261051d8461070e565b6106e9565b90508281526020810184848401111561053e5761053d610863565b5b61054984828561075b565b509392505050565b600082601f8301126105665761056561085e565b5b813561057684826020860161050f565b91505092915050565b6000602082840312156105955761059461086d565b5b600082013567ffffffffffffffff8111156105b3576105b2610868565b5b6105bf84828501610551565b91505092915050565b60006105d38261073f565b6105dd818561074a565b93506105ed81856020860161076a565b6105f681610872565b840191505092915050565b600061060e602e8361074a565b915061061982610883565b604082019050919050565b6000602082019050818103600083015261063e81846105c8565b905092915050565b6000604082019050818103600083015261066081856105c8565b9050818103602083015261067481846105c8565b90509392505050565b6000606082019050818103600083015261069781866105c8565b905081810360208301526106ab81856105c8565b905081810360408301526106bf81846105c8565b9050949350505050565b600060208201905081810360008301526106e281610601565b9050919050565b60006106f3610704565b90506106ff82826107cf565b919050565b6000604051905090565b600067ffffffffffffffff8211156107295761072861082f565b5b61073282610872565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b82818337600083830152505050565b60005b8381101561078857808201518184015260208101905061076d565b83811115610797576000848401525b50505050565b600060028204905060018216806107b557607f821691505b602082108114156107c9576107c8610800565b5b50919050565b6107d882610872565b810181811067ffffffffffffffff821117156107f7576107f661082f565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a656400000000000000000000000000000000000060208201525056fe4368616e67696e67206772656574696e672066726f6d202725732720746f20272573274465706c6f79696e67206120477265657465722077697468206772656574696e673aa264697066735822122074ad65b834a6228c8909d069b202a2c9c6a01f3aeb5fd4bec9ebe2c9e91e2b4464736f6c63430008060033";

export class Greeter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}

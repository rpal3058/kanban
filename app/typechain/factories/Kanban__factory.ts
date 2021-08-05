/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Kanban, KanbanInterface } from "../Kanban";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "task_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "raiderApproved",
        type: "address",
      },
    ],
    name: "assigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundAmount",
        type: "uint256",
      },
    ],
    name: "contractPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "task_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundReleased",
        type: "uint256",
      },
    ],
    name: "taskCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "task_id",
        type: "uint256",
      },
    ],
    name: "taskForReviewed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "task_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "raider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "taskRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "task_id",
        type: "uint256",
      },
    ],
    name: "taskReviewRevoke",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "task_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "funds",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "detail",
        type: "string",
      },
    ],
    name: "taskSubmitted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "assignTaskToRaider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
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
    inputs: [],
    name: "funder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pm",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "requestTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pm",
        type: "address",
      },
    ],
    name: "setPM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_funds",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
    ],
    name: "submitTask",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskid",
        type: "uint256",
      },
    ],
    name: "taskApproved",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskid",
        type: "uint256",
      },
    ],
    name: "taskForReview",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "taskLog",
    outputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "funds",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "assigned",
        type: "bool",
      },
      {
        internalType: "address payable",
        name: "raider",
        type: "address",
      },
      {
        internalType: "bool",
        name: "reviewed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "closed",
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
        name: "_taskid",
        type: "uint256",
      },
    ],
    name: "taskReviewRevoked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "viewRequests",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060045534801561001557600080fd5b506001600081905550611eb88061002d6000396000f3fe6080604052600436106100c25760003560e01c80638e7f43611161007f57806398faa47f1161005957806398faa47f14610452578063ac787a621461048d578063c31d8a82146104c8578063fd228953146104f6576100c2565b80638e7f4361146103665780639444f464146103dc5780639573590c14610417576100c2565b8063041ae880146100c75780631f8f5002146101085780632087ed451461014d57806346efe280146102a95780638970cdff146102fa5780638b7afe2e1461033b575b600080fd5b3480156100d357600080fd5b506100dc610655565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011457600080fd5b5061014b6004803603604081101561012b57600080fd5b81019080803590602001909291908035906020019092919050505061067b565b005b6102a76004803603606081101561016357600080fd5b81019080803590602001909291908035906020019064010000000081111561018a57600080fd5b82018360208201111561019c57600080fd5b803590602001918460018302840111640100000000831117156101be57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561022157600080fd5b82018360208201111561023357600080fd5b8035906020019184600183028401116401000000008311171561025557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061093c565b005b3480156102b557600080fd5b506102f8600480360360208110156102cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ed7565b005b34801561030657600080fd5b5061030f610fdf565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561034757600080fd5b50610350611005565b6040518082815260200191505060405180910390f35b34801561037257600080fd5b506103a96004803603604081101561038957600080fd5b81019080803590602001909291908035906020019092919050505061100b565b604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b3480156103e857600080fd5b50610415600480360360208110156103ff57600080fd5b810190808035906020019092919050505061107c565b005b34801561042357600080fd5b506104506004803603602081101561043a57600080fd5b8101908080359060200190929190505050611602565b005b34801561045e57600080fd5b5061048b6004803603602081101561047557600080fd5b810190808035906020019092919050505061182e565b005b34801561049957600080fd5b506104c6600480360360208110156104b057600080fd5b8101908080359060200190929190505050611924565b005b6104f4600480360360208110156104de57600080fd5b8101908080359060200190929190505050611a47565b005b34801561050257600080fd5b5061052f6004803603602081101561051957600080fd5b8101908080359060200190929190505050611b65565b60405180806020018060200188815260200187151581526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018515158152602001841515815260200183810383528a818151815260200191508051906020019080838360005b838110156105ad578082015181840152602081019050610592565b50505050905090810190601f1680156105da5780820380516001836020036101000a031916815260200191505b50838103825289818151815260200191508051906020019080838360005b838110156106135780820151818401526020810190506105f8565b50505050905090810190601f1680156106405780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611de0602c913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611e3c6022913960400191505060405180910390fd5b6005600083815260200190815260200160002060030181815481106107ea57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060040160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016005600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055507fe31906475d9c5a2441d947cce9bbaaa5a4a897e6c956f25851e1e908ce0ea1c8826005600085815260200190815260200160002060030183815481106108db57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156109e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611de0602c913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611e3c6022913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611de0602c913960400191505060405180910390fd5b600454831115610baa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4e6f7420656e6f7567682066756e64730000000000000000000000000000000081525060200191505060405180910390fd5b6000610bb66001611d1e565b905083600560008381526020019081526020016000206002018190555082600560008381526020019081526020016000206000019080519060200190610bfd929190611d42565b5081600560008381526020019081526020016000206001019080519060200190610c28929190611d42565b5060006005600083815260200190815260200160002060040160156101000a81548160ff02191690831515021790555060006005600083815260200190815260200160002060060160006101000a81548160ff0219169083151502179055506000600560008381526020019081526020016000206005016000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600560008381526020019081526020016000206005016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508360045403600481905550610db86001611d2c565b7fe29f65a80f4e725a66e6400f83e9ee0ebbe94c4751ab993361bd06e6c857ed7d81858585604051808581526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610e2d578082015181840152602081019050610e12565b50505050905090810190601f168015610e5a5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610e93578082015181840152602081019050610e78565b50505050905090810190601f168015610ec05780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a150505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f54686520504d2068617320616c7265616479206265656e20736574000000000081525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60008060056000858152602001908152602001600020600301838154811061102f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166005600086815260200190815260200160002060020154915091509250929050565b600260005414156110f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002600081905550600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156111a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611de0602c913960400191505060405180910390fd5b600115156005600083815260200190815260200160002060040160159054906101000a900460ff16151514611225576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611e5e6025913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806112ce57503373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b611340576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f596f7520617265206e6f742074686520617070726f766572000000000000000081525060200191505060405180910390fd5b60016005600083815260200190815260200160002060050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060011515600560008381526020019081526020016000206005016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151480156114c8575060011515600560008381526020019081526020016000206005016000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b156115f75760006005600083815260200190815260200160002060020154905060006005600084815260200190815260200160002060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015611569573d6000803e3d6000fd5b506000600560008581526020019081526020016000206002018190555060016005600085815260200190815260200160002060060160006101000a81548160ff0219169083151502179055507fcecfe069ba6fec9da7eef46471cf342236259edb2613707eb625d530de5f27a58383604051808381526020018281526020019250505060405180910390a150505b600160008190555050565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156116aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611de0602c913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148061175357503373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b6117c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f596f7520617265206e6f742074686520617070726f766572000000000000000081525060200191505060405180910390fd5b60006005600083815260200190815260200160002060040160156101000a81548160ff0219169083151502179055507fdacaa4bbdb0a325befcb3bbfa7e3f086856eda89db9d8f6482e495652eb13543816040518082815260200191505060405180910390a150565b60006005600083815260200190815260200160002060030180549050905060056000838152602001908152602001600020600301339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff54149f38f7c5cf5b4cff6e9ba799b2530a4217493f6e79e8ab437ea4f315472823383604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15050565b3373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146119de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611e0c6030913960400191505060405180910390fd5b60016005600083815260200190815260200160002060040160156101000a81548160ff0219169083151502179055507f51b5b6c2b8eca2ddc226216fa938e67b4ee171f6592dfd922bf79e73385d664a816040518082815260200191505060405180910390a150565b348114611abc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f496e636f727265637420616d6f756e742073656e74000000000000000000000081525060200191505060405180910390fd5b33600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346004600082825401925050819055507f094ce2836bf951319e97175b25b4e55c12147e32456af0f4187dfcf8df54e3803334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6005602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c115780601f10611be657610100808354040283529160200191611c11565b820191906000526020600020905b815481529060010190602001808311611bf457829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611caf5780601f10611c8457610100808354040283529160200191611caf565b820191906000526020600020905b815481529060010190602001808311611c9257829003601f168201915b5050505050908060020154908060040160009054906101000a900460ff16908060040160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160159054906101000a900460ff16908060060160009054906101000a900460ff16905087565b600081600001549050919050565b6001816000016000828254019250508190555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611d8357805160ff1916838001178555611db1565b82800160010185558215611db1579182015b82811115611db0578251825591602001919060010190611d95565b5b509050611dbe9190611dc2565b5090565b5b80821115611ddb576000816000905550600101611dc3565b509056fe546869732066756e6374696f6e207265717569726573206120504d20746f2068617665206265656e20736574446f6e742068617665207468652061636365737320746f2073656e6420746865207461736b20666f72207265766965774f6e6c792074686520504d2063616e2063616c6c20746869732066756e6374696f6e546865207461736b20686173206e6f74206265656e2073656e7420666f7220726576696577a2646970667358221220b598aa4e4c25465ceea43d77110065aaede4bd318b27bc2da4a57739cc9131ba64736f6c63430007000033";

export class Kanban__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Kanban> {
    return super.deploy(overrides || {}) as Promise<Kanban>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Kanban {
    return super.attach(address) as Kanban;
  }
  connect(signer: Signer): Kanban__factory {
    return super.connect(signer) as Kanban__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KanbanInterface {
    return new utils.Interface(_abi) as KanbanInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Kanban {
    return new Contract(address, _abi, signerOrProvider) as Kanban;
  }
}

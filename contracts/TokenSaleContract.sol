//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TheMihirVishwakarma.sol";

contract TokenSale {
    address admin;
    TheMihirVishwakarma public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(TheMihirVishwakarma _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyToken(uint256 _numberOfTokens) public payable {
        require(msg.value == multiply(_numberOfTokens, tokenPrice));
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);
        require(
            tokenContract.transfer(
                msg.sender,
                _numberOfTokens * 1000000000000000000  // 1 token = 1 ether price is set in wei most IMPPPPPPPP
            )
        );

        tokensSold += _numberOfTokens;

        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public {
        require(msg.sender == admin);
        require(
            tokenContract.transfer(
                admin,
                tokenContract.balanceOf(address(this))
            )
        );

        payable(admin).transfer(address(this).balance);
    }
}

// Chatgpt code

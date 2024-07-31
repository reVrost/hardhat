// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Pasta is ERC1155, Ownable {
    constructor(
        address initialOwner
    )
        ERC1155(
            "https://yellow-adjacent-tiglon-46.mypinata.cloud/ipfs/QmTKMuR4jcqWXTisef73w9CZfY3aHDxNSrdk3TtMH6gShg"
        )
        Ownable(initialOwner)
    {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }
}

// contract Noodle is ERC20, Ownable, ERC20Permit {
//     constructor(address initialOwner)
//         ERC20("Noodle", "NOD")
//         Ownable(initialOwner)
//         ERC20Permit("Noodle")
//     {
//         _mint(msg.sender, 1000 * 10 ** decimals());
//     }
//
//     function mint(address to, uint256 amount) public onlyOwner {
//         _mint(to, amount);
//     }
// }
// <D-a>

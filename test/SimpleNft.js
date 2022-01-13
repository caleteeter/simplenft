const SimpleNft = artifacts.require('SimpleNft');

contract("SimpleNft contract tests", (accounts) => {
    let contract;
    let owner;

    before(async () => {
        contract = await SimpleNft.deployed();
        owner = accounts[0];
        user = accounts[1];
    });

    it("Should pass if the contract is deployed", async () => {
        let address = await contract.address;
        assert.ok(address);
    });

    it("Should pass if new NFT is created", async () => {
        await contract.mintItem(owner, 'https://www.bing.com');
        let tokenOwner = await contract.ownerOf(1);
        assert.strictEqual(tokenOwner, owner);
    });

    it("Should pass if token is transferred", async () => {
        await contract.transferFrom(owner, user, 1);
        let tokenOwner = await contract.ownerOf(1);
        let ownerBalance = await contract.balanceOf(owner);
        let userBalance = await contract.balanceOf(user);
        assert.strictEqual(tokenOwner, user);
        assert.strictEqual(ownerBalance.toNumber(), 0);
        assert.strictEqual(userBalance.toNumber(), 1);
    });
});
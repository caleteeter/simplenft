const SimpleNft = artifacts.require('SimpleNft');

module.exports = (deployer) => {
    deployer.deploy(SimpleNft);
};

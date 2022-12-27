import { ethers, waffle } from 'hardhat'
import chai from 'chai'
import { solidity } from 'ethereum-waffle'
import { TestToken } from '../typechain'

chai.use(solidity)
const { expect } = chai

describe('Token', () => {
  let testToken: TestToken

  const fixture = async () => {
    const factory = await ethers.getContractFactory('TestToken')
    return (await factory.deploy()) as TestToken
  }

  beforeEach('deploy TestToken', async () => {
    testToken = await waffle.loadFixture(fixture)
  })
  describe('Functionality', async () => {
    it('Should return name', async () => {
      let name = await testToken.name()
      console.log(name)
    })
    it('Should mint some tokens', async () => {
      const [deployer, user] = await ethers.getSigners()
      const tokenInstance = testToken.connect(deployer)
      const toMint = ethers.utils.parseEther('1')

      await tokenInstance.mint(user.address, toMint)

      expect(await tokenInstance.totalSupply()).to.eq(toMint)
    })
  })
})

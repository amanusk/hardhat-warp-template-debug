default:
	tsc

compile:
	npx hardhat compile

clean:
	rm -rf ./typechain/ ./artifacts/ ./cache/ ./dist ./typechain-types

clear:
	rm -rf .*.CALL_ROLLBACK.snapshot .*.log .*.fixture.0.snapshot .*.benchmark.json

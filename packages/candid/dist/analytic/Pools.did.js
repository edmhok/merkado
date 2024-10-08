export const idlFactory = ({ IDL }) => {
    const NatResult = IDL.Variant({ ok: IDL.Nat, err: IDL.Text });
    const PublicPoolOverView = IDL.Record({
        id: IDL.Nat,
        token0Id: IDL.Text,
        token1Id: IDL.Text,
        totalVolumeUSD: IDL.Float64,
        sqrtPrice: IDL.Float64,
        tvlToken0: IDL.Float64,
        tvlToken1: IDL.Float64,
        pool: IDL.Text,
        tick: IDL.Int,
        liquidity: IDL.Nat,
        token1Price: IDL.Float64,
        feeTier: IDL.Nat,
        volumeUSD: IDL.Float64,
        feesUSD: IDL.Float64,
        feesUSDChange: IDL.Float64,
        token1Standard: IDL.Text,
        tvlUSD: IDL.Float64,
        volumeUSDWeek: IDL.Float64,
        txCount: IDL.Nat,
        token1Decimals: IDL.Float64,
        token0Standard: IDL.Text,
        token0Symbol: IDL.Text,
        volumeUSDChange: IDL.Float64,
        tvlUSDChange: IDL.Float64,
        token0Decimals: IDL.Float64,
        token0Price: IDL.Float64,
        token1Symbol: IDL.Text,
        volumeUSDWeekChange: IDL.Float64
    });
    const PublicPoolDayData = IDL.Record({
        id: IDL.Nat,
        low: IDL.Float64,
        feeGrowthGlobal1X128: IDL.Int,
        token0Id: IDL.Text,
        token1Id: IDL.Text,
        volumeToken0: IDL.Float64,
        volumeToken1: IDL.Float64,
        sqrtPrice: IDL.Float64,
        high: IDL.Float64,
        close: IDL.Float64,
        open: IDL.Float64,
        pool: IDL.Text,
        tick: IDL.Int,
        liquidity: IDL.Int,
        token1Price: IDL.Float64,
        volumeUSD: IDL.Float64,
        feesUSD: IDL.Float64,
        feeGrowthGlobal0X128: IDL.Int,
        tvlUSD: IDL.Float64,
        timestamp: IDL.Int,
        txCount: IDL.Int,
        token0Price: IDL.Float64
    });
    const PublicSwapChartDayData = IDL.Record({
        id: IDL.Int,
        volumeUSD: IDL.Float64,
        feesUSD: IDL.Float64,
        tvlUSD: IDL.Float64,
        timestamp: IDL.Int,
        txCount: IDL.Int
    });
    const TransactionType = IDL.Variant({
        decreaseLiquidity: IDL.Null,
        claim: IDL.Null,
        swap: IDL.Null,
        addLiquidity: IDL.Null,
        increaseLiquidity: IDL.Null
    });
    const TransactionsType = IDL.Record({
        to: IDL.Text,
        action: TransactionType,
        token0Id: IDL.Text,
        token1Id: IDL.Text,
        liquidityTotal: IDL.Nat,
        from: IDL.Text,
        exchangePrice: IDL.Float64,
        hash: IDL.Text,
        tick: IDL.Int,
        token1Price: IDL.Float64,
        recipient: IDL.Text,
        token0ChangeAmount: IDL.Float64,
        sender: IDL.Text,
        exchangeRate: IDL.Float64,
        liquidityChange: IDL.Nat,
        token1Standard: IDL.Text,
        token0Fee: IDL.Float64,
        token1Fee: IDL.Float64,
        timestamp: IDL.Int,
        token1ChangeAmount: IDL.Float64,
        token1Decimals: IDL.Float64,
        token0Standard: IDL.Text,
        amountUSD: IDL.Float64,
        amountToken0: IDL.Float64,
        amountToken1: IDL.Float64,
        poolFee: IDL.Nat,
        token0Symbol: IDL.Text,
        token0Decimals: IDL.Float64,
        token0Price: IDL.Float64,
        token1Symbol: IDL.Text,
        poolId: IDL.Text
    });
    return IDL.Service({
        cycleAvailable: IDL.Func([], [NatResult], ["query"]),
        cycleBalance: IDL.Func([], [NatResult], ["query"]),
        deletePools: IDL.Func([IDL.Text], [], []),
        getAllPools: IDL.Func([IDL.Opt(IDL.Nat)], [IDL.Vec(PublicPoolOverView)], ["query"]),
        getBaseDataStructureCanister: IDL.Func([], [IDL.Text], ["query"]),
        getDayDataAllPools: IDL.Func([IDL.Opt(IDL.Nat)], [IDL.Vec(PublicPoolDayData)], ["query"]),
        getLastID: IDL.Func([IDL.Nat], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))], ["query"]),
        getPool: IDL.Func([IDL.Text], [PublicPoolOverView], ["query"]),
        getPoolChartData: IDL.Func([IDL.Text, IDL.Nat, IDL.Nat], [IDL.Vec(PublicSwapChartDayData)], ["query"]),
        getPoolTransactions: IDL.Func([IDL.Text, IDL.Nat, IDL.Nat], [IDL.Vec(TransactionsType)], ["query"]),
        getRollIndex: IDL.Func([], [IDL.Nat], ["query"]),
        getStartHeartBeatStatus: IDL.Func([], [IDL.Bool], ["query"]),
        reset: IDL.Func([], [], []),
        rollBackData: IDL.Func([IDL.Vec(TransactionsType)], [], []),
        rollBackStatus: IDL.Func([IDL.Bool], [], ["query"]),
        saveTransactions: IDL.Func([TransactionsType, IDL.Bool], [], [])
    });
};
export const init = ({ IDL }) => {
    return [];
};
//# sourceMappingURL=Pools.did.js.map
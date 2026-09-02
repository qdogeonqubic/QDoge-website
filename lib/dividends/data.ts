/**
 * Per-share dividend history (in qu) for Qubic tokens and smart contracts,
 * epochs 184-227. Base history (184-221) from the QTREAT dividends comparison
 * sheet. Epochs 222-227 for the smart-contract projects verified from
 * dividends.qubic.tools's "Old version" tab (the estimator derived from
 * balance changes -- cross-checked epoch 227 QRWA/QVAULT/MSVAULT/QBAY against
 * the site's newer chain-event-log "Dividends" tab and they matched exactly).
 * That site does NOT track QTREAT/QMINE/QCAP via the old estimator (they pay
 * via direct issuer transfers, not the SC dividend mechanism); its new tab
 * now lists them but the numbers didn't reconcile with our historical totals
 * (e.g. QRAFFLE's cumulative was far off), so untrusted for now. QTREAT/QCAP's
 * epoch 222-226 figures were supplied directly by the team; epoch 227 for all
 * three is pending.
 *
 * Prices are each asset's live "Last Price" (qu) on qxboard.com as of
 * 2026-09-01 -- qx.qubic.org itself remains deprecated (see prior note).
 * Yields and payback periods move with price, so these drift out of date;
 * re-pull from qxboard.com (or whatever succeeds it) on refresh.
 * Aggregates (total/avg/yields/payback) are recomputed from the per-epoch
 * series rather than taken from any summary columns, which lag the epoch
 * data. Regenerate when a new snapshot lands.
 */

export type DividendProject = {
  name: string;
  /** 'token' = QX asset, 'contract' = smart contract shares. */
  kind: 'token' | 'contract';
  scIndex: number | null;
  weeklyYieldPct: number;
  annualYieldPct: number;
  /** Weeks of dividends to recoup the share price; null if never paid. */
  paybackWeeks: number | null;
  avgWeekly: number;
  totalDividends: number;
  /** Share price in qu (QX snapshot). */
  price: number;
  /** Dividends per share per epoch (qu); null = no data / not live yet. */
  epochs: Array<number | null>;
};

export const EPOCH_FROM = 184;
export const EPOCH_TO = 227;

export const DIVIDEND_PROJECTS: DividendProject[] = [
  {
    name: 'QTREAT',
    kind: 'token',
    scIndex: null,
    weeklyYieldPct: 0.2691,
    annualYieldPct: 14,
    paybackWeeks: 371.6,
    avgWeekly: 121112.93,
    totalDividends: 3512275,
    price: 45000003,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 39961, 36029, 55400, 288032, 318896, 248096, 232384, 210612, 189123, 156286, 154599, 127903, 118250, 123493, 102582, 89501, 88599, 87597, 89761, 81669, 80190, 79419, 83782, 73448, 73727, 76858, 67710, 71054, 67314, null],
  },
  {
    name: 'QIP',
    kind: 'contract',
    scIndex: 18,
    weeklyYieldPct: 0.2132,
    annualYieldPct: 11.08,
    paybackWeeks: 469.1,
    avgWeekly: 807848.31,
    totalDividends: 12925573,
    price: 379000000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, 545018, 2208906, 32098, 167337, 2695350, 7094101, 26088, 100134, 1849, 53900, 423, 369, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, null, null],
  },
  {
    name: 'QMINE',
    kind: 'token',
    scIndex: null,
    weeklyYieldPct: 0.0452,
    annualYieldPct: 2.35,
    paybackWeeks: 2214.2,
    avgWeekly: 1.89,
    totalDividends: 71.91,
    price: 4190,
    // epochs 184..227
    epochs: [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 5, 2, 5, 2, 3, 2, 1.03, 0.93, 0.96, 1.72, 3.21, 1.47, 1.31, 0.1, 1.59, 1.22, 0.25, 1.84, 1.72, 1.65, 1.54, 1.37, null, null, null, null, null, null],
  },
  {
    name: 'RL',
    kind: 'contract',
    scIndex: 16,
    weeklyYieldPct: 0.0404,
    annualYieldPct: 2.1,
    paybackWeeks: 2473.8,
    avgWeekly: 60635.43,
    totalDividends: 1697792,
    price: 150000000,
    // epochs 184..227
    epochs: [19526, 10355, 31656, 163461, 616863, 261834, 143491, 77218, 72781, 7100, 94523, 46004, 24800, 47928, 27958, 81, 0, 3041, 10651, 5570, 5240, 1930, 16277, 9504, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, null, null],
  },
  {
    name: 'QRWA',
    kind: 'contract',
    scIndex: 20,
    weeklyYieldPct: 0.0341,
    annualYieldPct: 1.77,
    paybackWeeks: 2932.3,
    avgWeekly: 276230.7,
    totalDividends: 8286921,
    price: 810000000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, 263942, 254398, 232495, 617160, 849655, 277462, 282033, 230109, 321229, 209494, 146136, 143511, 130547, 134017, 240396, 215543, 193635, 220435, 171224, 309069, 440522, 326556, 254747, 226589, 200882, 184860, 217033, 172450, 0, null, 820792],
  },
  {
    name: 'QX',
    kind: 'contract',
    scIndex: 1,
    weeklyYieldPct: 0.0305,
    annualYieldPct: 1.59,
    paybackWeeks: 3280.1,
    avgWeekly: 2347509.12,
    totalDividends: 100942892,
    price: 7700000000,
    // epochs 184..227
    epochs: [353352, 5213601, 2122733, 846164, 645950, 882189, 2248160, 722157, 3607086, 480634, 3887334, 2108958, 681487, 12098906, 10715776, 8506098, 6829267, 9715154, 6379210, 944134, 2194350, 4688782, 3147873, 612702, 727820, 582077, 431974, 336943, 426051, 243880, 378977, 359969, 182740, 1812708, 1432197, 819827, 376294, 583775, 227400, 230360, 399257, 6, null, 1758580],
  },
  {
    name: 'QCAP',
    kind: 'token',
    scIndex: null,
    weeklyYieldPct: 0.0209,
    annualYieldPct: 1.09,
    paybackWeeks: 4778.7,
    avgWeekly: 62.74,
    totalDividends: 2698,
    price: 299837,
    // epochs 184..227
    epochs: [49, 8, 3, 5, 148, 55, 48, 16, 28, 5, 124, 90, 31, 128, 323, 525, 14, 311, 92, 37, 35, 73, 63, 32, 16, 24, 36, 19, 8, 5, 29, 14, 20, 45, 34, 21, 24, 16, 15, 20, 34, 32, 43, null],
  },
  {
    name: 'NOST',
    kind: 'contract',
    scIndex: 14,
    weeklyYieldPct: 0.0079,
    annualYieldPct: 0.41,
    paybackWeeks: 12601.1,
    avgWeekly: 10118.2,
    totalDividends: 101182,
    price: 127500000,
    // epochs 184..227
    epochs: [5325, null, null, 1331, null, null, null, null, null, 42603, 7988, null, null, null, 1332, null, 42603, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, null, null],
  },
  {
    name: 'VOTTUN',
    kind: 'contract',
    scIndex: 25,
    weeklyYieldPct: 0.0418,
    annualYieldPct: 2.17,
    paybackWeeks: 2393.4,
    avgWeekly: 263219.9,
    totalDividends: 5264398,
    price: 630000072,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 332, 147618, 200236, 210980, 157664, 77554, 26662, 77045, 99285, 159990, 429484, 15641, 31009, 66240, 39736, 78460, 254475, 712415, 40554, null, 2439018],
  },
  {
    name: 'QSWAP',
    kind: 'contract',
    scIndex: 13,
    weeklyYieldPct: 0.0122,
    annualYieldPct: 0.64,
    paybackWeeks: 8187.7,
    avgWeekly: 126409,
    totalDividends: 5435587,
    price: 1035000000,
    // epochs 184..227
    epochs: [9829, 330231, 26405, 39146, 27016, 25393, 327367, 344659, 39095, 29006, 38327, 14741, 22956, 64749, 899266, 9769, 306435, 355547, 337457, 321340, 43044, 319003, 24886, 34597, 19946, 23493, 605917, 16260, 25448, 12816, 16561, 25669, 35011, 42333, 44260, 31029, 45760, 38899, 29162, 29364, 26563, 341682, null, 35150],
  },
  {
    name: 'QRAFFLE',
    kind: 'contract',
    scIndex: 19,
    weeklyYieldPct: 0.0035,
    annualYieldPct: 0.18,
    paybackWeeks: 28646.5,
    avgWeekly: 2129.09,
    totalDividends: 70260,
    price: 60990989,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, 7988, 4205, 2196, 1420, null, 2130, 2218, 1331, 887, 1020, 221, 1331, 221, 4437, 44, 443, 1331, 1420, 2958, 2366, 4260, 4615, 946, 4733, 4970, 2366, 473, 591, 710, 591, 828, 5236, 946, 828, null, null],
  },
  {
    name: 'QBAY',
    kind: 'contract',
    scIndex: 12,
    weeklyYieldPct: 0.0036,
    annualYieldPct: 0.19,
    paybackWeeks: 27966.6,
    avgWeekly: 21382.65,
    totalDividends: 855306,
    price: 598000000,
    // epochs 184..227
    epochs: [162630, 53461, 4881, 47736, 171183, 24717, 66234, 118, 27943, 13357, 1005, null, null, 11449, 2500, 1967, 1183, 39511, 10806, 12507, 8579, 1997, 4881, 7011, 17869, 118, 19881, 4637, 18713, 18047, 0, 369, 43890, 939, 27943, 562, null, 7396, 1612, 0, 11183, 6270, null, 221],
  },
  {
    name: 'QVAULT',
    kind: 'contract',
    scIndex: 10,
    weeklyYieldPct: 0.0047,
    annualYieldPct: 0.24,
    paybackWeeks: 21335.6,
    avgWeekly: 16826.35,
    totalDividends: 723533,
    price: 359000000,
    // epochs 184..227
    epochs: [10981, 1941, 791, 1200, 33742, 12582, 15032, 2218, 6915, 1360, 15554, 12420, 12420, 17663, 44544, 75409, 14266, 44679, 13223, 5493, 5255, 84839, 24457, 19786, 17264, 18496, 5662, 2926, 1348, 862, 4520, 2231, 47587, 80878, 5378, 3382, 3778, 17367, 2393, 3183, 5450, 5045, null, 19013],
  },
  {
    name: 'MSVAULT',
    kind: 'contract',
    scIndex: 11,
    weeklyYieldPct: 0.002,
    annualYieldPct: 0.1,
    paybackWeeks: 49619.1,
    avgWeekly: 6707.41,
    totalDividends: 275004,
    price: 332816000,
    // epochs 184..227
    epochs: [50000, 3255, 31952, 2223, 2662, 2219, null, null, 2663, 2219, 1775, 1480, 1479, 1775, 18195, 2219, 28255, 5029, 4290, 3994, 3254, 23373, 5030, 5029, 5622, 4289, 4438, 5917, 3846, 3255, 3698, 3402, 3255, 3550, 3550, 3551, 3550, 3254, 3551, 3106, 3846, 3403, null, 3551],
  },
  {
    name: 'QTRY',
    kind: 'contract',
    scIndex: 2,
    weeklyYieldPct: 0.0009,
    annualYieldPct: 0.05,
    paybackWeeks: 110734.8,
    avgWeekly: 5554.71,
    totalDividends: 38883,
    price: 615100000,
    // epochs 184..227
    epochs: [3698, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 9838, 25347, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, null, null],
  },
  {
    name: 'RANDOM',
    kind: 'contract',
    scIndex: 3,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 2820000000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QUTIL',
    kind: 'contract',
    scIndex: 4,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 30000002,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'MLM',
    kind: 'contract',
    scIndex: 5,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 2700000004,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QEARN',
    kind: 'contract',
    scIndex: 9,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 56500000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QDRAW',
    kind: 'contract',
    scIndex: 15,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 12500000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QBOND',
    kind: 'contract',
    scIndex: 17,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 67499999.5,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QRP',
    kind: 'contract',
    scIndex: 21,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 9400000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QTF',
    kind: 'contract',
    scIndex: 22,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 6000000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QDUEL',
    kind: 'contract',
    scIndex: 23,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 4800004,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'PULSE',
    kind: 'contract',
    scIndex: 24,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 42200000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'QUSINO',
    kind: 'contract',
    scIndex: 26,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 68000000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'ESCROW',
    kind: 'contract',
    scIndex: 27,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 159000000,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    name: 'GGWP',
    kind: 'contract',
    scIndex: 28,
    weeklyYieldPct: 0,
    annualYieldPct: 0,
    paybackWeeks: null,
    avgWeekly: 0,
    totalDividends: 0,
    price: 140999999,
    // epochs 184..227
    epochs: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
];

/**
 * QTREAT circulating supply at the end of each epoch (from the team's
 * "dividends" sheet emission log, cross-checked against a live RPC balance
 * query on 2026-07-20 -- epoch 221's figure matched the live circulating
 * supply exactly). Tokens release gradually; max supply is fixed at 6,000.
 * Only defined for epochs QTREAT has actually paid (198 onward).
 */
export const QTREAT_MAX_SUPPLY = 6000;

export const QTREAT_SUPPLY_BY_EPOCH: Record<number, number> = {
  198: 166,
  199: 234,
  200: 319,
  201: 543,
  202: 609,
  203: 683,
  204: 752,
  205: 821,
  206: 1004,
  207: 1154,
  208: 1247,
  209: 1463,
  210: 1539,
  211: 1682,
  212: 1865,
  213: 2105,
  214: 2103,
  215: 2111,
  216: 2197,
  217: 2364,
  218: 2376,
  219: 2428,
  220: 2493,
  221: 2610,
  222: 2624,
  223: 2819,
  224: 2902,
  225: 3035,
};

/**
 * QTREAT's own treasury holdings -- the assets that actually generate the
 * qu dividends paid out to QTREAT holders. Supplied directly by the team,
 * 2026-09.
 */
export type TreasuryAssetKind = 'sc-share' | 'token' | 'income';

export type TreasuryAsset = {
  name: string;
  kind: TreasuryAssetKind;
  amount: number;
  unit: string;
  note?: string;
};

export const QTREAT_TREASURY_ASSETS: TreasuryAsset[] = [
  { name: 'QRAFFLE', kind: 'sc-share', amount: 22, unit: 'shares' },
  { name: 'MSVAULT', kind: 'sc-share', amount: 12, unit: 'shares' },
  { name: 'QRWA', kind: 'sc-share', amount: 12, unit: 'shares' },
  { name: 'QSWAP', kind: 'sc-share', amount: 1, unit: 'share' },
  { name: 'QIP', kind: 'sc-share', amount: 1, unit: 'share' },
  { name: 'VOTTUN', kind: 'sc-share', amount: 1, unit: 'share' },
  { name: 'QBAY', kind: 'sc-share', amount: 6, unit: 'shares' },
  { name: 'QMINE', kind: 'token', amount: 1357051, unit: 'tokens' },
  { name: 'WP', kind: 'token', amount: 4000000, unit: 'tokens', note: 'staked' },
  { name: 'ML', kind: 'token', amount: 4000000, unit: 'tokens' },
  { name: 'Mining rewards', kind: 'income', amount: 10000000, unit: 'qu' },
  { name: 'NFT sales', kind: 'income', amount: 192000000, unit: 'qu' },
];
